import { Component } from '@angular/core';
import { CartService } from './../../../cart/services/cart.service';
import { ProductService } from './../../services/product.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent {
  products: any = []; //بعمل ارراي  عشان استقبل فيه ال داتا
  cartData: any[] = []; //intermediate channel between local storage and items in product-list component
  constructor(private service: ProductService, private service2: CartService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        console.log(this.products);
      },
      (error) => {
        alert(error.message);
      }
    ); //subscrib ----> observable object  قناة بتعبر من خلالها الداتا من الباك للفرونت
  }
}
