import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { SingleproductComponent } from './components/singleproduct/singleproduct.component';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductlistComponent,
    ProductdetailsComponent,
    SingleproductComponent
  ],
  imports: [
  CommonModule,
    SharedModule,
    RouterModule,
    FormsModule

  ],
  exports:[
  ProductlistComponent,
  ProductdetailsComponent,
  SingleproductComponent
  ]
})
export class ProductsModule { }
