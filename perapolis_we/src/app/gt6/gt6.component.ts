import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'gt6-component',
  templateUrl: './gt6.component.html',
  styleUrls: ['./gt6.component.css']
})
export class Gt6Component implements OnInit {

  age: string | undefined
  constructor(private answersService:AnswersService, private router: Router) { }

  ngOnInit(): void {
    this.age = this.answersService.age;

  }
  navbarOpen = false;
  status: boolean = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.status = !this.status;  
  }
  goToNext(bn: string | undefined){
    this.answersService.age = bn;
    this.router.navigateByUrl('gt7-component')
  }
}
