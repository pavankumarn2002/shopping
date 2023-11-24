import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../shared/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL = `https://dummyjson.com/products`
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getAllData(): Observable<any> {
    return this.http.get<Product>(`${this.baseURL}`)
  }
  getElement(id: number): Observable<any> {
    return this.http.get<Product>(`${this.baseURL}/` + id)
  }
  create(post:any): Observable<any> {
    return this.http.post(`${this.baseURL}/`, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  update(id:any, post:any): Observable<any> {
    return this.http.put(`${this.baseURL}/` + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
