import { Component, OnInit } from '@angular/core';

import {DropdownModule} from 'primeng/dropdown';
import {SelectItem} from 'primeng/api';




interface Dep {
  name: string;
  code: string;
  topics: Topic[];
};

interface Topic {
  label: string;
  text: string;
};




@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  submitted = false;

  onSubmitClick() {
    this.submitted = true;
    console.log(this.selectedDep1.name);
    console.log(this.selectedTopic1.label);
    console.log(this.writtenText1);
    
    let dep2=this.selectedDep1.name;
    let topic2 = this.selectedTopic1.label;
    let text2=this.writtenText1;

    document.getElementById("mailsending").hidden = false;
    
    document.getElementById("mailsending").setAttribute("href", "mailto:sd@gmail.comm?subject=" + dep2 + "&amp;body='" + topic2 + " "+ text2 + "'" ); 
    
  }

  dep1: SelectItem[];
  topic1: Topic[];
   
  selectedDep1: Dep;
  selectedTopic1: Topic;

  
  writtenText1 = "Текст заявки";

  onDepChange(){
    console.log('dep changed');
    this.topic1 = this.selectedDep1.topics;
  };

  onTopicChange(){
    console.log('topic changed');
    this.writtenText1 = this.selectedTopic1.text;
  };


  
  constructor() {
  
  this.topic1 = [{ label:'Выбор', text:'Выбор'}];


  this.dep1 = [
                {   label:'Select Department', value:null},
                {   label:'Бухгалтерия', value:{  id:1,
                                                  name: 'Бухгалтерия',
                                                  code: '1',
                                                  topics: [
                                                            { label:'Select Topic', value:{ id:11, text:null}},
                                                            { label:'Бухгалтерия не загружается', value:{ id:12, label:'Бухгалтерия не загружается', text:'Бухгалтерия всё плохо'}},
                                                            { label:'Бухгалтерия не работает', value:{ id:13, label:'Бухгалтерия не загружается', text:'Бухгалтерия всё плохо'}},
                                                            { label:'Бухгалтерия накосячила', value:{ id:14, label:'Бухгалтерия не загружается', text:'Бухгалтерия всё плохо'}},
                                                            { label:'Бухгалтерия не отгружает', value:{ id:15, label:'Бухгалтерия не загружается', text:'Бухгалтерия всё плохо'}},
                                                            { label:'Бухгалтерия глючит', value:{ id:16, label:'Бухгалтерия не загружается', text:'Бухгалтерия всё плохо'}}
                                                          ]
                                                  }
                },
                {   label:'МТО', value:{  id:2,
                                          name: 'МТО',
                                          code: '2',
                                          topics: [
                                                    { label:'Select Topic', value:{ id:21, text:null}},
                                                    { label:'МТО не загружается', value:{ id:22, text:'МТО всё плохо'}},
                                                    { label:'МТО не работает', value:{ id:23, text:'МТО всё плохо'}},
                                                    { label:'МТО накосячила', value:{ id:24, text:'МТО всё плохо'}},
                                                    { label:'МТО не отгружает', value:{ id:25, text:'МТО всё плохо'}},
                                                    { label:'МТО глючит', value:{ id:26, text:'МТО всё плохо'}}
                                                  ]
                                          }
                },
                {   label:'ИТ', value:{ id:3,
                                        name: 'ИТ',
                                        code: '3',
                                        topics: [
                                                  { label:'Select Topic', value:{ id:31, text:null}},
                                                  { label:'ИТ не загружается', value:{ id:32, text:'ИТ всё плохо'}},
                                                  { label:'ИТ не работает', value:{ id:33, text:'ИТ всё плохо'}},
                                                  { label:'ИТ накосячила', value:{ id:34, text:'ИТ всё плохо'}},
                                                  { label:'ИТ не отгружает', value:{ id:35, text:'ИТ всё плохо'}},
                                                  { label:'ИТ глючит', value:{ id:36, text:'ИТ всё плохо'}}
                                                ]
                                        }
                      }
                ];

// this.dep1 = [
//               {label:'Select Department', value:null},
//               {label:'ИТ', value:{id:1, name: 'ИТ', code: 'NY'}},
//               {label:'МТО', value:{id:2, name: 'МТО', code: 'RM'}},
//               {label:'Бухгалтерия', value:{id:3, name: 'Бухгалтерия', code: 'LDN'}},
//               {label:'Склад', value:{id:4, name: 'Склад', code: 'IST'}},
//               {label:'Производство', value:{id:5, name: 'Производство', code: 'PRS'}}
//             ];

// this.topic1 = [
//     {label:'Select Topic', value:null},
//     {label:'1С не загружается', value:{id:1, name: '1С не загружается', code: 'NY'}},
//     {label:'Отчет не работает', value:{id:2, name: 'Отчет не работает', code: 'RM'}},
//     {label:'Бухгалтерия накосячила', value:{id:3, name: 'Бухгалтерия накосячила', code: 'LDN'}},
//     {label:'Склад не отгружает', value:{id:4, name: 'Склад не отгружает', code: 'IST'}},
//     {label:'Windows глючит', value:{id:5, name: 'Windows глючит', code: 'PRS'}}
//   ];  

  }

  ngOnInit() {
  }

}
