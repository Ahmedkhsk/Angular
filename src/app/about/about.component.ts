import { Component, Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  //@Output() addMessage = new EventEmitter<string>();

  addMessage = output<string>();
  sendMessage() {
    this.addMessage.emit('Hello from AboutComponent!');
    console.log('Message sent from AboutComponent!');
  }
}
