import { Component } from '@angular/core';

@Component({
  selector: 'app-event-b1',
  templateUrl: './event-b1.component.html',
  styleUrls: ['./event-b1.component.css']
})
export class EventB1Component {


  public user:any[]=[
    
    {UserName:'saurav'},
    {UserName:'kiooo'},
    {UserName:'puma'},
    {UserName:'prince'}
];

public UserError:string='';
public isInValid:boolean=false;
public ispwdWarningVisible:Boolean=false;
public passError:string='';


public VerifyUser(e:any){
  for(var user of this.user)
  {
    if(user.UserName==e.target.value){
     
      this.UserError='User Name Taken-Try Another';
      this.isInValid=true;
      break;
    }else{
      this.UserError='User Name Available..';
      this.isInValid=false;
    }
  }
}

public VerifyPassword(e:any){

  if(e.keycode>=65 && e.keycode<=90){
    this.ispwdWarningVisible=true;
  }else{
    this.ispwdWarningVisible=false;
  }

}
public VeifyRequired(e:any){
  if(e.target.value= ""){
    this.UserError="User name requierd";

    this.isInValid=true;
  }else{
    this.UserError= "";
  }
}
public PwdErrOrFocus(){
  this.passError='caps not allowded...'
}

public PwdBlur(){
  this.passError='';

}
}
