import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router = inject(Router);
  httpclient = inject(HttpClient);
  loggedInUser: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor() { }

  register(data:any):Observable<any> 
  {
    return this.httpclient.post("http://shoesecommerce.runasp.net/api/Account/Register?lan=en",data);
  } 
  
  login(data:any):Observable<any> 
  {
    return this.httpclient.post("http://shoesecommerce.runasp.net/api/Account/Login?lan=en",data);
  }
  logOut(){
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
    this.loggedInUser.next('');
  }
  saveUserData(token:string)
  {
    localStorage.setItem("token", JSON.stringify(token));
    this.loggedInUser.next(token);
  }

}
