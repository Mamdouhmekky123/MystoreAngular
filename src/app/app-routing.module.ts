import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/components/cart/cart.component';
import { OrderComponent } from './cart/components/order/order.component';
import { ProductlistComponent } from './products/components/productlist/productlist.component';
import { ProductdetailsComponent } from './products/components/productdetails/productdetails.component';
import { AboutComponent } from './pages/components/about/about.component';
import { HomeComponent } from './pages/components/home/home.component';
import { ChatComponent } from './chatbot/components/chat/chat.component';
import { LoginComponent } from './login/components/login/login.component';
import { SignupComponent } from './login/components/signup/signup.component';
import { WishlistComponent } from './wishlist/components/wishlist/wishlist.component';

const routes: Routes = [
  { path: 'products', component: ProductlistComponent },
  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: ProductdetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cart', component: CartComponent },
  { path: 'chatbot', component: ChatComponent },
  { path: 'Wishlist', component: WishlistComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'order-confirmation/:username',
    component: OrderComponent,
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
