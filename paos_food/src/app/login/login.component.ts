import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/client/login/login.service';
import { HttpClient ,HttpHeaders, HttpResponse } from '@angular/common/http';
import { TokensService } from '../services/client/tokens/tokens.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  
  constructor(private router:Router, public loginService: LoginService, public tokenService: TokensService){

  }

  login() {
    const user = { username: this.username, password: this.password };

    const httpOptions = {
      header: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    this.loginService.login(user, httpOptions).subscribe((response: HttpResponse<any>) => {
      console.log("Hola");
      const csrf = this.tokenService.getCSRFToken;
      const sessionid = this.tokenService.getSessionID;

      console.log(csrf);
      
    },
    (error: any) => {
      console.error(error);
    });

    //this.router.navigate(['/home']);
  }

}
