import { Pipe, PipeTransform } from '@angular/core';
/* 
*/
@Pipe({name: 'powerpipe'})
export class PowerPipe implements PipeTransform {

  transform(value: number): String { 
    
    if (value/1000000 > 1){
      return (value/1000000).toFixed(1) +  ' Mb'
    } else if(value/1000 > 1){
      return (value/1000).toFixed(1) + ' Kb'
    } else {
      return value + ' bytes'
    }
    
  }

}