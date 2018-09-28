import { Component, OnInit } from '@angular/core';
import { SPService } from './sp.service'
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { of } from 'rxjs';  

import {graph_params} from '../environments/environment.prod';

import {ActivatedRoute, Router, Params} from '@angular/router';

import { EmployeeService } from '../employee.service';



@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private spService: SPService,
              private adalSvc: MsAdalAngular6Service              
  ) {

      // this.activatedRoute.queryParams.subscribe(params => {
      //   let value_1 = params['code'];
      //   console.log(value_1);
      //   localStorage.setItem('code', value_1);
      // }); 

      //localStorage.setItem('token', globals.token);
    }
  
  tokenn:string;
  title = 'App';
  items: String[]  = [];
  public itemss = of(["Инструкции", "Приказы", "Документы", "Информация"]).subscribe( data => this.items = data);
  //  public itemss = of("Инструкции", "Приказы", "Документы", "Информация").subscribe( data => this.items.push(data));

  params = graph_params;
  
 
  ngOnInit(){

      // if(true){
      //   this.params.code = localStorage.getItem('code'); 
      //   this.employeeService.getJson('https://login.microsoftonline.com/interoko.onmicrosoft.com/oauth2/token', 'post', this.params).subscribe(data => localStorage.setItem('oauth2', data))

      // }

  }
  checkUser(){
      this.adalSvc.acquireToken('<RESOURCE>').subscribe(
                                                          (resToken: string) => {
                                                                                this.tokenn = resToken
                                                                                console.log(this.tokenn)
                                                                              }                                                                          
                                                                            );
      this.spService.getWebTitle().subscribe(
                                              web => (this.title = web.title),
                                              response => {
                                                console.log('---------------------')
                                                console.log('http status ' + response.status)  
                                                console.log('---------------------')
                                              }
                                          );
  }
  checkUserInfo(){
      console.log(this.adalSvc.userInfo);
  }

}


// this.adalSvc.acquireToken('<RESOURCE>').subscribe((resToken: string) => {
//   console.log('-------token--------');
//   console.log(resToken);
//   console.log('--------end---------');
// });


//console.log('clicked1')
//console.log(sessionStorage.getItem('adal.idtoken'))
