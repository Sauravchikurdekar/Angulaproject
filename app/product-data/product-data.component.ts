import { Component, OnInit } from '@angular/core';
import { Fakestoreproductcontract } from '../contracts/Fakestoreproductcontract';

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.css']
})

// data from parents to child
export class ProductDataComponent implements OnInit {

public product:Fakestoreproductcontract[]=[];
public AllCount:number=0;
public ElectronicsCount:number=0;
public JeweleryCount:number=0;
public MensCount:number=0;
public WomensCount:number=0;

  ngOnInit(): void {

    fetch("http://fakestoreapi.com/products")
    .then(response=>response.json())
    .then(data=>{
      this.product=data;
      this.AllCount=data.length;
      this.ElectronicsCount=data.filter((product:any)=>product.category=='electronics').length;
      this.JeweleryCount=data.filter((product:any)=>product.category=="jewelery").length;
      this.MensCount=data.filter((product:any)=>product.category=="men's clothing").length;
      this.WomensCount=data.filter((product:any)=>product.category=="women's clothing").length;
    });
    
  }

  public GetCategoryName(e:any){

    if(e=="all"){
      fetch("http://fakestoreapi.com/products")
      .then(response=>response.json())
      .then(data=>{
        this.product=data;
      });

    }
else{
    fetch(`http://fakestoreapi.com/products/category/${e}`)
    .then(response=>response.json())
    .then(data=>{
      this.product=data;
    });                  
  }
  }

  public products:any={ };

  public GetProduct(e:any){
    // alert(JSON.stringify(e));
    this.products=e;
  }
}
