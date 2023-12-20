import { Component,inject,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Database,ref,set ,getDatabase, connectDatabaseEmulator, get,onValue} from '@angular/fire/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  
  constructor(private router:Router,private db:Database){
   
   
  }
  ngOnInit(): void {
    
    
  }
 
  
  movetor(){
    
    
    this.router.navigate(['/home/requests']);
  
  }
}
