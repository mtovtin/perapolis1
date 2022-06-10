import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
// import { AngularFireModule } from '@angular/fire';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { GtComponent } from './gt/gt.component';
import { Gt1Component } from './gt1/gt1.component';
import { Gt2Component } from './gt2/gt2.component';
import { Gt3Component } from './gt3/gt3.component';
import { Gt4Component } from './gt4/gt4.component';
import { Gt5Component } from './gt5/gt5.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { Gt6Component } from './gt6/gt6.component';
import { Gt7Component } from './gt7/gt7.component';
import { Gt8Component } from './gt8/gt8.component';
import { Gt9Component } from './gt9/gt9.component';
import { AnswersService } from './answers.service';
import { Gt10Component } from './gt10/gt10.component';
import { Gt11Component } from './gt11/gt11.component';
import { PosuereComponent } from './posuere/posuere.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ServicesComponent,
    GtComponent,
    Gt1Component,
    Gt2Component,
    Gt3Component,
    Gt4Component,
    Gt5Component,
    PortfolioComponent,
    Gt6Component,
    Gt7Component,
    Gt8Component,
    Gt9Component,
    Gt10Component,
    Gt11Component,
    PosuereComponent,
    ContactComponent,
    BlogComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AnswersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
