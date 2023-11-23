import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {


//slice
// public categoires:string[]=['Electronics','Mens Fasion','Womem Fasion','Kid Fasion','Foot-ware']

//   public product1:{Name:string,Price:number,Mfd:Date,Rate:any}={
//     Name: 'samsung TV',
//     Price:340000,
//     Mfd: new Date("2023-01-22"),
//     Rate:0.0245
//   }
//   //for jeson in console
//   ngOnInit(): void {
//     console.log(JSON.stringify(this.product1))
    
//   }


// for i18nSelect

public Product2 :{Name:string,ShippedTo:string}[]=[
  {Name:"Samsung TV",ShippedTo:"Delhi"},
  {Name:"Mobile",ShippedTo:"Hyd"},
  {Name:"Watch",ShippedTo:"Delhi"},
  {Name:"shirt",ShippedTo:"Mumbai"},
  {Name:"Laptop",ShippedTo:"pune"},
  {Name:"Laptop-hp",ShippedTo:"kerla"}
];
public Status:any={
  'Delhi':'Delivery in 2 days',
  'Hyd':'Delivery in 5 days',
  'Mumbai':'Delivery in 5 days',
  'pune':'Delivery in 1 days',
  'other':'Usually dispached in 2-3 working days'
}

ngOnInit(): void {
  

}
}
