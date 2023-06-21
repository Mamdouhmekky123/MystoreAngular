import { Component } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent {
  wishProducts: any[] = [];
  total: number = 0;
  totalItems: number = 0;
  products: any = [];
  Total!: number;
  item: any = {};
  constructor(private service2: CartService) {}

  ngOnInit(): void {
    this.getCartProduct();
    this.NumberOfItems();
  }
  //get the set of products added to the cart from the local storage
  getCartProduct() {
    if ('wishList' in localStorage) {
      this.wishProducts = JSON.parse(localStorage.getItem('wishList')!);
    }
    this.getTotalCartPrice();
  }
  //calculating the tatal price of products
  getTotalCartPrice() {
    this.total = 0;
    for (let i = 0; i < this.wishProducts.length; i++) {
      this.total +=
        this.wishProducts[i].item.Price * this.wishProducts[i].quantity;
    }
  }
  //   //decrese amount of product
  // minus(index: number) {
  //   this.wishProducts[index].quantity--;
  //   this.NumberOfItems();
  //   localStorage.setItem('cart', JSON.stringify(this.wishProducts));
  // }
  //   //Increse amount of product
  // plus(index: number) {
  //   this.wishProducts[index].quantity++;
  //   this.getTotalCartPrice();
  //   this.NumberOfItems();
  //   localStorage.setItem('cart', JSON.stringify(this.wishProducts));
  // }
  //detect changes in  amount of product
  detectChange(index: number) {
    this.NumberOfItems();
    localStorage.setItem('wishList', JSON.stringify(this.wishProducts));
  }
  //delete  products from cart
  deleteItem(index: number) {
    this.wishProducts.splice(index, 1);
    this.NumberOfItems();
    this.getTotalCartPrice();
    localStorage.setItem('wishList', JSON.stringify(this.wishProducts));
  }
  clearData() {
    this.wishProducts = [];
    this.NumberOfItems();
    this.getTotalCartPrice();
    localStorage.setItem('wishList', JSON.stringify(this.wishProducts));
  }

  NumberOfItems() {
    this.totalItems = 0;
    for (let i = 0; i < this.wishProducts.length; i++) {
      this.totalItems += this.wishProducts[i].quantity;
    }
    localStorage.setItem('wishList', JSON.stringify(this.wishProducts));
  }

  addToChart() {
    

    this.service2.addToCartFromWish(this.item);
  }
}

[
  {
    item: {
      Brand: { Id: 1509, Name: 'Eureka' },
      Id: 'B00002N8CZ',
      VoteCount: 13,
      DateAdded: '1995-10-11T13:53:58',
      VoteAverage: 3,
      ProductCategories: [
        { Id: 8468, Name: 'Home & Kitchen' },
        { Id: 8475, Name: 'Vacuums & Floor Care' },
        { Id: 8476, Name: 'Vacuums' },
      ],
      Title: 'Eureka Quick Up 2-in-1 Cordless w/Bonus Battery Pack, 96JZ',
      Description:
        'Lightweight cordless design means no more worries about pushing around a heavy vacuum cleaner. Weighs less than 5 pounds. Equipped with a powerful brush roll and two-motor system, it\'s ideal for cleaning thick carpets and floors. The 10" cleaning width and .6 liter dust capacity allow you to vacuum large areas quickly and easily.',
      Price: 879.07,
      Discount: 0,
      HighResImageURLs:
        'https://images-na.ssl-images-amazon.com/images/I/31Wy2gAODpL.jpg || https://images-na.ssl-images-amazon.com/images/I/31NMg5TWxTL.jpg || https://images-na.ssl-images-amazon.com/images/I/51zH09JrRTL.jpg || https://images-na.ssl-images-amazon.com/images/I/517MZnL4g8L.jpg || https://images-na.ssl-images-amazon.com/images/I/51xTGbMb6AL.jpg || https://images-na.ssl-images-amazon.com/images/I/51l4nyJSocL.jpg',
      Quantity: 8,
      BrandId: 1509,
    },
  },
];

[
  {
    item: [
      {
        item: {
          Brand: { Id: 1509, Name: 'Eureka' },
          Id: 'B00002N8CZ',
          VoteCount: 13,
          DateAdded: '1995-10-11T13:53:58',
          VoteAverage: 3,
          ProductCategories: [
            { Id: 8468, Name: 'Home & Kitchen' },
            { Id: 8475, Name: 'Vacuums & Floor Care' },
            { Id: 8476, Name: 'Vacuums' },
          ],
          Title: 'Eureka Quick Up 2-in-1 Cordless w/Bonus Battery Pack, 96JZ',
          Description:
            'Lightweight cordless design means no more worries about pushing around a heavy vacuum cleaner. Weighs less than 5 pounds. Equipped with a powerful brush roll and two-motor system, it\'s ideal for cleaning thick carpets and floors. The 10" cleaning width and .6 liter dust capacity allow you to vacuum large areas quickly and easily.',
          Price: 879.07,
          Discount: 0,
          HighResImageURLs:
            'https://images-na.ssl-images-amazon.com/images/I/31Wy2gAODpL.jpg || https://images-na.ssl-images-amazon.com/images/I/31NMg5TWxTL.jpg || https://images-na.ssl-images-amazon.com/images/I/51zH09JrRTL.jpg || https://images-na.ssl-images-amazon.com/images/I/517MZnL4g8L.jpg || https://images-na.ssl-images-amazon.com/images/I/51xTGbMb6AL.jpg || https://images-na.ssl-images-amazon.com/images/I/51l4nyJSocL.jpg',
          Quantity: 8,
          BrandId: 1509,
        },
      },
    ],
    quantity: 1,
  },
];
