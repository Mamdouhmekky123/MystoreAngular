import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  login: Boolean = false;
  signup: Boolean = true;
  logout: Boolean = false;
  username: string | null = 'User';

  constructor(private service: SharedService) {}

  ngOnInit() {}

  loggedin() {
    return localStorage.getItem('login');
  }
  onLogout() {
    localStorage.removeItem('login');
    localStorage.removeItem('cart');
    localStorage.removeItem('wishList');
  }
  getUseName() {
    this.username = localStorage.getItem('login');
  }
}
