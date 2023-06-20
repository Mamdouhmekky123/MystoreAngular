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
      'http://18.159.111.193/api/Product?PageNumber=1&PageSize=30&FieldsToExclude=Features'
    );
  }
  getAllProductsByPages(pageNum: string) {
    return this.http.get(
      'http://18.159.111.193/api/Product?PageNumber=' +
        pageNum +
        '&PageSize=30&FieldsToExclude=Features'
    );
  }
  getProductCtegories() {
    return this.http.get(
      'http://18.159.111.193/api/ProductCategory/ProductCategories?PageNumber=1&PageSize=50'
    );
  }
  getProductByCtegories(keyward: string) {
    return this.http.get(
      'http://18.159.111.193/api/Product?PageNumber=1&PageSize=20&FieldsToExclude=Features&ProductCategoryIds=' +
        keyward
    );
  }

  getProductById(id: any) {
    return this.http.get(
      'http://18.159.111.193/api/Product/' + id + '?FieldsToExclude=Features'
    );
  }
  // getRateProductById(id: any) {
  //   return this.http.get(
  //     'http://18.159.111.193/api/Rating/' + id
  //   );
  // }
}

