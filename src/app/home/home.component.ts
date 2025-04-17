import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from "../card/card.component";
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CardComponent],
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  //meals: Meal[] = [];
  categories: any;
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
    
  }
}

