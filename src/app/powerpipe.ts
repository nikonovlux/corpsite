import { Pipe, PipeTransform } from '@angular/core';
/* 
*/
@Pipe({name: 'powerpipe'})
export class PowerPipe implements PipeTransform {

  transform(value: number, power: number): number {    
    return Math.pow(value, power);
  }

}