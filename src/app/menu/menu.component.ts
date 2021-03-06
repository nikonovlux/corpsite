import {Component, OnInit} from '@angular/core';

import {MsAdalAngular6Service} from 'microsoft-adal-angular6';

import {SelectItem} from 'primeng/api';

import {TranslateService} from '@ngx-translate/core';

import {HttpService} from '../http.service';

import {MessageService} from 'primeng/api';

import {urls} from 'src/environments/environment.prod';

import {AppComponent} from '../app.component'

@Component({
  providers: [MessageService],
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private appcomp: AppComponent,
    private messageService: MessageService,
    private HttpService: HttpService,
    private adalSvc: MsAdalAngular6Service,
    public translate: TranslateService
    ) {  }


  langs: SelectItem[]  = [
    {label:'En', value:{label:'En', value:'en'}},
    {label:'Ру', value:{label:'Ру', value:'ru'}},
    {label:'Укр', value:{label:'Укр', value:'ua'}}
  ];

  selectedlang = JSON.parse(localStorage.getItem("lang"));

  datetime = Date.now();
  
  toggleMenuOut(){
    this.appcomp.toggleMenuOut();
  }

  onLangChange(){

    localStorage.setItem("lang",JSON.stringify(this.selectedlang)); 
   
    this.translate.use( JSON.parse(localStorage.getItem("lang")).value );

  }

  userLogin() {
    console.log("Login initiated");
    window.location.href= ""
  }

  userLogout() {

    console.log("Logout initiated");

      localStorage.setItem('code_ms','');
      this.adalSvc.logout();
      
  }

  spanclass = "sp_class"

  fname;

  is2Loggedin:boolean = false;

  user_photo_src  = '../assets/img/logo_ico.png';

  ngOnInit() {
          
    if (this.adalSvc.userInfo){

      console.log('---adalUser---');
      console.log(this.adalSvc.userInfo);
      
      this.HttpService.connectUrl(urls.me)('get')()
                                                  .subscribe(
                                                            data=>{},
                                                            error=>{
  
                                                                  if(error.status == 401){                                                              
                                                                    
                                                                    window.location.href = urls.url_auth_implicit;  // ok
  
                                                                  }else{
                                                                        alert(error.status)
                                                                  }
  
                                                                }
                                                            )

      this.fname = this.adalSvc.userInfo.profile['family_name'] + ' ' + this.adalSvc.userInfo.profile['given_name'];

      this.is2Loggedin = true;

      this.HttpService.httpRequestPhoto_original(this.adalSvc.userInfo.profile.upn, 'photo');  

      document.getElementById('fname').removeAttribute('href');

    } else {
      this.fname = "LOG IN"; 
      this.is2Loggedin = false;
      document.getElementById('fname').setAttribute('href','https://corpsite.opticalhouse.com.ua:4200/structure');
      
    }
  }
}
