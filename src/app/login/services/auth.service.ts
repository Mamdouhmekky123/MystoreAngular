import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // http://18.159.111.193/api/User/Register

  private baseUrl: string = 'http://18.159.111.193/api/User/';

  constructor(private http: HttpClient, private router: Router) {}
  signUp(userObj: any):Observable<any> {
    return this.http
      .post<any>(`${this.baseUrl}Register`, userObj)
  }
  // signIn(loginObj : any){
  //   return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj)
  // }
  signIn(loginem: any, loginpas: any) {
    return this.http.get<any>(
      `${this.baseUrl}Login?Email=${loginem}&Password=${loginpas}`
    );
  }

  signOut(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  getOrder(){
    return this.http.get<any>('http://18.159.111.193/api/Order/GetAll');
  }
}
