import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Meal } from '../meal';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-home',
  imports: [FormsModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    meals : Meal[] = [
      {
        "publisher": "The Poinner Woman",
        "title":"Deep Dish Fruit Pizza",
        "image_url":"http://forkify-api.herokupp.com/images/fruitpizza9a19.jpg",
        "social_rank": 100,
        "recipe_id": 1
      },
      {
        "publisher": "The Closet Cooking",
        "title":"Pizza Dip",
        "image_url":"http://forkify-api.herokupp.com/images/fruitpizza9a19.jpg",
        "social_rank": 100,
        "recipe_id": 1
      }
    ];
}
