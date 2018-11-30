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
    
    //document.getElementById("mailsending").setAttribute("href", "mailto:sd@gmail.comm?subject=" + dep2 + "&amp;body='" + topic2 + " "+ text2 + "'" ); 
    
  }


  dep1: SelectItem[];
  dep2: SelectItem[];
  topic1: Topic[];
   
  selectedDep1: Dep;
  selectedTopic1: Topic = {
    label:"",
    text:""
  };

  
  writtenText1 = "Текст обращения";

  attachment: Blob

  onSelectFile(event){
    console.log(event);
    this.attachment = event.files[0].objectURL.changingThisBreaksApplicationSecurity


  }

  myUploader(event) {
    console.log(event);
    this.attachment = event.files[0].objectURL.changingThisBreaksApplicationSecurity
}


  onDepChange(){
    console.log('dep changed');
    console.log(this.selectedDep1);
    this.topic1 = this.selectedDep1.topics;
  };

  onTopicChange(){
    console.log('topic changed');
    this.writtenText1 = this.selectedTopic1.text;
  };

  
  constructor() {
  
  this.topic1 = [{ label:'Выбор', text:'Выбор'}];

  this.dep1 = [
    {   label:'Выбор обращения', value:null},
    {   label:'Сообщить о ошибке/баге (Corpsite)', value:{
      id:1,
      name: "ошибки",
      code: '1',
      topics: [
                { label:'Выбор типа ошибки', value:{ id:11, text:null}},
                { label:'Грамматическая ошибка', value:{ id:12, label:'Грамматическая ошибка', text:'Грамматическая ошибка - укажите раздел сайте где обнаружена ошибка'}},
                { label:'Орфографическая ошибка', value:{ id:13, label:'Орфографическая ошибка', text:'Орфографическая ошибка - укажите раздел сайте где обнаружена ошибка'}},
                { label:'Пунктуационная ошибка', value:{ id:14, label:'Пунктуационная ошибка', text:'Пунктуационная ошибка - укажите раздел сайте где обнаружена ошибка'}},
                { label:'Программный баг', value:{ id:14, label:'Программный баг', text:'Программный баг - укажите раздел сайте где обнаружен баг'}}
              ]
     }},
    {   label:'Обращение на sd@luxoptica.ua для ИТ', value:{
      id:1,
      name: "ошибки",
      code: '1',
      topics: [
                { label:'Выбор Департамента для обращения', value:{ id:11, text:null}},
                { label:'Техническая поддержка', value:{ id:12, label:'Техническая поддержка', text:'Техническая поддержка - опишите проблему'}},
                { label:'Програмное администрирование', value:{ id:13, label:'Програмное администрирование', text:'Програмное администрирование - опишите проблему'}},
                { label:'Разработка и внедрение', value:{ id:14, label:'Разработка и внедрение', text:'Разработка и внедрение - опишите проблему'}}
              ]      
    }},
    {   label:'Оформить жалобу', value:{ 
      id:1,
      name: "Жалоба",
      code: '1',
      topics: [
                { label:'Выбор темы жалобы', value:{ id:11, text:null}},
                { label:'Розница', value:{ id:12, label:'Розница', text:'Розница - опишите проблему'}},
                { label:'Склад', value:{ id:13, label:'Склад', text:'Склад - опишите проблему'}},
                { label:'ИТ', value:{ id:14, label:'ИТ', text:'ИТ - опишите проблему'}},
                { label:'Логистика', value:{ id:14, label:'Логистика', text:'Логистика - опишите проблему'}}
              ] 
    }},
    {   label:'Отправить идею', value:{ 
      id:1,
      name: "Идея",
      code: '1',
      topics: [
                { label:'Выбор темы идеи', value:{ id:11, text:null}},
                { label:'Розница', value:{ id:12, label:'Розница', text:'Розница - опишите идею'}},
                { label:'Склад', value:{ id:13, label:'Склад', text:'Склад - опишите идею'}},
                { label:'ИТ', value:{ id:14, label:'ИТ', text:'ИТ - опишите идею'}},
                { label:'Логистика', value:{ id:14, label:'Логистика', text:'Логистика - опишите идею'}}
              ] 
    }},
    {   label:'Сообщить о проблеме с безопасностью', value:{ 
      id:1,
      name: "безопасностью",
      code: '1',
      topics: [
                { label:'Выбор темы безопасности', value:{ id:11, text:null}},
                { label:'ИТ безопасность', value:{ id:12, label:'Розница', text:'Безопасность - опишите идею'}},
                { label:'Охрана', value:{ id:13, label:'Склад', text:'Безопасность - опишите идею'}},
                { label:'Службы слежения', value:{ id:14, label:'ИТ', text:'Безопасность - опишите идею'}},
                { label:'другое', value:{ id:14, label:'Логистика', text:'Безопасность - опишите идею'}}
              ]
    }}
  ];

  this.dep2 = [
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



  }

  ngOnInit() {
  }

}
