import { Component, OnInit } from '@angular/core';
import { Fakestoreproductcontract } from '../contracts/Fakestoreproductcontract';
@Component({
  selector: 'app-for-demo',
  templateUrl: './for-demo.component.html',
  styleUrls: ['./for-demo.component.css']
})
export class ForDemoComponent implements OnInit{

  public Product:Fakestoreproductcontract[]=[];
  Constuctor(){}
  ngOnInit(): void {
    fetch("https://fakestoreapi.com/products")
    .then(response=> response.json())
    .then(data=>{
      this.Product=data;
    }) 


  }

}
