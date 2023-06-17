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
  categories: any = [];
  loading: boolean = false;
  Allpropage: boolean = true;
  cartData: any[] = []; //intermediate channel between local storage and items in product-list component
  constructor(private service: ProductService, private service2: CartService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCtegories();
  }
  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.loading = false;
      },
      (error) => {
        alert(error.message);
        this.loading = false;
      }
    ); //subscrib ----> observable object  قناة بتعبر من خلالها الداتا من الباك للفرونت
  }
  getCtegories() {
    this.loading = true;
    this.service.getProductCtegories().subscribe(
      (res: any) => {
        this.categories = res;
        this.loading = false;
      },
      (error) => {
        alert(error.message);
        this.loading = false;
      }
    ); //subscrib ----> observable object  قناة بتعبر من خلالها الداتا من الباك للفرونت
  }

  filterByCategory(event: any) {
    let value = event.target.value;
    console.log(value);
    if (value == 'all') {
      this.getProducts();
      this.Allpropage = true;
    } else {
      this.getAllProductByCategory(value);
      this.Allpropage = false;
    }
  }
  getAllProductByCategory(keyward: string) {
    this.loading = true;
    this.service.getProductByCtegories(keyward).subscribe(
      (res: any) => {
        this.products = res;
        this.loading = false;
        // if (this.products.length == 0) {
        //   this.Allpropage = false;
        // } else {
        //   this.Allpropage = true;
        // }
      },
      (error) => {
        alert(error.message);
        this.loading = false;
      }
    );
  }
  getproductByPage(x: string) {
    this.loading = true;
    this.service.getAllProductsByPages(x).subscribe(
      (res: any) => {
        this.products = res;
        this.loading = false;
      },
      (error) => {
        alert(error.message);
        this.loading = false;
      }
    );
  }
}
