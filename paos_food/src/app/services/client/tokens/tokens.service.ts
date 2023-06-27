import { Injectable } from '@angular/core';
import {CookieService}  from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokensService {

  constructor(private cookieService : CookieService) { }

  getSessionID() : string {
    return this.cookieService.get('sessionid');
  }

  getCSRFToken() : string {
    return this.cookieService.get('csrftoken');
  }
}
