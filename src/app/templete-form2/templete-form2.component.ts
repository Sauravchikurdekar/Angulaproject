import { Component } from '@angular/core';

@Component({
  selector: 'app-templete-form2',
  templateUrl: './templete-form2.component.html',
  styleUrls: ['./templete-form2.component.css']
})
export class TempleteForm2Component {
[x: string]: any;

public cityError:string=''
public citychanged(e:any){
  if(e.target.value="-1")
  {
  this.cityError='plase select your city';
  }else{
    this.cityError="";
  }

}

}
