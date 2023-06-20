import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { PagesModule } from './pages/pages.module';
import { LoginModule } from './login/login.module';
import { TokenInterceptor } from './login/interceptors/token.interceptor';
import { NgToastModule } from 'ng-angular-popup';
import { CommentsModule } from './comments/comments.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true
  }],
  bootstrap: [AppComponent],
  imports: [
  BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    CartModule,
    PagesModule,
    HttpClientModule,
    LoginModule,
    NgToastModule,
    CommentsModule,
    NgbModule
  ],
})
export class AppModule {}
