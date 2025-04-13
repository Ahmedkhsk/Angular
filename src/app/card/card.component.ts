import { Component, Input } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
    @Input() inp: Meal = {} as Meal
}
