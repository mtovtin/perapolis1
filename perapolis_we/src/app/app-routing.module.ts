import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { GtComponent } from './gt/gt.component';
import { Gt1Component } from './gt1/gt1.component';
import { Gt2Component } from './gt2/gt2.component';
import { Gt3Component } from './gt3/gt3.component';
import { Gt4Component } from './gt4/gt4.component';
import { Gt5Component } from './gt5/gt5.component';
import { Gt6Component } from './gt6/gt6.component';
import { Gt7Component } from './gt7/gt7.component';
import { Gt8Component } from './gt8/gt8.component';
import { Gt9Component } from './gt9/gt9.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { Gt10Component } from './gt10/gt10.component';
import { Gt11Component } from './gt11/gt11.component';
import {PosuereComponent} from './posuere/posuere.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home-component', component: HomeComponent},
  { path: 'about-component', component: AboutComponent },
  { path: 'services-component', component: ServicesComponent },
  { path: 'gt-component', component: GtComponent },
  { path: 'gt1-component', component: Gt1Component,  data: { animation: "AnimalsPage" }  },
  {path: 'gt2-component', component: Gt2Component, data: { animation: "FruitsPage" }},
  {path: 'gt3-component', component: Gt3Component,  data: { animation: "a" }},
  {path: 'gt4-component', component: Gt4Component,  data: { animation: "b" }},
  {path: 'gt5-component', component: Gt5Component,  data: { animation: "c" }},
  {path: 'gt6-component', component: Gt6Component,  data: { animation: "d" }},
  {path: 'gt7-component', component: Gt7Component,  data: { animation: "e" }},
  {path: 'gt8-component', component: Gt8Component,  data: { animation: "f" }},
  {path: 'gt9-component', component: Gt9Component},
  {path: 'gt10-component', component: Gt10Component},
  {path: 'gt11-component', component: Gt11Component,  data: { animation: "i" }},
  {path: 'portfolio-component', component: PortfolioComponent},
  {path: 'posuere-component', component: PosuereComponent},
  {path: 'contact-component', component: ContactComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'blog-component', component: BlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
