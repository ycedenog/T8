import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingupService {

  apiURL = "https://1d02-2800-bf0-8062-efb-6fc1-70ee-e697-d09f.ngrok-free.app/accounts/api_signup";


  constructor(private http: HttpClient) { }

  register(user: any, httpOptions: any) {
    return this.http.post(this.apiURL, user, httpOptions);
  }
}
