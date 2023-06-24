import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IssueService } from 'src/app/chatbot/services/issue.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  clientName: string = '';
  cartProducts: any[] = [];
  total: number = 0;
  order: boolean = true;
  fullName: string = '';
  Address: string = '';
  dateTime: any = this.service2.getCurrentDateTime();
  cartObj: any = { name: '', invoce: '', current: '' };
  allinvoiceArr: any = [];
  constructor(
    private route: ActivatedRoute,
    private service2: IssueService,
    private service: CartService
  ) {
    this.clientName = this.route.snapshot.paramMap.get('username')!;
    console.log(this.service.Address);
  }
  ngOnInit(): void {
    this.getCartProduct();
    this.getTotalCartPrice();
    this.afterSubmit();
    console.log(this.allinvoiceArr);
  }
  //get the set of products added to the cart from the local storage
  getCartProduct() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
  }
  //calculating the tatal price of products
  getTotalCartPrice() {
    this.total = 0;
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.total +=
        this.cartProducts[i].item.Price * this.cartProducts[i].quantity;
    }
    this.OrderNothing();
  }
  // if the user press submit without adding anything to cart
  OrderNothing() {
    if (this.total === 0) {
      this.order = false;
    } else {
      this.order = true;
    }
  }
  afterSubmit() {
    this.cartObj.name = this.clientName;
    this.cartObj.invoce = this.total;
    this.cartObj.current = this.dateTime;
    if ('invoice' in localStorage) {
      this.allinvoiceArr = JSON.parse(localStorage.getItem('invoice')!);
    }
    this.allinvoiceArr.push(this.cartObj);
    localStorage.setItem('invoice', JSON.stringify(this.allinvoiceArr));
    localStorage.setItem('cart', JSON.stringify([]));
  }
}
