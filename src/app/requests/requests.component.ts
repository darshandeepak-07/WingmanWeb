import { DatePipe } from '@angular/common';
import { Component,inject ,NgModule,OnInit, ElementRef, Renderer2} from '@angular/core';
import { Database,ref,set ,getDatabase,child,DataSnapshot,onValue,update,get} from '@angular/fire/database';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({

  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})



// Initialize Firebase

export class RequestsComponent implements OnInit{
  dataList: any[] = [];
  isVisible=true;
 database:Database;
 dt:string|null;
 currentDate: Date = new Date();
  visDec:boolean=true;
  VisGra:boolean=true;
  constructor(private db:Database,private datePipe: DatePipe,private renderer: Renderer2, private el: ElementRef){
    this.database=getDatabase();
   
    this.dt =this.formatDate(this.currentDate);
    console.log(this.dt);
  }
  chosenDateControl = new FormControl();


  private formatDate(date: Date): string | null {
    return date ? new DatePipe('en-US').transform(date, 'd-M-yyyy') : null;
  }
  onDateChange(event: any) {
    this.dt=this.formatDate(this.chosenDateControl.value);
    this.dataList=[];
    this.view(this.dt);

  }
  view(dt:string|null){
    const nodePath = '/Requests/'+dt+'/';
   
    // Create a reference to the node
    const nodeRef = ref(this.database, nodePath);

  
    onValue(nodeRef, (snapshot) => {
      if (snapshot.exists()) {
       
        const nodeData = snapshot.val();

        this.isVisible=!this.isVisible;
        this.dataList = Object.keys(nodeData).map((key) => nodeData[key]);

        console.log(this.dataList); 
      } else {
        this.isVisible=!this.isVisible;
        console.log('Node does not exist');
        this.dataList=[];
        
      }
    });
  }
  ngOnInit(): void {
    
    const nodePath = '/Requests/'+this.dt+'/';
    console.log(nodePath);
    // Create a reference to the node
    const nodeRef = ref(this.database, nodePath);

  
    onValue(nodeRef, (snapshot) => {
      if (snapshot.exists()) {
       
        const nodeData = snapshot.val();
        const element = this.renderer.selectRootElement('#res');
    this.renderer.setProperty(element, 'textContent', '');
       
        this.dataList = Object.keys(nodeData).map((key) => nodeData[key]);
        const addVd={
          vDec: true
        };
        this.dataList.push(addVd);
        console.log(this.dataList); 
      } else {
        
        const element = this.renderer.selectRootElement('#res');
    this.renderer.setProperty(element, 'textContent', 'No Records found');
        
      }
    });
  }

    
  onGrant(std:any){

    const val={state:"Permission Granted"};
    console.log(this.dt);
    const nodeRef = ref(this.database, "/Requests/"+this.dt+"/"+std.roll+"/");
    
    return update(nodeRef, val);
    
  }
  onDecline(std:any)
  {
    const val={state:"Permission Declined"};
    console.log(this.dt);
    const nodeRef = ref(this.database, "/Requests/"+this.dt+"/"+std.roll+"/");
    
    return update(nodeRef, val);

  }
  check(std:any){
    
    this.getValue("/Requests/"+this.dt+"/"+std.roll+"/state")
      .then((value:string) => {
        console.log('Node value:', value);
        if(value=="Permission Granted"){
        
          this.change(std);
        }
      })
      .catch((error) => {
        console.error('Error getting node value', error);
      });
      
  }
  change(std:any){
    this.visDec=!this.visDec;
   
  }
  getValue(path: string): Promise<any> {
    const nodeRef = ref(this.database, path);
    return get(nodeRef).then((snapshot) => snapshot.val());
  }
}
