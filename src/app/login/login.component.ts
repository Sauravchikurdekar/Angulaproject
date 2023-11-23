import { Component } from '@angular/core';
import { CapchaService } from '../services/capcha.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements onInit {

  public code:string=''
  capcha: any;
  constructor(capcha:CapchaService){

  }
  ngonInit():void{
    this.code=this.capcha.GenerateCode();
  }
}
