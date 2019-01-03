import { Component, Input } from '@angular/core';


@Component({
    selector: 'userphoto',
    template:   `<div>   
                    <img src="{{url}}" alt="">                    
                </div>`
   })
   
   export class PipeUserPhotoComponent {
    url: string = 'https://graph.microsoft.com/beta/users/polyakov.s@opticalhouse.com.ua/Photos/48X48/$value'
    
   }