import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiURL = "https://jorge15042001.pythonanywhere.com/accounts/api_login"

  
  constructor(private http: HttpClient, private cookies:CookieService) { }

  login(login: any, httpOptions: any): Observable<any> {
    return this.http.post(this.apiURL, login, httpOptions);
  }
  
  
}
