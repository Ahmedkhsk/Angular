import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  //_httpClient: Inject(HttpClient);
  // meals: Meal[] = [
  //   {
  //     "publisher": "The Poinner Woman",
  //     "title": "Deep Dish Fruit Pizza",
  //     "image_url": "http://forkify-api.herokupp.com/images/fruitpizza9a19.jpg",
  //     "social_rank": 100,
  //     "recipe_id": 1
  //   },
  //   {
  //     "publisher": "The Closet Cooking",
  //     "title": "Pizza Dip",
  //     "image_url": "http://forkify-api.herokupp.com/images/fruitpizza9a19.jpg",
  //     "social_rank": 100,
  //     "recipe_id": 1
  //   }
  // ];

  constructor( private _httpClient:HttpClient) { 

  }

  getCatepories() : Observable<any>
  {
    return this._httpClient.get('http://shoesecommerce.runasp.net/api/Category/GetAll?lan=en');
  }
}

