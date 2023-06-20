import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FormUser } from '../../class/form-user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  fullName: string = '';
  Address: string = '';
  cardNumber!: number;
  userModel = new FormUser();
  constructor(private service: CartService) {}

  ngOnInit(): void {}
  onSubmit() {
    this.service.full_name = this.userModel.name;
  }
}
