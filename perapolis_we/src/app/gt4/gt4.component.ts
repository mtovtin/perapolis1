import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'gt4-component',
  templateUrl: './gt4.component.html',
  styleUrls: ['./gt4.component.css']
})
export class Gt4Component implements OnInit {


  price: string | undefined
  constructor(private answersService:AnswersService, private router: Router) { }

  ngOnInit(): void {
    this.price = this.answersService.price;
  //  console.log(this.category);
  }
  navbarOpen = false;
  status: boolean = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.status = !this.status;  
  }
  goToNext(bn: string | undefined){
    this.answersService.price = bn;
    this.router.navigateByUrl('gt5-component')
  }
}
