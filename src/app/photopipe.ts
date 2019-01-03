import { Pipe, PipeTransform } from '@angular/core';
import {  HttpService } from './http.service';
/* 
*/
@Pipe({name: 'photopipe'})
export class PhotoPipe implements PipeTransform {  
  
  constructor(private httpService:HttpService) { }

  transform(email: string): string {        
      
      return this.httpService.getBlob(`https://graph.microsoft.com/beta/users/${email}/Photos/48X48/$value`).toString()
             
  }

}



//  <img [attr.alt]="rowData.mail" [src]="rowData.mail | photopipe" >
//  return 