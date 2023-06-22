import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  wishListData: any[] = [];
  full_name: string = '';
  constructor(private toast: NgToastService) {}

  addToWishList(event: any) {
    if ('wishList' in localStorage) {
      this.wishListData = JSON.parse(localStorage.getItem('wishList')!); // parse used when recieve from local storage
      let exist = this.wishListData.find(
        (item) => item.item.Id == event.item.Id
      );
      if (exist) {
        // alert("you have already added this product to your wishlist");
        this.toast.error({
          detail: 'ERROR',
          summary: 'Already added  to your wishlist ',
          duration: 5000,
        });
      } else {
        // alert('This product is successfully added to the wishlist ');
        this.toast.success({
          detail: 'SUCCESS',
          summary: 'Successfully added to the wishlist  ',
          duration: 5000,
        });
        this.wishListData.push(event);
        localStorage.setItem('wishList', JSON.stringify(this.wishListData)); // stringfy used when send or update local storage
      }
    } else {
      this.wishListData.push(event);
      localStorage.setItem('wishList', JSON.stringify(this.wishListData));
    }
  }
}
