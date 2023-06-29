import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiURL = "https://jorge15042001.pythonanywhere.com/api/product/"

  constructor(private http:HttpClient) { }

  getProduct():Observable<any>{
    return this.http.get<any>(this.apiURL);
  }

  getProductsById(id: string):Observable<any>{
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

}
