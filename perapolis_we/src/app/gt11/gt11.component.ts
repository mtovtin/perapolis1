import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswersService } from '../answers.service';
import jspdf from 'jspdf';
import * as $ from "jquery";
import html2canvas from 'html2canvas';
import 'firebase/firestore';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';
// Add a new document in collection "cities"




@Component({
  selector: 'gt11-component',
  templateUrl: './gt11.component.html',
  styleUrls: ['./gt11.component.css']
})
export class Gt11Component implements OnInit {

 
  reason: string | undefined;
  brandName: string | undefined;
  category: any;
  goods: any;
  price: any;
  clients: any;
  age: any;
  communication: any;
  proposition: any;
 c: any;
 g: any;
 h: any;
t: any;
t1:any;
 r: any;
str: any;
str2: any;
str3: any;
str4: any;
status: boolean = false;
  a: any;

  constructor(private answersService:AnswersService, private router: Router,private http: HttpClient) { }

  public captureScreen()  
  {  
    var doc = new jsPDF('p', 'pt', 'a4',true);  
    var width = doc.internal.pageSize.getWidth();
var height = doc.internal.pageSize.getHeight();
var getContent = "<h2 style='color:#6667ab; font-family:'Hatton Medium; text-align:center; margin:auto' >results</h2><div style=' margin-left:10px; width:550px; font-size:14px; color:black'>"+$('#pri').html()+"</div>";
 
    doc.html(getContent, {

   
       callback: function (doc) {
         doc.save();
       },
       "width":width
    });
  } 


  ngOnInit(): void {
this.http.post('https://steamapp-581f5-default-rtdb.firebaseio.com/two.json',{brand_name:this.answersService.brandName, category: this.answersService.category, goods: this.answersService.goods, price: this.answersService.price, clients: this.answersService.clients, age: this.answersService.age, communication: this.answersService.communication, proposition: this.answersService.proposition, reason: this.answersService.reason, target_profile: this.answersService.c, pod: JSON.stringify(this.answersService.g), market_segment: JSON.stringify(this.answersService.a) }).subscribe(response=>console.log(response))
    const SHEET_ID = '1-xyY8JKF7y4GnJHGMvbSJ6dmHy81Ur_CfC1ArHxhqHw';
    const ACCESS_TOKEN = "ya29.a0ARrdaM_3WkZY0pPrVx4_J8ZGeerbIrebLzzryKLfnGYX3Q9UCJHcgcjW9UaQfjuLG0nFtl80Y481f6fonTy6FehS2yThZvcjc_Qb7EqDLXLUfRtigrerHmuBaWqntZHIEkTATAsinjDe35p14esPAwwLbwoi"
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //update this token with yours. 
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({

        requests: [{
          appendCells: {
          
        
            rows: [
              {
                values: [
                  {
                    userEnteredValue: {
                      "stringValue": this.answersService.brandName,
                  
                  
                    }
                    
                  },
                  {
                    userEnteredValue: {
    
                      "stringValue": this.answersService.category
                  
                    }
                    
                    
                  },
                  {
                    userEnteredValue: {
    
                      "stringValue": this.answersService.goods
                  
                    }
                    
                    
                  },
                  {
                    userEnteredValue: {
    
                      "stringValue": this.answersService.price
                  
                    }
                    
                    
                  },
                  {
                    userEnteredValue: {
    
                      "stringValue": this.answersService.clients
                  
                    }
                    
                    
                  },
                  {
                    userEnteredValue: {
    
                      "stringValue": this.answersService.age
                  
                    }
                    
                    
                  },
                  {
                    userEnteredValue: {
    
                      "stringValue": this.answersService.communication
                  
                    }
                    
                    
                  },
                  {
                    userEnteredValue: {
    
                      "stringValue": this.answersService.proposition
                  
                    }
                    
                    
                  },
                  {
                    userEnteredValue: {
    
                      "stringValue": this.answersService.reason
                  
                    }
                    
                    
                  },
                  {
                    userEnteredValue: {
    
                      "stringValue": this.answersService.c
                  
                    }
                    
                    
                  },
                  {
                    userEnteredValue: {
    
                      "stringValue": JSON.stringify(this.answersService.g)
                  
                    }
                    
                    
                  },
                  {
                    userEnteredValue: {
    
                      "stringValue": this.answersService.a
                  
                    }
                    
                    
                  }
                ]
              }
            ],
            fields: "*"
          }
        }]
      })
    })


  



    console.log(this.answersService.category);
console.log(this.answersService.goods);
console.log(this.answersService.price);
console.log(this.answersService.clients);
console.log(this.answersService.age);
console.log(this.answersService.communication);
console.log(this.answersService.proposition);
console.log(this.answersService.reason);  
console.log(this.answersService.c);
console.log(this.answersService.g);
console.log(this.answersService.h);
    this.reason = this.answersService.reason;
    this.brandName = this.answersService.brandName
    this.category = this.answersService.category
    this.goods = this.answersService.goods
    this.price = this.answersService.price
    this.clients = this.answersService.clients
    this.age = this.answersService.age
    this.communication = this.answersService.communication
    this.proposition = this.answersService.proposition

    this.c = this.answersService.c
    this.g = this.answersService.g
    this.h = this.answersService.h
    this.a = this.answersService.a
    this.r = this.answersService.r
   
    this.str = `${JSON.parse(this.g[0].percentage)}% - ${JSON.stringify(this.g[0].targetProfile)}`;
    this.str2 = `${JSON.parse(this.g[1].percentage)}% - ${JSON.stringify(this.g[1].targetProfile)}`;
    this.t = this.g[0].t;
    this.t1 = this.g[1].t;
    this.str3 = JSON.stringify(this.g[0].targetProfile);
    this.str4 = JSON.stringify(this.g[1].targetProfile);


    if((this.proposition=="Product"&&this.reason=="Exclusive ownership")||
    (this.proposition=="Product"&&this.reason=="Niche knowledge")||
    (this.proposition=="Service"&&this.reason=="Exclusive ownership")||
    (this.proposition=="Service"&&this.reason=="Niche knowledge")||
    (this.proposition=="Heritage"&&this.reason=="Exclusive ownership")||
    (this.proposition=="Heritage"&&this.reason=="Product iconicity")||
    (this.proposition=="Heritage"&&this.reason=="Niche knowledge")||
    (this.proposition=="Self-Indulgence"&&this.reason=="Exclusive ownership")){
 
      this.str = `${JSON.parse(this.g[1].percentage)}% - ${JSON.stringify(this.g[1].targetProfile)}`;
      this.str2 = `${JSON.parse(this.g[2].percentage)}% - ${JSON.stringify(this.g[2].targetProfile)}`;

      this.t = this.g[1].t;
      this.t1 = this.g[2].t;
      this.str3 = JSON.stringify(this.g[1].targetProfile);
      this.str4 = JSON.stringify(this.g[2].targetProfile);
    }




    if  (this.proposition=="Self-Indulgence"&&this.reason=="Exclusive ownership") {
      this.str = `${JSON.parse(this.g[2].percentage)}% - ${JSON.stringify(this.g[2].targetProfile)}`;
      this.t = JSON.parse(this.g[2].t);
      this.t1 = "";
      this.str2 = "";

      this.str4 = "";
    }


if ((this.proposition=="Product"&&this.reason=="Niche knowledge")||
(this.proposition=="Service"&&this.reason=="Exclusive ownership")||
(this.proposition=="Product"&&this.reason=="Return on Investment")||
(this.proposition=="Community"&&this.reason=="Niche knowledge")||
(this.proposition=="Personalization"&&this.reason=="Exclusive ownership")||
(this.proposition=="Heritage"&&this.reason=="Return on Investment")){
  this.str = `${JSON.parse(this.g[1].percentage)}% - ${JSON.stringify(this.g[1].targetProfile)}`;
      this.str2 = "";
 
      this.str4 = "";
      this.t = this.g[1].t;
      this.t1 = "";
}


if ((this.proposition=="Product"&&this.reason=="Niche knowledge")||
(this.proposition=="Service"&&this.reason=="Exclusive ownership")||
(this.proposition=="Product"&&this.reason=="Return on Investment")||
(this.proposition=="Heritage"&&this.reason=="Return on Investment")){
  this.str = `${JSON.parse(this.g[2].percentage)}% - ${JSON.stringify(this.g[2].targetProfile)}`;
      this.str2 = "";

      this.str4 = "";
      this.t = this.g[2].t;
      this.t1 = "";
}


if ((this.proposition=="Self-Indulgence"&&this.reason=="Niche knowledge")||

(this.proposition=="Status"&&this.reason=="Return on Investment")||
(this.proposition=="Community"&&this.reason=="Return on Investment")){
  this.str = `${JSON.parse(this.g[0].percentage)}% - ${JSON.stringify(this.g[0].targetProfile)}`;
      this.str2 = "";
      this.str4 = "";
      this.t = this.g[0].t;
      this.t1 = "";
}


if ((this.proposition=="Product"&&this.reason=="Return on Investment")||
(this.proposition=="Heritage"&&this.reason=="Return on Investment")||
(this.proposition=="Community"&&this.reason=="Niche knowledge")||
(this.proposition=="Personalization"&&this.reason=="Exclusive ownership")
){
  this.str = `${JSON.parse(this.g[1].percentage)}% - ${JSON.stringify(this.g[1].targetProfile)}`;
      this.str2 = "";
      this.t = this.g[1].t;
      this.t1 = "";
}








  }
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.status = !this.status;  
  }

  goToNext(){

    this.router.navigateByUrl('gt10-component')
  }
}
