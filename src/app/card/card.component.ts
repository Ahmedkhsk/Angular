import { Component, Input } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
    @Input() inp: Category = {} as Category
}
