import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpclient = inject(HttpClient);
  isBrowser: boolean = false;
  loggedInUser: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      if (localStorage.getItem("token")) {
        this.loggedInUser.next(localStorage.getItem("token") || "");
      }
    }

  }


  saveUserData(token: string) {
    if (this.isBrowser) {
      localStorage.setItem("token", JSON.stringify(token));
      this.loggedInUser.next(token);
    }
  }

  register(data: any): Observable<any> {
    return this.httpclient.post("http://shoesecommerce.runasp.net/api/Account/Register?lan=en", data);
  }

  login(data: any): Observable<any> {
    return this.httpclient.post("http://shoesecommerce.runasp.net/api/Account/Login?lan=en", data);
  }

}
