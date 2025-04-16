import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Meal } from '../meal';
import { CardComponent } from "../card/card.component";
import { MealsService } from '../meals.service';
import { RecomendedComponent } from "../recomended/recomended.component";

@Component({
  selector: 'app-home',
  imports: [FormsModule, CardComponent, RecomendedComponent],
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  meals: Meal[] = [];
  constructor(private _mealsService: MealsService) {
    this.meals = this._mealsService.meals;
  }
}

