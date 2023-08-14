import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/client/login/login.service';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { TokensService } from '../services/client/tokens/tokens.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatSnackBar } from '@angular/material/snack-bar'
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(private router: Router, public loginService: LoginService, public tokenService: TokensService,
    private spinner: NgxSpinnerService, private snackBar: MatSnackBar) {

  }

  login() {
    const user = { username: this.username, password: this.password };

    const httpOptions = {
      header: new HttpHeaders({
         'Content-Type': 'application/json',
      }),
      observe: 'response',
      responseType: 'text',
      withCredentials: true,
    };

    this.loginService.login(user, httpOptions).subscribe((response: HttpResponse<any>) => {


      if (response.status !== 200) {
        this.snackBar.open('Inicio de sesión fallido', 'Cerrar', {
          duration: 3000,
        });
      }
      // console.log(response.headers.getAll("Set-Cookie"))
      console.log(response)
      this.spinner.hide();

      for (let header of response.headers.keys()){
        console.log(header, response.headers.getAll(header));
      }

      this.router.navigate(['/home']);

    },
      (error: any) => {
        this.snackBar.open('Usuario o contraseña incorrecta', 'Cerrar', {
          duration: 3000,
        })
        console.log(error);
      });
  }

}
