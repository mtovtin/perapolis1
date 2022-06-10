import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-component',
  templateUrl: './gt.component.html',
  styleUrls: ['./gt.component.css']
})
export class GtComponent implements OnInit {

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
