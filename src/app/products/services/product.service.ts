import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentInterface } from '../types/comment.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService implements OnInit {
  constructor(private http: HttpClient) {}
  amountFromDetais!: number;
  reviews: any = [];
  productId: any = '';
  rating: number = 0;
  disable: boolean = false;
  userId: string = '';

  ngOnInit(): void {
    this.userId = this.getRandomUserId();
  }
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

  getMostPopular() {
    return this.http.get(
      'http://18.159.111.193/api/Product?PageNumber=2&PageSize=6&FieldsToExclude=Features%2CDescription&orderBy=-VoteCount'
    );
  }
  getRecommendedById(id: string) {
    return this.http.get(
      'http://18.159.111.193/api/Product/recommendByPid/' +
        id +
        '?PageNumber=1&PageSize=10&FieldsToExclude=Features'
    );
  }

  getRecommendedUserProducts() {
    const values: string[] = ['2', '3', '4'];
    const randomIndex: number = Math.floor(Math.random() * values.length);
    return this.http.get(
      'http://18.159.111.193/api/Product/recommendByUid/AM8YFWHCXNJS3?PageNumber=' +
        values[randomIndex] +
        '&PageSize=6&FieldsToExclude=Features'
    );
  }
  getRandomUserId(): string {
    const userIds: string[] = ['2', '3', '4'];

    const randomIndex = Math.floor(Math.random() * userIds.length);
    const randomUserId = userIds[randomIndex];

    // remove the selected user ID from the array to prevent duplicate values
    userIds.splice(randomIndex, 1);

    // if all user IDs have been selected, reset the array
    if (userIds.length === 0) {
      userIds.push('2', '3', '4');
    }

    return randomUserId;
  }

  getProductReviews(id: any) {
    return this.http.get(
      'http://18.159.111.193/api/Review?productId=' +
        id +
        '&PageNumber=1&PageSize=10&orderBy=-'
    );
  }

  createproductReviews(
    user: string = 'A1YSN09LPZDZST',
    prodId: string,
    reviewTxt: string
  ): Observable<CommentInterface> {
    return this.http.post<any>('http://18.159.111.193/api/Review', {
      userId: user,
      productId: prodId,
      reviewText: reviewTxt,
    });
  }
}
