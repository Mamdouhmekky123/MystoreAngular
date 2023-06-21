import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishListData:any[]=[];
  full_name:string="";
  constructor() { }

  addToWishList(event:any){
    if("wishList" in localStorage){
      this.wishListData=JSON.parse(localStorage.getItem("wishList")!); // parse used when recieve from local storage
      let exist = this.wishListData.find(item => item.item.Id == event.item.Id);
      if(exist){
        alert("you have already added this product to your wishlist");
      }else{
        alert('This product is successfully added to the wishlist ');
        this.wishListData.push(event);
        localStorage.setItem("wishList",JSON.stringify( this.wishListData));  // stringfy used when send or update local storage
      }
    
    }else{
      this.wishListData.push(event);
      localStorage.setItem("wishList",JSON.stringify( this.wishListData));
    }
      }
}
