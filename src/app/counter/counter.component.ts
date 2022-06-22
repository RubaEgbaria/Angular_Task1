import { style } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
// Display the Counter component as a direct child to AppComponent.
export class CounterComponent implements OnInit {
  @Output() sendCount = new EventEmitter<any>();
  @Input() counterLocalValue = 0  ;
  @Input() minValue = 2 ;
  @Input() maxValue = 7 ;
  isSuccess = true ;
  isDanger = true ; 
  color = '';
  
  constructor() { }

  ngOnInit(): void {}
  toRed (): void {

  }
  toGreen(): void {
  }
  onDecrease():any {
    this.counterLocalValue = this.counterLocalValue - 1 ;
    this.sendCount.emit(this.counterLocalValue);
    console.log('Count sent to app - increased');
    if (this.counterLocalValue <= this.minValue ) 
    {
    console.log(' is yellow ');
    this.color='yellow'


  }
  else if ( this.counterLocalValue  > this.minValue && this.counterLocalValue  < this.maxValue){
    console.log(' is green ');
    this.color='green'

  }
  else if (this.counterLocalValue >= this.maxValue) 
  {
  console.log(' is red ');
  this.color='red'

}
    // this.isDanger = this.counterLocalValue <= this.minValue ;
  }
  
  onIncrease(): any  {
    this.counterLocalValue = this.counterLocalValue + 1 ;
    this.sendCount.emit(this.counterLocalValue);
    console.log('Count sent to app - decreased');
    if (this.counterLocalValue <= this.minValue ) 
    {
    console.log(' is yellow ');
    this.color='yellow'

  }
  else if (this.counterLocalValue >= this.maxValue) 
    {
    console.log(' is red ');
    this.color='red'

  }
  else if ( this.counterLocalValue  > this.minValue && this.counterLocalValue  < this.maxValue){
    console.log(' is green ');
    this.color='green'

  }
  }


}
function FontColor(arg0: number, arg1: number, arg2: number, text: any) {
  throw new Error('Function not implemented.');
}

