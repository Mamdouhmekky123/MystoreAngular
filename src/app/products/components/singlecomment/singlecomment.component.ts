import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-singlecomment',
  templateUrl: './singlecomment.component.html',
  styleUrls: ['./singlecomment.component.css'],
})
export class SinglecommentComponent implements OnInit {
  comment: string = '';
  state: number = 0;
  postComment: any = [];
  nowcomment: any = {};
  allnowcomments: any = [];
  loading: Boolean = false;
  // userOb: any = {
  //   userId: 'A1YSN09LPZDZST',
  //   productId: this.service.productId,
  //   reviewText: '',
  // };
  constructor(private service: ProductService) {}
  ngOnInit(): void {
    this.getReviews();
  }

  post(): void {
    this.loading = true;
    this.service
      .createproductReviews(
        'A1YSN09LPZDZST',
        this.service.productId,
        this.comment
      )
      .subscribe(
        (res: any) => {
          this.nowcomment = res;
          console.log(this.nowcomment);
          this.loading = false;
        },
        (error) => {
          alert(error);
          this.loading = false;
        }
      );
    this.allnowcomments.push(this.comment);
    this.comment = '';
  }
  getReviews() {
    this.loading = true;
    this.service.getProductReviews(this.service.productId).subscribe(
      (res: any) => {
        this.postComment = res;
        this.loading = false;
      },
      (error) => {
        alert(error.message);
        this.loading = false;
      }
    ); //subscrib ----> observable object  قناة بتعبر من خلالها الداتا من الباك للفرونت
  }
  loggedin() {
    return localStorage.getItem('login');
  }
}
