import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokensService } from '../client/tokens/tokens.service';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {
  apiURL = "/api/cart/"

  constructor(private http: HttpClient, public tokenService: TokensService) { }

  delete(cart_item_id:number):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cookie': `csrftoken=${this.tokenService.getCSRFToken()};sessionid=${this.tokenService.getSessionID()}`
    })

    const httpOptions: any = {
      header: headers,
      observe: 'response',
      withCredentials: true,
    };
    return this.http.delete(`${this.apiURL}${cart_item_id}/`, httpOptions)
  }

  getCart(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cookie': `csrftoken=${this.tokenService.getCSRFToken()};sessionid=${this.tokenService.getSessionID()}`
    })

    const httpOptions: any = {
      header: headers,
      observe: 'response',
      withCredentials: true,
    };
    return this.http.get(this.apiURL, httpOptions);
  }
  addToCart(product_id: number, quantity: number): Observable<any> {
    console.log(`csrftoken=${this.tokenService.getCSRFToken()};sessionid=${this.tokenService.getSessionID()}`);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Cookie': `csrftoken=${this.tokenService.getCSRFToken()};sessionid=${this.tokenService.getSessionID()}`,
      'X-CSRFToken': this.tokenService.getCSRFToken()
    })

    const httpOptions: any = {
      headers: headers,
      observe: 'response',
      withCredentials: true,
    };
    return this.http.post(this.apiURL, { "product": product_id, "quantity": quantity }, httpOptions);
  }
}
