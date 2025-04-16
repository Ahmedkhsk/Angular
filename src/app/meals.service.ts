import { Injectable } from '@angular/core';
import { Meal } from './meal';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  meals: Meal[] = [
    {
      "publisher": "The Poinner Woman",
      "title": "Deep Dish Fruit Pizza",
      "image_url": "http://forkify-api.herokupp.com/images/fruitpizza9a19.jpg",
      "social_rank": 100,
      "recipe_id": 1
    },
    {
      "publisher": "The Closet Cooking",
      "title": "Pizza Dip",
      "image_url": "http://forkify-api.herokupp.com/images/fruitpizza9a19.jpg",
      "social_rank": 100,
      "recipe_id": 1
    }
  ];

  constructor() { }
}
