import { Component, OnInit } from '@angular/core';
import { AnswersService } from '../answers.service';
import { Router } from '@angular/router';
import { fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'gt1-component',
  templateUrl: './gt1.component.html',
  animations: [fadeInAnimation],
  styleUrls: ['./gt1.component.css'],
  host: { '[@fadeInAnimation]': '' }
})
export class Gt1Component implements OnInit {
  txtValue: any;
  message: string | undefined;

  constructor(private answersService: AnswersService, private router: Router) { }

  ngOnInit() {
    const app = document.getElementById("ok") as HTMLButtonElement;
    const app1 = document.getElementById("ok1") as HTMLButtonElement;
    app.disabled = true;
    app1.disabled = true;
    console.log(this.answersService.brandName);
  }
  navbarOpen = false;
  status: boolean = false;

st: string=""

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.status = !this.status;  
  
  }

  
  onTextChange(value: any)
  {
    const app = document.getElementById("ok") as HTMLButtonElement;
    const app1 = document.getElementById("ok1") as HTMLButtonElement;
    this.txtValue = value;
    if(this.txtValue == '')
    {
  
      app.disabled = true;
      app1.disabled = true;
    this.st = "Please enter your brand name"
    } else {
      this.st="";
      app.disabled = false;
      app1.disabled = false;
    }
    
  }


  goToNext(bn: string | undefined){
 
    this.answersService.brandName = bn;
    this.router.navigateByUrl('gt2-component')
    }
  

}
