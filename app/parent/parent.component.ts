import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  public msg:string='';
  public MsgFromChild:string='';
  public SendClick(){
    this.msg="Hello ! from parent...";
  }
  public GetMsgFromChild(e:string){


    this.MsgFromChild=e;
  }
}
