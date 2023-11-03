import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() public MsgFromPrent:string='';

  @Output() public ChildClick:EventEmitter<string>=new EventEmitter<string>();

  public ChildButtonClick(){
    this.ChildClick.emit('Hello !from child');  
  }
  }






// it is not possible to get property from class so we use @Input for getting value from class 