import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/login/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  login: Boolean = false;
  signup: Boolean = true;
  logout: Boolean = false;
  username: string = '';
  logarr: any = [false, true, false, ''];
  logarr2:any=[];
  constructor(private service: AuthService) {}

  // loginFun(login: boolean = false) {
  //   //  this.login=login;
  //   this.logarr[0] = login;
  //   console.log(this.logarr);
  //   //  return login;
  // }

  // logoutFun(logout: boolean = false) {
  //   //  this.logout=logout;
  //   this.logarr[1] = logout;
  //   console.log(this.logarr);
  //   //  return logout;
  // }
  // signupFun(signup: boolean = true) {
  //   this.logarr[2] = signup;
  //   console.log(this.logarr);
  //   //  return signup;
  // }

  // usenameFun(user: string = '') {
  //   this.logarr[3] = user;
  //   console.log(this.logarr);
  //   // return user;
  // }

  // addToLocal(){
  //   if ('login' in localStorage) {
  //     this.logarr2 = JSON.parse(localStorage.getItem('cart')!); // parse used when recieve from local storage
  //   } else {
  //     this.logarr2=this.logarr;
  //     localStorage.setItem('login', JSON.stringify(this.logarr2));
  //   }
  // }
}
