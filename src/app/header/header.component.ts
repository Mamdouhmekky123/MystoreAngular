import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  slogan: string = 'our one stop shop for everything';
  source: string = '/assets/shopping.jpg';
  getSlogan() {
    return 'This is the new slogan for our web application ';
  }
}
