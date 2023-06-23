import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentInterface } from '../types/comment.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  amountFromDetais!: number;
  reviews: any = [];
  productId: any = '';
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
    return this.http.post(
      'http://18.159.111.193/api/Product/recommendByPid/'+id+'?PageNumber=1&PageSize=6&FieldsToExclude=Features',
      id
    );
  }

  getRecommendedUserProducts(user: string) {
    return this.http.post(
      'http://18.159.111.193/api/Product/recommendByUid/A2KSSY17EVL3OX?PageNumber=2&PageSize=6&FieldsToExclude=Features',
      user
    );
  }
  getRandomUserId(): string {
    const userIds: string[] = [
      'A2KSSY17EVL3OX',
      'AM8YFWHCXNJS3',
      'A3PBRY694E6BHV',
      'A3C53H99BODHCV',
      'A1NTLY4K6GD1WX',
      'AI3ZL8GDSX3G8',
      'A47RW7T0MFHSX',
      'A2E5L8WZYMFGZ4',
      'APJ5LNYEUXMEM',
      'A3H7XT5I2XIGLL',
    ];

    const randomIndex = Math.floor(Math.random() * userIds.length);
    const randomUserId = userIds[randomIndex];

    // remove the selected user ID from the array to prevent duplicate values
    userIds.splice(randomIndex, 1);

    // if all user IDs have been selected, reset the array
    if (userIds.length === 0) {
      userIds.push(
        'A2KSSY17EVL3OX',
        'AM8YFWHCXNJS3',
        'A3PBRY694E6BHV',
        'A3C53H99BODHCV',
        'A1NTLY4K6GD1WX',
        'AI3ZL8GDSX3G8',
        'A47RW7T0MFHSX',
        'A2E5L8WZYMFGZ4',
        'APJ5LNYEUXMEM',
        'A3H7XT5I2XIGLL'
      );
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
