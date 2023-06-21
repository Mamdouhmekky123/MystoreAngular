import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { WishlistService } from 'src/app/wishlist/services/wishlist.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css'],
})
export class SingleproductComponent {
  constructor(private service3: WishlistService) {}
  @Input() data: any = [];
  @Output() item = new EventEmitter();
  addQuantity: boolean = false;
  amount: number = 1;
  add() {
    this.item.emit({ item: this.data, quantity: this.amount });
  }
  addToWish() {
    this.service3.addToWishList({ item: this.data, quantity: 1 });
  }
}
