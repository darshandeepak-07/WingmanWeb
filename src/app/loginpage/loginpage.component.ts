import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  username:string=''
  password:string=''
  constructor(private authService:AuthService,private router:Router){}

  login(){
    if(this.username.trim()=='admin'&&this.password.trim()=='123')
    {
      this.authService.login();
      this.router.navigate(['/home/dashboard'])
    }
    else{
      alert('Incorrect Username or Password')
    }
  }
}
