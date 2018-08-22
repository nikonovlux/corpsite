import { Component, OnInit } from '@angular/core';

import {ButtonModule} from 'primeng/button';

import { MsAdalAngular6Service } from 'microsoft-adal-angular6';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {

  constructor(
                private adalSvc: MsAdalAngular6Service
              ) {  }

    
  
  userLogin() {
    console.log("Login initiated");
    window.location.href= "https://login.microsoftonline.com/435a4f02-f6b2-4248-9a5c-0f355179c0df/oauth2/authorize?response_type=id_token&client_id=937a47e8-b6ad-4226-8d28-4940d9662ac9&redirect_uri=http%3A%2F%2F192.168.220.146%3A4200%2Fmainpage"
  //
  }

  userLogout() {
    console.log("Logout initiated");
    window.location.href= "https://login.microsoftonline.com/435a4f02-f6b2-4248-9a5c-0f355179c0df/oauth2/logout?post_logout_redirect_uri=http://192.168.220.146:4200/mainpage"
  //
  }

  fname

  ngOnInit() { 

    this.fname = "Зарегистрируйтесь"; 

    if (this.adalSvc.userInfo != null){

      //  this.fname = this.adalSvc.userInfo.userName
      this.fname = 'Добрый день, '+ this.adalSvc.userInfo.profile['family_name']
    
    }

  }

}
