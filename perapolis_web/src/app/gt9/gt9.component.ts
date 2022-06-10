import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'gt9-component',
  templateUrl: './gt9.component.html',
  styleUrls: ['./gt9.component.css']
})
export class Gt9Component implements OnInit {

  reason: string | undefined
  constructor(private answersService:AnswersService, private router: Router) { }

  ngOnInit(): void {
    this.reason = this.answersService.reason;
    console.log(this.answersService.brandName);
    console.log(this.answersService.category);
    console.log(this.answersService.goods);
    console.log(this.answersService.price);
    console.log(this.answersService.clients);
    console.log(this.answersService.age);
    console.log(this.answersService.communication);
    console.log(this.answersService.proposition);
  }
  navbarOpen = false;
  status: boolean = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.status = !this.status;  
  }
  goToNext(bn: string | undefined){
    this.answersService.reason = bn;
    this.router.navigateByUrl('gt10-component')
  }

}
