import { Component, OnInit, ViewChild } from '@angular/core';
//import { SPService } from './sp.service'
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
//  import { of } from 'rxjs'; 
import { EmployeeService } from '../employee.service';

import {MenuItem} from 'primeng/api';



@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private employeeService: EmployeeService,              
              //  private spService: SPService,
              private adalSvc: MsAdalAngular6Service              
  ) {}
  
 
 
  digests;
  orders;

  tokenn:string;
  title = 'App';

  top_menu: MenuItem[];

  files_menu: MenuItem[];
  activeItem: MenuItem;
 
 
  @ViewChild('menuItems') menu: MenuItem[];
  
  activateMenu(){
    this.activeItem = this.menu['activeItem'];
    // console.log(this.activeItem);
    // console.log(this.menu['activeItem']);
  }

  ngOnInit(){

    this.employeeService.getAdalToken();  
    

    this.files_menu = [
      {label: 'Дайджесты'},
      {label: 'Инструкции'},       
      {label: 'Приказы'},
      {label: 'Бланки'}
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


  checkUser(){
      this.adalSvc.acquireToken('<RESOURCE>')
        .subscribe(
                      (resToken: string) => {
                                            this.tokenn = resToken
                                            console.log(this.tokenn)
                                          }                                                                          
                                        );
              }
}




  // checkPnP(){
  //   this.spService.getWebTitle()
  //     .subscribe(
  //                 web => (this.title = web.title),
  //                 response => {
  //                   console.log('---------------------')
  //                   console.log('http status ' + response.status)  
  //                   console.log('---------------------')
  //                 }
  //               );
  //             }


//  import {ActivatedRoute, Router, Params} from '@angular/router';

//  private activatedRoute: ActivatedRoute,

      //    params = graph_params;
      //  this.activatedRoute.queryParams.subscribe(params => {
      //   let value_1 = params['code'];
      //   console.log(value_1);
      //   localStorage.setItem('code', value_1);
      // }); 

      //localStorage.setItem('token', globals.token);



  //items: String[]  = [];
  //public itemss = of(["Инструкции", "Приказы", "Документы", "Информация"]).subscribe( data => this.items = data);
  //  public itemss = of("Инструкции", "Приказы", "Документы", "Информация").subscribe( data => this.items.push(data));


    //this.activeItem = this.top_menu[2];

    // if(true){
    //   this.params.code = localStorage.getItem('code'); 
    //   this.employeeService.getJson('https://login.microsoftonline.com/interoko.onmicrosoft.com/oauth2/token', 'post', this.params).subscribe(data => localStorage.setItem('oauth2', data))
    // }


  // checkUserInfo(){
  //     console.log(this.adalSvc.userInfo);
  // }


// this.adalSvc.acquireToken('<RESOURCE>').subscribe((resToken: string) => {
//   console.log('-------token--------');
//   console.log(resToken);
//   console.log('--------end---------');
// });


//console.log('clicked1')
//console.log(sessionStorage.getItem('adal.idtoken'))
