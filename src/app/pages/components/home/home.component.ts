import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { ProductService } from 'src/app/products/services/product.service';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  products: any = [];
  recommrndedUserProduct: any = [];
  item: any = {};
  loading: boolean = false;
  constructor(private service: ProductService, private service2: CartService) {}
  ngOnInit(): void {
    this.getPopular();
    this.getUserProd();
    localStorage.setItem(
      'randUser',
      JSON.stringify(this.service.getRandomUserId())
    );

    console.log(this.userId);
  }
  title = 'carousel';
  Allimages = [
    {
      imageSrc: 'assets/onlineshopping.jpg',
      imageAlt: 'nature1',
    },
    {
      imageSrc: 'assets/men4.jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc: 'assets/samsun.jpg',
      imageAlt: 'samsung',
    },
    {
      imageSrc: 'assets/men3.jpg',
      imageAlt: 'men2',
    },
    {
      imageSrc: 'assets/sales1.jpg',
      imageAlt: 'sales',
    },
    {
      imageSrc: 'assets/sales2.jpg',
      imageAlt: 'sales',
    },
  ];
  userId: string = JSON.parse(localStorage.getItem('randUser')!);
  getPopular() {
    this.loading = true;
    this.service.getMostPopular().subscribe(
      (res: any) => {
        console.log(res);
        this.products = res;
        this.loading = false;
      },
      (error) => {
        alert(error.message);
        this.loading = false;
      }
    ); //subscrib ----> observable object  قناة بتعبر من خلالها الداتا من الباك للفرونت
  }
  addingToChart(event: any) {
    this.service2.addToChart(event);
  }

  getUserProd() {
    // alert(this.userId);
    this.loading = true;
    this.service.getRecommendedUserProducts().subscribe(
      (res: any) => {
        console.log(res);
        this.recommrndedUserProduct = res;
        console.log(this.userId);
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
