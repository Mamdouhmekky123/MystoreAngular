import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { SingleproductComponent } from './components/singleproduct/singleproduct.component';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    ProductlistComponent,
    ProductdetailsComponent,
    SingleproductComponent,
    SearchComponent
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
  SingleproductComponent,
  SearchComponent
  ]
})
export class ProductsModule { }
