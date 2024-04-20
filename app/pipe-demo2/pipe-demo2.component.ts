import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo2',
  templateUrl: './pipe-demo2.component.html',
  styleUrls: ['./pipe-demo2.component.css']
})
export class PipeDemo2Component implements OnInit {
  

  //custom pipe
  public title:string='wELcoMe to AnGULar';

//cities
  public cities:string[]=['hyd', 'delhi','mumbai','chennnai','bangol'] 

  public Messages:string[]=[];
  public Count:number=0;
  public Message:string='';
  public ShowMsg:boolean=false;

  public data:string='';

  public NotificationMp={
    '=0':'No New Massage',
    '=1':'1 New Massage',
    'other':'# New Massage'
  }
  public SendClick(){
    var now=new Date();
    this.Messages.push(this.Message +"-"+now.toLocaleTimeString());
    this.Count=this.Messages.length;
    alert(`Massage sent`);

    this.Message='';

  }
  public ShowClick(){
    this.ShowMsg=(this.ShowMsg==true)?false:true;

  }

 ngOnInit(): void {
  this.Count=this.Messages.length;
  
}

public submitClick(data:any){

  this.ShowMsg=(this.ShowMsg==true)?false:true;

  alert(JSON.stringify(data));
}

// public showmsg(){
//  
// }


}


