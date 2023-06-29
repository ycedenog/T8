import { Component } from '@angular/core';
import { SingupService } from '../services/client/signup/singup.service';
import { HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar} from '@angular/material/snack-bar'
import { Router } from '@angular/router';

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

  constructor(public signupservice: SingupService, private dialog: MatDialog, private snackBar: MatSnackBar, private router: Router){}

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
      this.snackBar.open('Se ha registrado con éxito', 'Cerrar', {
        duration: 3000,
      })
      this.router.navigate(['/login']);

    },
    (error : any) => {
      console.error(error);
    }
    )
  }
}
