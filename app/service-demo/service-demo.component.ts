import { Component, OnInit } from '@angular/core';
import { fakestoreService } from '../services/fakestore.service';
import { Fakestoreproductcontract } from '../contracts/Fakestoreproductcontract';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css']
})
export class ServiceDemoComponent implements OnInit {
public Categories:any[]= [];
public products:Fakestoreproductcontract[]=[];
  constructor(private fakestore:fakestoreService){

}
  ngOnInit(): void {
    this.fakestore.GetCategories().subscribe(data=>this.Categories=data);
    this.fakestore.GetCategories().subscribe(data=>this.products);
    
    
  }

}
