import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {EmployeeService } from '../employee.service';
import {url_graph_ms} from '../environments/environment.prod';
import {MessageService} from 'primeng/api';

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import {base64_img} from '../environments/environment.prod'

@Component({
  providers: [MessageService],
  selector: 'app-circulation',
  templateUrl: './circulation.component.html',
  styleUrls: ['./circulation.component.css']
})
export class CirculationComponent implements OnInit {

  // old server2: string = "https://interoko.sharepoint.com/teams/hr/_api/lists/getbytitle('complains')/items/";
  
  //  server2: string = "https://graph.microsoft.com/v1.0/sites/interoko.sharepoint.com:/teams/hr:/lists/complains/items";

  server2: string = "https://graph.microsoft.com/beta/me";

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

  //                                             //  this.avatarImg = "data:image/jpeg;base64," + this.base64_img;
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
