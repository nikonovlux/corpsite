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
  ) {

    let urlParams = new URLSearchParams(window.location.search);

    let myCode:string = urlParams.get('code');    
    let mySessionState:string = urlParams.get('session_state');
    let my_time:string =  Date.now().toString();

      if(myCode && mySessionState){
        localStorage.setItem('session_code', myCode);
        localStorage.setItem('session_state', mySessionState);
        localStorage.setItem('session_time', my_time)
      }
  }
  
   




  digests;
  orders;

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

    //this.employeeService.getAdalToken();  
    

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

}



