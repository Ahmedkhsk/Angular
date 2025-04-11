import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    title = 'Home Page';
    username:string = 'Ahmed Khaled';
    userage:number = 20;
    imageURL:string = 'assets/images/A.jpg';
    
    changeAge(): void {
        this.userage = Math.floor(Math.random() * 100);
    }
    changeName(x:any)
    {
      this.username = x.target.value;
    }
}
