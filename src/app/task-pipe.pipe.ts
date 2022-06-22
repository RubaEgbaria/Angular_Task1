import { UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskPipe'
})
export class TaskPipePipe implements PipeTransform {

  title = ' pipe';
  transform(value: string, operation?: string): string {
    if ( operation == 'lowercase' ){
      return value.toLowerCase();
    }
    else if ( operation == 'uppercase' ){
      return value.toUpperCase();
    }
    else {
      return value;
    }
  }
    // {{ title | UpperCasePipe }} 
}
