import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  first_name: string = '';
  last_name: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  confirm_password: string = '';

  constructor(){}

  register() {
    console.log(this.first_name);
    console.log(this.last_name);
    console.log(this.username);
    console.log(this.email);
    console.log(this.password);
    console.log(this.confirm_password);
  }
}
