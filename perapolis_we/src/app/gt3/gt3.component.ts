import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswersService } from '../answers.service';


@Component({
  selector: 'gt3-component',
  templateUrl: './gt3.component.html',
  styleUrls: ['./gt3.component.css']
})
export class Gt3Component implements OnInit {

  goods: string | undefined
  constructor(private answersService:AnswersService, private router: Router) { }

  ngOnInit(): void {
    this.goods = this.answersService.goods;
  //  console.log(this.category);
  }
  navbarOpen = false;
  status: boolean = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.status = !this.status;  
  }
  goToNext(bn: string | undefined){
    this.answersService.goods = bn;
    this.router.navigateByUrl('gt4-component')
  }

}
