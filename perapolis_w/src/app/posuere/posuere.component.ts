import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posuere-component',
  templateUrl: './posuere.component.html',
  styleUrls: ['./posuere.component.css']
})
export class PosuereComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  navbarOpen = false;
  status: boolean = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.status = !this.status;  
  }

}
