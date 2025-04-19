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
  categories: Category[] = [];
  constructor(private _categoriesService: CategoriesService) {
  _categoriesService.getCatepories().subscribe({
      next: (res) => {
        this.categories = res.data;
      }
    });   
  }

  
}
