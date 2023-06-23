import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentsModule } from '../comments/comments.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ProductsModule } from "../products/products.module";
import { SearchbyimageComponent } from './components/searchbyimage/searchbyimage.component';

@NgModule({
    declarations: [AboutComponent, HomeComponent, CarouselComponent, SearchbyimageComponent],
    exports: [AboutComponent, HomeComponent, CarouselComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        NgbModule,
        CommentsModule,
        ProductsModule,
        ReactiveFormsModule
    ]
})
export class PagesModule {}
