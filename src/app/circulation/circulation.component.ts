import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {EmployeeService } from '../employee.service';
import {url_graph_ms, base64_img} from 'src/environments/environment.prod';
import {MessageService} from 'primeng/api';

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';




@Component({
  providers: [MessageService],
  selector: 'app-circulation',
  templateUrl: './circulation.component.html',
  styleUrls: ['./circulation.component.css']
})
export class CirculationComponent implements OnInit {



  server2: string = "https://graph.microsoft.com/beta/me";


  constructor(
      //private el: ElementRef,
      private domSanitizer: DomSanitizer,
      private employeeService:  EmployeeService,
      private messageService: MessageService
    ) { }

  respo_area = 'response...';
  avatar_src = '../assets/img/logo_ico.png';
  base64;
  avatarImg:string = '../assets/img/logo_ico.png'
  //data:image/png;base64,
  topics
  topic1
  onTopicChange(){}
  

  getPhoto_fail(photo_url){
    //let photo_url = ms_graph_url + 'me/photo/$value';
    this.employeeService.getJson(photo_url)
        .subscribe( photo => {
                              this.messageService.add({severity: 'success', summary: 'MS Grath connection ok'});                    
                              //localStorage.setItem('img_avatar', photo);
                              console.log('getPhoto func Photo ------------------') ;
                              console.log(photo.arrayBuffer());
                              
                              
                              },
                    error=> {
                              this.messageService.add({severity: 'Error', summary: 'MS Grath connection failed', detail: 'status: '+ error.status});

                              if(error.status == 401){
                                localStorage.removeItem('code_ag');
                              }  
                              //  alert ('error - '+ error); 
                              console.log('getPhoto func Error ------------------') ;
                              //console.log(error.error.text);
                              //localStorage.setItem('img_avatar', btoa(error.error.text));
                            });
  }

  SendQ() {

    console.log("clicked1");  

    this.employeeService.getJson(this.server2, 'ms')   //  + '&api-version=1.6'
      .subscribe(
        response => {
          console.log("recieved--------------------------");
          console.log(response);
          this.respo_area = JSON.stringify(response);
        },
        error => {
          alert(JSON.stringify(error))
        }        
      );
    console.log("clicked2");   
  }

  ngOnInit() {
  
  
  }
}
