import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'gt7-component',
  templateUrl: './gt7.component.html',
  styleUrls: ['./gt7.component.css']
})
export class Gt7Component implements OnInit {

  communication: string | undefined
  constructor(private answersService:AnswersService, private router: Router) { }

  ngOnInit(): void {
    this.communication = this.answersService.communication;

  }
  navbarOpen = false;
  status: boolean = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.status = !this.status;  
  }
  goToNext(bn: string | undefined){
    this.answersService.communication = bn;
    this.router.navigateByUrl('gt8-component')
  }

}
