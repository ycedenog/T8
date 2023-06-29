import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/client/login/login.service';
import {HttpHeaders, HttpResponse } from '@angular/common/http';
import { TokensService } from '../services/client/tokens/tokens.service';
import { NgxSpinnerService} from 'ngx-spinner';
import { MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username= '';
  password = '';
  
  constructor(private router:Router, public loginService: LoginService, public tokenService: TokensService,
    private spinner: NgxSpinnerService, private snackBar: MatSnackBar){

  }

  login() {
    const user = { username: this.username, password: this.password };

    const httpOptions = {
      header: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    this.loginService.login(user, httpOptions).subscribe((response: HttpResponse<any>) => {
      console.log(response);
      const code = 200;

      if (code === 200){
        this.spinner.hide();
        this.router.navigate(['/home']);
      }
      
    },
    (error: any) => {
      this.snackBar.open('Usuario o contraseña incorrecta', 'Cerrar', {
        duration: 3000,
      })
      console.log(error);
    });
  }

}
