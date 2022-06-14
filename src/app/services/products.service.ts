import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  //CRUD Methods
  createProduct(productBody:any):Observable<Product>{
    const url:string = "http://localhost:300/products";
    return this.http.post<Product>(url, productBody);
  }

  deleteProduct(productId:number):Observable<Product>{
    const url:string = "http://localhost:300/products/"+productId;
    return this.http.delete<Product>(url);
  }
  getProduct(productId:number):Observable<Product>{
    const url:string = "http://localhost:300/products/"+productId;
    return this.http.get<Product>(url);
  }

  getAllProducts():Observable<Product>{
    const url:string = "http://localhost:300/products";
    return this.http.get<Product>(url);
  }
  getProdcutsByCategory(categoryId:number):Observable<Product>{
    const url:string = "http://localhost:300/products/category="+categoryId;
    return this.http.get<Product>(url);
  }
  getProductsByDate(dateParam:Params):Observable<Product>{
    const url:string = "http://localhost:300/products/date="+dateParam;
    return this.http.get<Product>(url);
  }

}
