import { Component ,OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private authSerice:AuthService,private router:Router){}

    ngOnInit(){
      if(!this.authSerice.isLoggedIn()){
        this.router.navigate(['/login'])
      }
    }
    logout(){
      this.authSerice.logout();
      if(!this.authSerice.isLoggedIn()){
        this.router.navigate(['/login'])
      }
    }
}
