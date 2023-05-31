import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiURL = "http://127.0.0.1:8000/product"

  constructor(private http:HttpClient) { }

  getProduct():Observable<any>{
    return this.http.get<any>(this.apiURL);
  }

  getProductsById(id: string):Observable<any>{
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

}
