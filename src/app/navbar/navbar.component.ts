import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  isLoggedIn: boolean = false;

  constructor(private _auth:AuthService){
    _auth.loggedInUser.subscribe((res) => {
      if(res)
        this.isLoggedIn = res ? true : false;
    })
  }

  ngOnInit(): void {
    this.isLoggedIn = JSON.parse(localStorage.getItem("token") || 'false');
  }

  logOut(){
    this._auth.logOut();
  }
}
