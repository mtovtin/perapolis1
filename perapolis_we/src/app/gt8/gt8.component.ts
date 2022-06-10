import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'gt8-component',
  templateUrl: './gt8.component.html',
  styleUrls: ['./gt8.component.css']
})
export class Gt8Component implements OnInit {

  proposition: string | undefined
  constructor(private answersService:AnswersService, private router: Router) { }

  ngOnInit(): void {
    this.proposition = this.answersService.proposition;

  }
  navbarOpen = false;
  status: boolean = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.status = !this.status;  
  }
  goToNext(bn: string | undefined){
    this.answersService.proposition = bn;
    this.router.navigateByUrl('gt9-component')
  }

}
