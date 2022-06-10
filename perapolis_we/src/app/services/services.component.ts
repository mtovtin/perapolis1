import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'services-component',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

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
