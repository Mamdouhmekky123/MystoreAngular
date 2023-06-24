import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { IssueService } from 'src/app/chatbot/services/issue.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartData: any[] = [];
  full_name: string = '';
  Address: string = '';
  TotalMony:any=0

  constructor(private toast: NgToastService) {}

  addToChart(event: any) {
    console.log(event);
    if ('cart' in localStorage) {
      this.cartData = JSON.parse(localStorage.getItem('cart')!); // parse used when recieve from local storage
      let exist = this.cartData.find((item) => item.item.Id == event.item.Id);
      if (exist) {
        this.toast.error({
          detail: 'ERROR',
          summary: 'Already added  to your to your cart',
          duration: 5000,
        });
        // alert('you have already added this product to your cart');
      } else {
        this.toast.success({
          detail: 'SUCCESS',
          summary: 'Successfully added to the cart ',
          duration: 5000,
        });
        // alert('This product is successfully added to the cart ');
        this.cartData.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartData));
        localStorage.setItem('adminCart', JSON.stringify(this.cartData)); // stringfy used when send or update local storage
      }
    } else {
      this.cartData.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartData));
      localStorage.setItem('adminCart', JSON.stringify(this.cartData));
    }
  }

  addToCartFromWish(event: any) {
    if ('cart' in localStorage) {
      this.cartData = JSON.parse(localStorage.getItem('cart')!); // parse used when recieve from local storage
      console.log(event.item[0].item.Id);

      let exist = this.cartData.find(
        (item) => item.item.Id == event.item[0].item.Id
      );
      if (exist) {
        alert('you have already added this product to your cart');
      } else {
        alert('This product is successfully added to the cart ');
        this.cartData.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartData));
        localStorage.setItem('adminCart', JSON.stringify(this.cartData)); // stringfy used when send or update local storage
      }
    } else {
      this.cartData.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartData));
      localStorage.setItem('adminCart', JSON.stringify(this.cartData));
    }
  }
}
