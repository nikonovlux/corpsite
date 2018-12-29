import {Component,OnInit} from '@angular/core';
import {HttpService} from '../http.service';

import {MessageService} from 'primeng/api';

//import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import {urls,urls_graph} from 'src/environments/environment.prod';

import {fromEvent,Observable,Subscription} from 'rxjs'





@Component({
  providers: [MessageService],
  selector: 'app-circulation',
  templateUrl: './circulation.component.html',
  styleUrls: ['./circulation.component.css']
})
export class CirculationComponent implements OnInit {

  server2: string = urls_graph.usersearch;

  constructor(
      //private el: ElementRef,
      //private domSanitizer: DomSanitizer,
      private HttpService:  HttpService,
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
    this.HttpService.connectUrl(photo_url)('get')()
                .subscribe( photo => {
                              this.messageService.add({severity: 'success', summary: 'MS Grath connection ok'});                    
                              //localStorage.setItem('img_avatar', photo);
                              console.log('getPhoto func Photo ------------------') ;
                              //console.log(photo.arrayBuffer());                              
                              
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

  testCurry(){
    console.log("clicked_testCurry");  

    this.HttpService.connectUrl(this.server2)('get')()
                                                            .subscribe(
                                                                  response => {
                                                                    console.log("recieved------------testCurry--------------");
                                                                    console.log(response);
                                                                    this.respo_area = JSON.stringify(response);
                                                                  },
                                                                  error => {
                                                                    alert(JSON.stringify(error))
                                                                  }        
                                                                );
    
    console.log("clicked2");  
  }


  SendQ() {

    console.log("clicked_SendQ");  

    this.HttpService.connectUrl(this.server2)('get')()   //  + '&api-version=1.6'
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
      
    //console.log("clicked2");   
  }

  //observable : Observable<Event>;
  subs: Subscription;

  ngOnInit() {
    
    const observable = fromEvent(document, 'click')    
    this.subs = observable.subscribe(console.log,console.log,alert);
    
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
