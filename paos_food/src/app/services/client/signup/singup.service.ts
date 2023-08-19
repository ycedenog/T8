import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SingupService {

  apiURL = "/accounts/api_signup";


  constructor(private http: HttpClient, private cookies : CookieService) { }

  register(user: any, httpOptions: any) {
    return this.http.post(this.apiURL, user, httpOptions);
  }

  setSessionID(sessionID : string): void {
    this.cookies.set('sessionID', sessionID);
  }

  setCSRF(csrfToken : string): void {
    this.cookies.set('CSRF', csrfToken);
  }

  getSessionID(): string {
    return this.cookies.get('sessionID');
  } 

  getCSRF(): string {
    return this.cookies.get('CSRF');
  }
}
