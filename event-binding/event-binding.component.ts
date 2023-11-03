import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  // public InsertClick(e:any,msg:string):void{
  //   document.write(`
  //   Button Id :  ${e.target.id}</br>
  //   Button Nmae : ${e.target.name} </br>
  //   Button Class :  ${e.target.class} </br>
  //   X Position :  ${e.clientX}</br>
  //   Ctrl Key :    ${e.ctrlKey}</br>
  //   <h2> ${msg}</h2>
  //   `);
  

public img_src:string="assets/redshoes.jpg"

public styleObject:{position:string,left:string,top:string}={
  position:'',
  left: '',
  top: ''
};
public SetColor(colorName:string){

  switch(colorName){
    case "red":
      this.img_src="assets/redshoes.jpg";
      break;
  
  case "black":
    this.img_src="assets/blackshoes.jpg";
    break;

case "white":
  this.img_src="assets/white_shoes.jpg";
  break;
}

}

public MouseMove(e:any){
this.styleObject={

  position:'fixed',
  left:e.client +'px',
  top :e.clientY +'px'
}
}

}


