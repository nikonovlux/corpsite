import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee';

import { EmployeeService } from '../employee.service';

import {SelectItem} from 'primeng/api';

import {MessageService} from 'primeng/api';





@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',  
  styleUrls: ['./employees.component.css'],
  providers: [MessageService]
})
export class EmployeesComponent implements OnInit {


  // /users?$select=displayName,givenName,postalCode    --   $select=displayName,givenName,surname,department,city,accountEnabled,jobTitle,mail,mailNickname,onPremisesDistinguishedName,telephoneNumber&$filter=accountEnabled eq true
  // startswith(objectType,'U') and 

  //filter:string = "";
  //filter:string = "$filter=accountEnabled eq true and startswith(givenName,'Никонов')";
  //filter:string = "$filter=accountEnabled eq true and startswith(jobTitle,'Прог') and department eq 'Отдел разработки'";

  url:string = 'https://graph.windows.net/interoko.onmicrosoft.com/';
  call:string = 'users?';
  api_version:string = 'api-version=1.6';

  
  filter:string;
  select:string = '$select=givenName,displayName,jobTitle,city,mail,telephoneNumber,phones,accountEnabled,objectType,id';
  top:string = '$top=100';

  full_url:string;

  cols: any[];
  colors: SelectItem[];


  deps: SelectItem[];
  top_deps: SelectItem[];

  selectedTopDepar:SelectItem;
  selectedDepar: SelectItem;

  mailto: string = 'mailto:';
  tel: string = 'tel:';
      

  employees: Employee[];
  groups: {};

  users:any;
  users1:any;

  selected_top_deps;

  depclass:string = 'dep hidden';

  constructor(private employeeService: EmployeeService,
              private messageService: MessageService) { }

  ngOnInit() {
//  { label: 'All Deps', value: null },

    this.top_deps = [
      { value:'Департамент розничных продаж',label:'Департамент розничных продаж'},
      { value:'КОММЕРЧЕСКИЙ ДЕПАРТАМЕНТ',label:'КОММЕРЧЕСКИЙ ДЕПАРТАМЕНТ'},
      { value:'ФИНАНСОВЫЙ ДЕПАРТАМЕНТ',label:'ФИНАНСОВЫЙ ДЕПАРТАМЕНТ'},
      { value:'ЮРИДИЧЕСКИЙ ДЕПАРТАМЕНТ',label:'ЮРИДИЧЕСКИЙ ДЕПАРТАМЕНТ'},
      { value:'ОТДЕЛ РАЗВИТИЯ',label:'ОТДЕЛ РАЗВИТИЯ'},
      { value:'ДЕПАРТАМЕНТ УПРАВЛЕНИЯ ПЕРСОНАЛОМ',label:'ДЕПАРТАМЕНТ УПРАВЛЕНИЯ ПЕРСОНАЛОМ'},
      { value:'ДЕПАРТАМЕНТ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ',label:'ДЕПАРТАМЕНТ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ'},
      { value:'ДЕПАРТАМЕНТ Е-COMMERCE',label:'ДЕПАРТАМЕНТ Е-COMMERCE'},
      { value:'ДЕПАРТАМЕНТ ДИСТРИБУЦИИ',label:'ДЕПАРТАМЕНТ ДИСТРИБУЦИИ'},
      { value:'Оптовый ДЕПАРТАМЕНТ',label:'Оптовый ДЕПАРТАМЕНТ'},
      { value:'ДЕПАРТАМЕНТ МАТЕРИАЛЬНО ТЕХНИЧЕСКОГО ОБЕСПЕЧЕНИЯ, СТРОИТЕЛЬСТВА И ЛОГИСТИКИ',label:'ДЕПАРТАМЕНТ МАТЕРИАЛЬНО ТЕХНИЧЕСКОГО ОБЕСПЕЧЕНИЯ, СТРОИТЕЛЬСТВА И ЛОГИСТИКИ'},
      { value:'СЛУЖБА ВНУТРЕННЕЙ БЕЗОПАСНОСТИ',label:'СЛУЖБА ВНУТРЕННЕЙ БЕЗОПАСНОСТИ'},
      { value:'ФИЛИАЛЫ',label:'ФИЛИАЛЫ'},
      { value:'РОЗНИЧНЫЕ СЕТИ',label:'РОЗНИЧНЫЕ СЕТИ'}
      ];




    this.deps = [
      { label: 'Отдел', value: 'Отдел' },      
      { label: 'Отдел учета и отчетности', value: 'Отдел учета и отчетности' },
      { label: 'Финансово - экономический отдел', value: 'Финансово - экономический отдел' },
      { label: 'Отдел казначейства', value: 'Отдел казначейства' },
      { label: 'Планово-экономический отдел', value: 'Планово-экономический отдел' },
      { label: 'Юридический отдел', value: 'Юридический отдел' },
      { label: 'Отдел кадров', value: 'Отдел кадров' },
      { label: 'Отдел учета торговых операций', value: 'Отдел учета торговых операций' },
      { label: 'Отдел ВЭД', value: 'Отдел ВЭД' },
      { label: 'Отдел маркетинга', value: 'Отдел маркетинга' },
      { label: 'Отдел методологии и контроля', value: 'Отдел методологии и контроля' },
      { label: 'Отдел ПО и СО', value: 'Отдел ПО и СО' },
      { label: 'Отдел по охране труда', value: 'Отдел по охране труда' },
      { label: 'Отдел по работе с персоналом', value: 'Отдел по работе с персоналом' },
      { label: 'Отдел Развития', value: 'Отдел Развития' },
      { label: 'Отдел рекламы', value: 'Отдел рекламы' },
      { label: 'Отдел системного администрирования', value: 'Отдел системного администрирования' },
      { label: 'Бухгалтерия', value: 'Бухгалтерия' },
      { label: 'Склад', value: 'Склад' },
      { label: 'Интернет магазин', value: 'Интернет магазин' },
      { label: 'Управления проектами', value: 'Управления проектами' },
      { label: 'Коммерческий отдел', value: 'Коммерческий отдел' },
      { label: 'Таможенно-брокерский отдел', value: 'Таможенно-брокерский отдел' },
      { label: 'Упаковочный отдел', value: 'Упаковочный отдел' },
      { label: 'Служба технической поддержки', value: 'Служба технической поддержки' },
      { label: 'Торговый отдел', value: 'Торговый отдел' },
      { label: 'Курьерская служба', value: 'Курьерская служба' },
      { label: 'ФЭО', value: 'ФЭО' },
      { label: 'ГрандРитейл', value: 'ГрандРитейл' },
      { label: 'Административно отдел', value: 'Административно отдел' },
      { label: 'ЛинзЭкспресс', value: 'ЛинзЭкспресс' },
      { label: 'АХО', value: 'АХО' },
      { label: 'Закупки', value: 'Закупки' },
      { label: 'Административный отдел', value: 'Административный отдел' },
      { label: 'КиРС', value: 'КиРС' },
      { label: 'Служба Глав Врача', value: 'Служба Глав Врача' },
      { label: 'Отдел разработки', value: 'Отдел разработки' }
  ];

  function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

  this.deps.sort(dynamicSort("label"));
  
  
  this.colors = [
      { label: 'White', value: 'White' },
      { label: 'Black', value: 'Black' }
  ];
  
  this.cols = [
    { field: 'displayName', header: 'displayName' },
    { field: 'jobTitle', header: 'Title' },    
    { field: 'mail', header: 'Email' },
    { field: 'telephoneNumber', header: 'Phone' }      
  ];

    this.GetAdalToken();

    //  this.GetEmployees();
    //  this.GetGroups();

    this.GetUsers();

  }
  onBackClick(){
    this.depclass == 'dep hidden' ?  this.depclass = 'dep active' : this.depclass = 'dep hidden';
    console.log(this.depclass);
  }    
  
  onCDClick(num){
    //console.log(e);
    document.getElementById('selected_top_deps').hidden = false;
    document.getElementById('dtt').hidden = false;
    this.selected_top_deps= JSON.parse(localStorage.getItem('top_deps') ).top_deps[num].value;


    this.filter = "$filter=accountEnabled eq true and startswith(department, '" + this.selected_top_deps[0].value + "')";
    this.full_url = '' + this.url + this.call + this.api_version + '&' + this.select + '&' + this.filter + '&' + this.top;
    console.log(this.full_url);
    this.employeeService.getJson(this.full_url)
      .subscribe(users => 
                          {
                          console.log('--------------start-users1-----------');                          
                          this.users = users;
                          this.users1 = this.users.d.results;  
                          console.log(this.users1);
                          },
                  error=> {
                          this.messageService.add({severity: 'error', summary: 'MS Grath connection failed', detail: 'status: '+ error.status});                            
                          }
        );
  }

  onDeparChanged(): void {  
    //this.filter = "$filter=accountEnabled eq true";  
    this.filter = "$filter=accountEnabled eq true and startswith(department, '" + this.selectedTopDepar + "')";
    this.full_url = '' + this.url + this.call + this.api_version + '&' + this.select + '&' + this.filter + '&' + this.top;
    console.log(this.full_url);
    this.employeeService.getJson(this.full_url)
      .subscribe(users => 
                          {
                          console.log('--------------start-users1-----------');                          
                          this.users = users;
                          this.users1 = this.users.d.results;  
                          console.log(this.users1);
                          },
                  error=> {
                          this.messageService.add({severity: 'error', summary: 'MS Grath connection failed', detail: 'status: '+ error.status});                            
                          }
        );
  }
  GetAdalToken(): void {
    this.employeeService.getAdalToken();
    console.log('adalToken - '+localStorage.getItem('adalToken'));
    this.employeeService.getJsonFile();
    console.log('top_deps - '+localStorage.getItem('top_deps'));
  }
  GetUsers(): void {
    this.employeeService.getJson(this.full_url)
      .subscribe(users => 
                          {
                          console.log('--------------start-users1-----------');                          
                          this.users = users;
                          this.users1 = this.users.d.results;  
                          console.log(this.users1);
                          },
                  error=> {
                          this.messageService.add({severity: 'error', summary: 'MS Grath connection failed', detail: 'status: '+ error.status});                            
                          }
    );
  }
  GetGroups(): void {
    this.employeeService.getJson('https://graph.windows.net/interoko.onmicrosoft.com/groups?api-version=1.6')   // /users?$select=displayName,givenName,postalCode
      .subscribe(groups => 
                          { 
                          console.log('--------------start-groups-----------');
                          console.log(groups);
                          this.groups = groups;
                          }
    );
  }
  GetEmployees(): void {
    this.employeeService.getEmployees()
    .subscribe(employees => {
        console.log(employees);
        this.employees = employees});
    }
}




// -----------------origin

// ngOnInit() {
//   this.GetEmployees();
// }
// GetEmployees(): void {
//   this.employeeService.getEmployees()
//   .subscribe(employees => this.employees = employees);
// }
