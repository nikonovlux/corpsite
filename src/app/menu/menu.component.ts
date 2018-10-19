import { Component, OnInit } from '@angular/core';

import {MsAdalAngular6Service} from 'microsoft-adal-angular6';

import {SelectItem} from 'primeng/api';

import {TranslateService} from '@ngx-translate/core';

import {EmployeeService} from '../employee.service';

import {url_graph_ms} from 'src/environments/environment.prod';

import {MessageService} from 'primeng/api';








@Component({
  providers: [MessageService],
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    private employeeService: EmployeeService,
    private adalSvc: MsAdalAngular6Service,
    public translate: TranslateService
    ) {  }


  langs: SelectItem[]  = [
    {label:'En', value:{label:'En', value:'en'}},
    {label:'Ру', value:{label:'Ру', value:'ru'}},
    {label:'Укр', value:{label:'Укр', value:'ua'}}
  ];

  selectedlang = JSON.parse(localStorage.getItem("lang"));

  

  onLangChange(){

    localStorage.setItem("lang",JSON.stringify(this.selectedlang)); 
   
    this.translate.use( JSON.parse(localStorage.getItem("lang")).value );

  }

  userLogin() {

    console.log("Login initiated");
    window.location.href= "https://login.microsoftonline.com/435a4f02-f6b2-4248-9a5c-0f355179c0df/oauth2/authorize?response_type=id_token&client_id=937a47e8-b6ad-4226-8d28-4940d9662ac9&redirect_uri=http%3A%2F%2Fcorpsite.opticalhouse.com.ua%3A4200%2Fmainpage"
  
  }

  userLogout() {

    console.log("Logout initiated");
    

      this.adalSvc.logout();
      //localStorage.clear();
      //alert(window.location.toString())
      //window.location.href =  window.location.toString();
      //window.location.href= "https://login.microsoftonline.com/435a4f02-f6b2-4248-9a5c-0f355179c0df/oauth2/logout?post_logout_redirect_uri=https://corpsite.opticalhouse.com.ua:4200/mainpage"
  
  }

  fname;

  is2Loggedin:boolean = false;

  user_photo_src  = '../assets/img/logo_ico.png';
  //user_photo_src  = ms_graph_url + 'me/photo/$value' + '?api-version=1.6';





  ngOnInit() {
      
    
    if (this.adalSvc.userInfo){
      this.fname = this.adalSvc.userInfo.profile['family_name'];
      console.log('adalUser-----------------');
      console.log(this.adalSvc.userInfo);
      this.is2Loggedin = true;
      this.employeeService.httpRequestPhoto(this.adalSvc.userInfo.profile.upn, 'photo');  
      document.getElementById('fname').removeAttribute('href');    
    } else {
      this.fname = "Зарегистрируйтесь"; 
      this.is2Loggedin = false;
      document.getElementById('fname').setAttribute('href','https://corpsite.opticalhouse.com.ua:4200/docs');
      
    }
  }
}
