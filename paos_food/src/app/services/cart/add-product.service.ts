import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {
  apiURL = "/api/cart"

  constructor(private http:HttpClient) { }

  getCart():Observable<any>{
    return this.http.get<any>(`${this.apiURL}/`)
  }
  addToCart(product_id:number, quantity:number):Observable<any>{
    return this.http.post<any>(`${this.apiURL}/`,{"product":product_id,"quantity":quantity})
  }
}
