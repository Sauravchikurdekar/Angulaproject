import { Component } from '@angular/core';

@Component({
  selector: 'app-templete-form',
  templateUrl: './templete-form.component.html',
  styleUrls: ['./templete-form.component.css']
})
export class TempleteFormComponent {
City: any;
k: any;


  public SubmitClick(data:any){

    alert(JSON.stringify(data));
  }
}



