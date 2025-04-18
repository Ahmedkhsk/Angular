import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpclient = inject(HttpClient);
  constructor() { }

  register(data:any):Observable<any> 
  {
    return this.httpclient.post("http://shoesecommerce.runasp.net/api/Account/Register?lan=en",data);
  } 
}
