import { Pipe, PipeTransform } from '@angular/core';
/* 
*/
@Pipe({name: 'uniquepipe'})
export class UniquePipe implements PipeTransform {

  transform(value) {    
   
    //return value.sort((a, b) => { return  a.value - b.value });
    console.log('---uniquepipe---')
    console.log(value)
    let new2 = []
    value
        .sort((a, b) => { return  a.value - b.value })
        .forEach(element => {
                              new2.push(element)
                            });
    console.log(new2)
    return new2
    //  return [{label:'TestPipe', value:'second'}]

  }

}