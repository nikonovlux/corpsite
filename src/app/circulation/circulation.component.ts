import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {EmployeeService } from '../employee.service';
import {ms_graph_url} from '../environments/environment.prod';
import {MessageService} from 'primeng/api';

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  providers: [MessageService],
  selector: 'app-circulation',
  templateUrl: './circulation.component.html',
  styleUrls: ['./circulation.component.css']
})
export class CirculationComponent implements OnInit {

  // old server2: string = "https://interoko.sharepoint.com/teams/hr/_api/lists/getbytitle('complains')/items/";
  
  //  server2: string = "https://graph.microsoft.com/v1.0/sites/interoko.sharepoint.com:/teams/hr:/lists/complains/items";

  server2: string = "https://graph.microsoft.com/v1.0/me";

  //@ViewChild('imgid') img:ElementRef;

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
  base64_example = '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';

  getPhoto(photo_url){
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
                                localStorage.removeItem('code2');
                              }  
                              //  alert ('error - '+ error); 
                              console.log('getPhoto func Error ------------------') ;
                              //console.log(error.error.text);
                              //localStorage.setItem('img_avatar', btoa(error.error.text));
                            });
  }

  SendComplain() {

    console.log("clicked1");  

    this.employeeService.getJson(this.server2)   //  + '&api-version=1.6'
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
  
  //  this.getPhoto(ms_graph_url + 'me/photo/$value');
  // this.employeeService.userPhoto().subscribe(next => {

  //                                             console.log('userPhoto ok ---------------------------');              
  //                                             //console.log(next);

  //                                             this.avatarImg = "data:image/png;base64," + next;
  //                                             this.base64 = this.domSanitizer.bypassSecurityTrustUrl(this.avatarImg);

  //                                           },
  //                                           error => {

  //                                             console.log('userPhoto error ---------------------------');
  //                                             //console.log(error.error.text);

  //                                             //  this.avatarImg = "data:image/jpeg;base64," + this.base64_example;
  //                                             this.base64 = this.domSanitizer.bypassSecurityTrustUrl(this.avatarImg);
                                                                                                              
  //                                           },
  //                                           () => {

  //                                             console.log('userPhoto complete ---------------------------');              
  //                                             //console.log();

  //                                             this.avatarImg = "data:image/jpeg;base64,";
  //                                             this.base64 = this.domSanitizer.bypassSecurityTrustUrl(this.avatarImg);
                                                                                                                                                           
  //                                           }
  //                                         );
  }
}
