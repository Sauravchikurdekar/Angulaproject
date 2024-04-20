import { Component, OnInit } from '@angular/core';
import { CapchaService } from '../services/capcha.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public code:string='';
  capcha: any;
  constructor( capcha:CapchaService){

  }
  ngOnInit(): void {
    this.code=this.capcha.GenerateCode();
  }
  public NewCode():void{
    this.code=this.capcha.GenerateCode();

    console.log(`data inserted..`);

  }
  public msg(){
    
    alert(`data inserted..`);
   
  }

}