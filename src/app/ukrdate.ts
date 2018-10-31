import { Component, Input } from '@angular/core';


@Component({
    selector: 'ukrdate',
    template:   `<div>         
                    <p>Login time {{   cusdate | date:'yyyy-MM-dd HH:mm'   }}</p>
                </div>`
   })
   
   export class PipeUkrDateComponent {
    cusdate: number = Date.now();
    //@Input() ukrdate;
   }