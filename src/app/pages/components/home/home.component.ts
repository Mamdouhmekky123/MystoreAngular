import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
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
}
