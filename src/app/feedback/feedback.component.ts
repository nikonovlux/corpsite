import { Component, OnInit } from '@angular/core'

import {DropdownModule} from 'primeng/dropdown'

import {SelectItem} from 'primeng/api'

import {HttpService} from '../http.service'

import {graph_resourses,urls_departments,SP_Fields,SP_List_post,survey} from 'src/environments/environment.prod'

import {MessageService} from 'primeng/api'


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
  styleUrls: ['./feedback.component.css'],
  providers: [MessageService]
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

  
  constructor(
    private HttpService: HttpService,
    private messageService: MessageService  
  ) {}



  i = 0
  onSpListPost(){

if(this.selectedDep1 && this.selectedTopic1 && this.writtenText1){

    this.i = this.i + 1
    let server2: string = urls_departments.corportal.url + graph_resourses.list + 'results/items'   //?expand=fields(select=Column1,Column2)
    let sp_body: SP_Fields = {
      Title: this.writtenText1,
      department: this.selectedDep1.name,
      subject:  this.selectedTopic1.label
    }

    // employee_surname:'First',
    // employee_name:'Second',
    // employee_position:'Third', // selectedTopic1.label writtenText1 this.selectedDep1.name



    let sp_post: SP_List_post = {
      fields: sp_body
    }

    // let body = 
    //   {
    //     "fields": {
    //       "Title": "1second",
    //       "employee_surname": "Petrov",
    //       "employee_name": "Petro",
    //       "employee_position": "salesman"}
    //     }

    console.log(server2)
    console.log(sp_post)

// get
  //  this.HttpService.getJson(server2,'ms').subscribe(data => {
  //                                                                                   console.log(data);                                                                                    
  //                                                                                   })  
// post
    this.HttpService.connectUrl(server2)('get')().subscribe(data => {
                                                                                    this.messageService.clear();    
                                                                                    this.messageService.add({severity: 'success', summary: 'Post item - OK', detail: JSON.stringify(data['fields']) });
                                                                                 
                                                                                    console.log(data);                                                                                    
                                                                                    })  


    // this.HttpService.getJson({
    //                               userUrl: server2,
    //                               body: sp_post,
    //                               token:'ms',
    //                               method: 'post'
    //                                               }).subscribe(
    //                                                       res => console.log(res)                                                              
    //                                                       )
  }
}

  ngOnInit(){
              this.dep1 = survey.dep1
              this.dep2 = survey.dep2
              this.topic1 = survey.topic1
            }

}
