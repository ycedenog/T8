import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiURL = "https://1d02-2800-bf0-8062-efb-6fc1-70ee-e697-d09f.ngrok-free.app/accounts/api_login"

  
  constructor(private http: HttpClient) { }

  login(login: any, httpOptions: any): Observable<any> {
    return this.http.post(this.apiURL, login, httpOptions);
  }
}
