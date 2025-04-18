import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor( private _httpClient:HttpClient) { 

  }

  getCatepories() : Observable<any>
  {
    return this._httpClient.get('http://shoesecommerce.runasp.net/api/Category/GetAll?lan=en');
  }
}

