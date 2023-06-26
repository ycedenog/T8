import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/client/login/login.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  
  constructor(private router:Router, public loginService: LoginService){

  }

  login() {
    const user = { username: this.username, password: this.password };

    const httpOptions = {
      header: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    this.loginService.login(user, httpOptions).subscribe((data: any) => {
      console.log(data);
    },
    (error: any) => {
      console.error(error);
    });

    //this.router.navigate(['/home']);
  }

}
