import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokensService } from '../client/tokens/tokens.service';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiURL = "/api/order_cart/"

  constructor(private http: HttpClient, public tokenService: TokensService) { }
  orderCart(delivery_address:string):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-CSRFToken': this.tokenService.getCSRFToken()
    })

    const httpOptions: any = {
      headers: headers,
      observe: 'response',
      withCredentials: true,
    };
    return this.http.post(this.apiURL, {"delivery_address": delivery_address}, httpOptions);
  }
}
