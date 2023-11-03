import { Component, OnInit } from '@angular/core';
import { mars } from '../contracts/mars';
@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent implements OnInit{
  public MarsObject: any ={};

  ngOnInit(): void {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
    .then(response=>response.json())
    .then(data=>{
      this.MarsObject=data;
    })
  }

}
