import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [WishlistComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [WishlistComponent],
})
export class WishlistModule {}
