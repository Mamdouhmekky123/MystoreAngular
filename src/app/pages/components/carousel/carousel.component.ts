import { Component, Input, OnInit } from '@angular/core';

interface carouselImage {
  imageSrc: string;
  imageAlt: String;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() images: carouselImage[] = [];
  @Input() indicator: boolean = true;
  @Input() control: boolean = true;
  selectIndex = 0;
  ngOnInit(): void {}
  selectImage(index: number) {
    this.selectIndex = index;
  }
}
