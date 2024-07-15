// product.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://api.kalpav.com/api/v1/product/category/retail';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product> {
    return this.http.get<Product>(this.apiUrl);
  }
}
  
    
  