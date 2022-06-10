import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  brandName: string | undefined= "No chosen name";
  category: string| undefined = "No chosen category"
  goods: string | undefined= "No chosen goods";
  price: string| undefined = "No chosen price"
  clients: string | undefined= "No chosen clients";
  age: string| undefined = "No chosen age"
  communication: string| undefined = "No chosen communication";
  proposition: string| undefined = "No chosen proposition"
  reason: string| undefined = "No chosen reason";

  c: any;
  g: any = [];
  h: any;
  d: any;
  aw: any;
  a: any;
  r: any;

}





