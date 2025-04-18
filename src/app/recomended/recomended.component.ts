import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CategoriesService } from '../categories.service';
import { LoaderComponent } from "../loader/loader.component";
import { Category } from '../category';

@Component({
  selector: 'app-recomended',
  imports: [CardComponent, LoaderComponent],
  templateUrl: './recomended.component.html',
  styleUrl: './recomended.component.scss'
})
export class RecomendedComponent {
  // meals: Meal[] = [];
  categories: Category[] = [];
  constructor(private _categoriesService: CategoriesService) {
  //   this.meals = this._mealsService.meals;

  _categoriesService.getCatepories().subscribe({
      next: (res) => {
        console.log(res);
        this.categories = res.data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("completed");
      }
    });
  console.log(this.categories);    
  }

  
}
