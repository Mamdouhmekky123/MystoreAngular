import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  constructor(private service: ProductService) {}
  // ngOnInit(): void {}

  ratingcount = 0;
  totalrating = 0;
  Finalrating: any;
  isRatingSubmitted: boolean = false;
  ratingcontrol = new FormControl(0);
  rate: number | null = 0;

  ngOnInit(): void {
    this.isRatingSubmitted = this.service.disable;
  }
  GetRating() {
    this.rate = this.ratingcontrol.value;
    this.ratingcount++;
    this.totalrating += this.ratingcontrol?.value || 0;
    this.Finalrating = (this.totalrating / this.ratingcount).toFixed(2);
    localStorage.setItem(
      'rate',
      JSON.stringify({
        id: this.service.productId,
        rate: this.ratingcontrol.value,
      })
    );
    this.isRatingSubmitted = true;
  }

  // @Input() productId!: number;
  // ratingControl: FormControl<number | null> = new FormControl(null);
  // finalRating: number | null = null;
  // isRatingSubmitted: boolean = false;

  // ngOnInit(): void {
  //   const storedRating = localStorage.getItem(
  //     `productRating_${this.productId}`
  //   );
  //   if (storedRating !== null) {
  //     this.finalRating = parseFloat(storedRating);
  //     this.ratingControl.setValue(this.finalRating);
  //     this.isRatingSubmitted = true;
  //   }
  //   console.log(this.productId + 'from the rating component ;)');
  // }

  // submitRating(): void {
  //   if (this.ratingControl.value !== null) {
  //     this.finalRating = this.ratingControl.value;
  //     this.isRatingSubmitted = true;
  //     localStorage.setItem(
  //       `productRating_${this.productId}`,
  //       this.finalRating.toString()
  //     );
  //   }
  // }

  // resetRating(): void {
  //   this.ratingControl.reset();
  //   this.finalRating = null;
  //   this.isRatingSubmitted = false;
  //   localStorage.removeItem(`productRating_${this.productId}`);
  // }
  loggedin() {
    return localStorage.getItem('login');
  }
}
