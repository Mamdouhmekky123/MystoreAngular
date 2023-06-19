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
  @Input() controls: boolean = true;
  @Input() autoSlide: boolean = false;
  @Input() slideInterval: number = 5000;
  selectIndex = 0;
  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }
  selectImage(index: number) {
    this.selectIndex = index;
  }
  onPrevClick(): void {
    if (this.selectIndex === 0) {
      this.selectIndex = this.images.length - 1;
    } else {
      this.selectIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectIndex === this.images.length - 1) {
      this.selectIndex = 0;
    } else {
      this.selectIndex++;
    }
  }
  autoSlideImages() {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }
}
