import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-component',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
