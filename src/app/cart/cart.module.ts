import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { FormComponent } from './components/form/form.component';
import { OrderComponent } from './components/order/order.component';



@NgModule({
  declarations: [
    CartComponent,
    FormComponent,
    OrderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CartComponent,
    FormComponent,
    OrderComponent
  ]
})
export class CartModule { }
