import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planetary',
  templateUrl: './planetary.component.html',
  styleUrls: ['./planetary.component.css']
})
export class PlanetaryComponent implements OnInit{


public planetaryobj:any={};

constructor(){};

  ngOnInit(): void {

    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response=> response.json())
    .then(data=>{
      this.planetaryobj=data;
    })

  }

}
