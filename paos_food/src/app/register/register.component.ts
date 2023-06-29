import { Component } from '@angular/core';
import { SingupService } from '../services/client/signup/singup.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  first_name = '';
  last_name = '';
  username = '';
  email = '';
  password = '';
  confirm_password= '';

  constructor(public signupservice: SingupService){}

  register() {
    const user = { 
      username: this.username,
      password1: this.password,
      password2: this.confirm_password,
      email: this.email, 
      first_name: this.first_name,
      last_name: this.last_name
     };

    const httpOptions = {
      header: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    this.signupservice.register(user, httpOptions).subscribe((data : any) => {
      this.signupservice.setSessionID(data.sessionid);
    },
    (error : any) => {
      console.error(error);
    }
    )
  }
}
