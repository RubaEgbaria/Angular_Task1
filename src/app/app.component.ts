import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1';
  counterLocalValue = 0 ;
  counterChanged(data1: number): void {
    console.log(data1, ' in app ');
    console.log(' here ');
    this.counterLocalValue = data1;
    // this.data = data;
  }
}
