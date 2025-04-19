import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from "../card/card.component";
import { CategoriesService } from '../categories.service';
import { LoaderComponent } from "../loader/loader.component";
import { ContactComponent } from "../contact/contact.component";
import { Category } from '../category';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CardComponent, LoaderComponent, ContactComponent],
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnDestroy,OnInit {
  username: string = "Khaled";
  categories: Category[] = [];
  x$: Subscription = new Subscription();

  constructor(private _categoriesService: CategoriesService) {}
  ngOnInit(): void {
    this.getCategoies();
  }
  
  ngOnDestroy(): void {
    this.x$.unsubscribe();
  }

  getCategoies() {
    this.x$.add(this._categoriesService.getCatepories().subscribe({
      next: (res) => {
        this.categories = res.data;
      }
    }));

    this.x$.add(this._categoriesService.getCatepories().subscribe({
      next: (res) => {
        this.categories = res.data;
      }
    }));
  }

  changeName() {
    this.username = "Ahmed";
  }
}

