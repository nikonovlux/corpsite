import { Component, OnInit, ViewChild } from '@angular/core';

import {MenuItem} from 'primeng/api';

import {MsAdalAngular6Service} from 'microsoft-adal-angular6';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(
    private adal: MsAdalAngular6Service,
    private employeeService: EmployeeService
  ){

  }

  digests;
  orders;

  title = 'App';

  top_menu: MenuItem[];
  files_menu: MenuItem[];
  activeItem: MenuItem;
 
  email_last_value:any
  email_last:any

  files_last_value:any
  files_last:any

  events_last_value:any
  events_last:any

  lists_last_value:any
  lists_last:any

  shared_last_value:any
  shared_last:any

  digests_last_value:any
  digests_last:any
 
  @ViewChild('menuItems') menu: MenuItem[];
  
  activateMenu(){
    this.activeItem = this.menu['activeItem'];
    // console.log(this.activeItem);
    // console.log(this.menu['activeItem']);
  }

  getDigests(){

    //  https://graph.microsoft.com/beta/sites/interoko.sharepoint.com:/teams/test:/lists/complains/items?expand=fields(select=id,Title,department)
  
    if(this.adal.isAuthenticated){
      this.employeeService.getJson( 'https://graph.microsoft.com/beta/sites/interoko.sharepoint.com:/sites/hr:/drives',
                                    'ms').subscribe(data =>
                                                          {
                                                            this.digests_last_value = data;
                                                            this.digests_last = this.digests_last_value.value
                                                            console.log(this.digests_last);
                                                          },
                                                    error=> console.log(error)
                                                    )      
    }    
  }



  getShared(){

    
  
    if(this.adal.isAuthenticated){
      this.employeeService.getJson( 'https://graph.microsoft.com/beta/me/drive/sharedWithMe',
                                    'ms').subscribe(data =>
                                                          {
                                                            this.shared_last_value = data;
                                                            this.shared_last = this.shared_last_value.value
                                                            console.log(this.shared_last);
                                                          },
                                                    error=> console.log(error)
                                                    )      
    }    
  }
  


getLists(){

  //  https://graph.microsoft.com/beta/sites/interoko.sharepoint.com:/teams/test:/lists/complains/items?expand=fields(select=id,Title,department)

  if(this.adal.isAuthenticated){
    this.employeeService.getJson( 'https://graph.microsoft.com/beta/sites/interoko.sharepoint.com:/teams/test:/lists/complains/items?expand=fields(select=id,Title,department)',
                                  'ms').subscribe(data =>
                                                        {
                                                          this.lists_last_value = data;
                                                          this.lists_last = this.lists_last_value.value
                                                          console.log(this.lists_last);
                                                        },
                                                  error=> console.log(error)
                                                  )    
  }
}

getEvents(){
  if(this.adal.isAuthenticated){
    this.employeeService.getJson('https://graph.microsoft.com/beta/me/events?$select=subject,bodyPreview,organizer,attendees,start,end,location','ms').subscribe(data =>
                                                                                                              {
                                                                                                                this.events_last_value = data;
                                                                                                                this.events_last = this.events_last_value.value
                                                                                                                console.log(this.events_last);
                                                                                                              },
                                                                                                        error=> console.log(error)
    )    
  }
}

getOneDrive(){
  if(this.adal.isAuthenticated){
    this.employeeService.getJson('https://graph.microsoft.com/beta/me/drive/root/children?$top=25','ms').subscribe(data =>
                                                                                                              {
                                                                                                                this.files_last_value = data;
                                                                                                                this.files_last = this.files_last_value.value
                                                                                                                console.log(this.files_last);
                                                                                                              },
                                                                                                        error=> console.log(error)
    )    
  }  
}

getMail(){
  if(this.adal.isAuthenticated){
    this.employeeService.getJson('https://graph.microsoft.com/beta/me/messages?$top=25','ms').subscribe(data =>
                                                                                                              {
                                                                                                                this.email_last_value = data;
                                                                                                                this.email_last = this.email_last_value.value
                                                                                                                console.log(this.email_last);
                                                                                                              },
                                                                                                        error=> console.log(error)
    )    
  }
}



  ngOnInit(){    

    this.getDigests()
    this.getShared()
    this.getLists()
    this.getEvents()
    this.getMail()
    this.getOneDrive()


    this.files_menu = [
      {label: 'Дайджесты'},
      {label: 'Инструкции'},       
      {label: 'Приказы'},
      {label: 'Files'},
      {label: 'Emails'},
      {label: 'Events'},
      {label: 'Lists'},
      {label: 'SharedWithMe'}
    ];

    this.activeItem = this.files_menu[0];

    
    this.top_menu = [
      { label: 'Информация',  icon: ' pi pi-bar-chart'},
      { label: 'Инструкции', command: event => console.log(event), icon: 'pi pi-calendar', items: [
      [
        {
          label: "Безопасность рабочего места",
          items: [
            { label: "Инструкция №1" },
            { label: "Инструкция №2" }
          ]
        }
      ],
      [
        {
          label: "Информационная безопасность",
          items: [
            { label: "Инструкция №1", command: event => alert(event) },
            { label: "Инструкция №2", command: event => console.log(event) }
          ]
        }
      ]
    ]
      },
      {label: 'Приказы', icon: 'pi pi-book'},
      {label: 'Поддержка', icon: 'pi pi-support'}
    ];
 
  }

}




    // if (window.location.hash.length){

    //     localStorage.setItem('text_url_hash',  window.location.hash);

    //     let my_time:string =  Date.now().toString();

    //     let urlHashs = new URLSearchParams(window.location.hash);

    //     let id_token:string = urlHashs.get('id_token');
    //     let state:string = urlHashs.get('state');
    //     let session_state:string = urlHashs.get('session_state');

    //     if(id_token){       
    //       localStorage.setItem('id_token', id_token);
    //       localStorage.setItem('s_state', session_state);
    //       localStorage.setItem('state', state);
    //       localStorage.setItem('time', my_time);
    //     }

    // }

    // if (window.location.search.length){

    //   localStorage.setItem('text_url_params',  window.location.search);

    //   let my_time:string =  Date.now().toString();

    //   let urlParams = new URLSearchParams(window.location.search);
    
    //   let myCode:string = urlParams.get('code');
    //   let mySessionState:string = urlParams.get('session_state');
    //   let myState:string = urlParams.get('state');
      
    //   if(myCode){
    //     localStorage.setItem('session_code', myCode);
    //     localStorage.setItem('session_state', mySessionState);
    //     localStorage.setItem('session_state2', myState);
    //     localStorage.setItem('session_time', my_time)
    //   }

    // }
