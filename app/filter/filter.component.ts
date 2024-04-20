import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() public AllCount:number=0;
  @Input() public ElectronicsCounts:number=0;
  @Input() public JeveleryCount:number=0;
  @Input() public MensCount:number=0;
  @Input() public WomenCount:number=0;
  public CategoryName:string='all';
  

  @Output() public CategoryChanged:EventEmitter<string>=new EventEmitter<string>();
  @Output() public SendClick:EventEmitter<any>=new EventEmitter<any>();
  
  

  public SendCategoryName(e:any){
    this.CategoryChanged.emit(e.target.value);
  }

  public SendButtonClick(){
    this.SendClick.emit({'Name':'TV','Price':5600});
  }
}
