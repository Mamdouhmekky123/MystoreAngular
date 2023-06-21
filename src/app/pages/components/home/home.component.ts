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
  item:any={};
  constructor(private service: ProductService, private service2: CartService) {}
  ngOnInit(): void {
    this.getPopular();
  }
  title = 'carousel';
  Allimages = [
    {
      imageSrc: 'assets/online shopping.jpg',
      imageAlt: 'nature1',
    },
    {
      imageSrc: 'assets/men1.jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc: 'assets/samsung.jpg',
      imageAlt: 'samsung',
    },
    {
      imageSrc: 'assets/men2.jpg',
      imageAlt: 'men2',
    },
    {
      imageSrc: 'assets/sales.jpg',
      imageAlt: 'sales',
    },
  ];
  getPopular() {
    this.service.getMostPopular().subscribe(
      (res: any) => {
        console.log(res);
        this.products = res;
      },
      (error) => {
        alert(error.message);
      }
    ); //subscrib ----> observable object  قناة بتعبر من خلالها الداتا من الباك للفرونت
  }
  addingToChart(event: any) {
    this.service2.addToChart(event);
  }
}
