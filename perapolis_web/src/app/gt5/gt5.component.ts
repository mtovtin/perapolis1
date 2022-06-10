import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'gt5-component',
  templateUrl: './gt5.component.html',
  styleUrls: ['./gt5.component.css']
})
export class Gt5Component implements OnInit {

  clients: string | undefined
  constructor(private answersService:AnswersService, private router: Router) { }

  ngOnInit(): void {
    this.clients = this.answersService.clients;

  }
  navbarOpen = false;
  status: boolean = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.status = !this.status;  
  }
  goToNext(bn: string | undefined){
    this.answersService.clients = bn;
    this.router.navigateByUrl('gt6-component')
  }

  
}
