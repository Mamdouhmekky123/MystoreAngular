import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';



@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AboutComponent,
    HomeComponent,
    CarouselComponent
  ]
})
export class PagesModule { }
