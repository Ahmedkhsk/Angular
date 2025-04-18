import { AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent  implements OnChanges,OnInit , DoCheck,AfterViewInit,AfterContentInit{
  @Input() userName!: string;
  constructor() { 
    console.log(this.userName,"Hello from constructor");
  }
  ngDoCheck(): void {
    console.log(this.userName,"Hello from DoCheck");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.userName,changes,"hello from changes:");
  }
  ngOnInit(): void {
    console.log(this.userName,"Hello from ngOnInit");
  }
  ngAfterContentInit(): void {
    console.log(this.userName,"Hello from ngAfterContentInit");
  }
  ngAfterViewInit(): void {
    console.log(this.userName,"Hello from ngAfterViewInit");
  }
}
