import { Component, OnInit } from '@angular/core';
import { SPService } from './sp.service'
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { of } from 'rxjs';  

import {graph_params} from '../environments/environment.prod';

import {ActivatedRoute, Router, Params} from '@angular/router';

import { EmployeeService } from '../employee.service';

import {MenuItem} from 'primeng/api';



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
  
  top_menu: MenuItem[];
  activeItem: MenuItem;




  tokenn:string;
  title = 'App';
  //items: String[]  = [];
  //public itemss = of(["Инструкции", "Приказы", "Документы", "Информация"]).subscribe( data => this.items = data);
  //  public itemss = of("Инструкции", "Приказы", "Документы", "Информация").subscribe( data => this.items.push(data));

  params = graph_params;


  
 
  ngOnInit(){

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
    //this.activeItem = this.top_menu[2];

    // if(true){
    //   this.params.code = localStorage.getItem('code'); 
    //   this.employeeService.getJson('https://login.microsoftonline.com/interoko.onmicrosoft.com/oauth2/token', 'post', this.params).subscribe(data => localStorage.setItem('oauth2', data))
    // }

  this.GetData();
  }
  GetData(): void {
    //console.log('adalToken - '+localStorage.getItem('adalToken'));
    this.employeeService.getAdalToken();    
    this.employeeService.getJsonFile();
    //console.log('top_deps - '+localStorage.getItem('top_deps'));
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
