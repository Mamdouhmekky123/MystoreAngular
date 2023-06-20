import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { FormComponent } from './components/form/form.component';
import { OrderComponent } from './components/order/order.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CartComponent,
    FormComponent,
    OrderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    CartComponent,
    FormComponent,
    OrderComponent
  ]
})
export class CartModule { }
