import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  amountFromDetais!: number;
  getAllProducts() {
    return this.http.get(
      'http://18.159.111.193/api/Product?PageNumber=1&PageSize=20&FieldsToExclude=Features'
    );
  }
}
