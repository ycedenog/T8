import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  apiURL = "/accounts/api_login/";

  constructor(private http: HttpClient, private cookies: CookieService) { }
  userData(httpOptions: any): Observable<any> {
    return this.http.get(this.apiURL, httpOptions);
  }
}
