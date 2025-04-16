import { Component } from '@angular/core';
import { Meal } from '../meal';
import { MealsService } from '../meals.service';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-recomended',
  imports: [CardComponent],
  templateUrl: './recomended.component.html',
  styleUrl: './recomended.component.scss'
})
export class RecomendedComponent {
  meals: Meal[] = [];
  constructor(private _mealsService: MealsService) {
    this.meals = this._mealsService.meals;
  }
}
