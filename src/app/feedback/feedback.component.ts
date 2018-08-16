import { Component, OnInit } from '@angular/core';

import {DropdownModule} from 'primeng/dropdown';
import {SelectItem} from 'primeng/api';


interface Theme {
  name: string;
  code: string;
};



@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

 

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.selectedTheme1);
    console.log(this.writtenText1);
    
  }




  theme1: SelectItem[];
    
  selectedTheme1: Theme;

  writtenText1 = "initial text";

  constructor() {

    this.theme1 = [
      {label:'Select Theme', value:null},
      {label:'ИТ', value:{id:1, name: 'ИТ', code: 'NY'}},
      {label:'МТО', value:{id:2, name: 'МТО', code: 'RM'}},
      {label:'Бухгалтерия', value:{id:3, name: 'Бухгалтерия', code: 'LDN'}},
      {label:'Склад', value:{id:4, name: 'Склад', code: 'IST'}},
      {label:'Производство', value:{id:5, name: 'Производство', code: 'PRS'}}
  ];

   }

  ngOnInit() {
  }

}
