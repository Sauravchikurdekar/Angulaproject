import { Component, OnInit } from '@angular/core';
import { probs } from '../contracts/probs';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

public probs:any[]=[
  {Name:"TV",Price:"45000"},
  {Name:"mobile",Price:"25000"},
  {Name:"shoes",Price:"3000"}

]

  constructor(){}


  ngOnInit(): void {
  }
public UpdateClick(){

  alert('update clicked...!')
  this.probs=[
    {Name:"TV",Price:"45000"},
  {Name:"mobile",Price:"25000"},
  {Name:"shoes",Price:"3000"},
{Name:"watch",Price:"6000"}
  ]
}

public Trackchange(index:number){

  return index;
}
  

}
