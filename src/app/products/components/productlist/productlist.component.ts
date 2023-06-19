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
  filteredProducts: any = [];
  categories: any = [];
  loading: boolean = false;
  Allpropage: boolean = true;
  cartData: any[] = []; //intermediate channel between local storage and items in product-list component
  searchText:String="";
  constructor(private service: ProductService, private service2: CartService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCtegories();
  }


  /************** filter products ********************/
  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredProducts = this.performFilter(value);
  }
  performFilter(filterBy: string):any {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: any) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }


  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.filteredProducts = this.products;
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

  addingToChart(event:any){
    this.service2.addToChart(event);   
  }

  onSearchTextEntered(searchValue:String){
    this.searchText=searchValue;
    console.log(this.searchText);
  }

}
