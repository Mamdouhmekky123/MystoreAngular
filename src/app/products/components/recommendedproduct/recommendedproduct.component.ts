import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-recommendedproduct',
  templateUrl: './recommendedproduct.component.html',
  styleUrls: ['./recommendedproduct.component.css']
})
export class RecommendedproductComponent {
  
  recommrndedProductId: any = [];
  constructor(private service: ProductService, private service2: CartService) {}
  ngOnInit(): void {
    this.getRecProdId();
    console.log(this.service.getRandomUserId());
  }
  
  
  addingToChart(event: any) {
    this.service2.addToChart(event);
  }

  getRecProdId() {
    this.service.getRecommendedById(this.service.productId).subscribe(
      (res: any) => {
        console.log(res);
        this.recommrndedProductId = res;
      },
      (error) => {
        alert(error.message);
      }
    ); //subscrib ----> observable object  قناة بتعبر من خلالها الداتا من الباك للفرونت
  }

  loggedin() {
    return localStorage.getItem('login');
  }
}
