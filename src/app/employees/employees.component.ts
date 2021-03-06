import {Component,OnInit} from '@angular/core';

import {Employee } from '../employee';

import {HttpService } from '../http.service';

import {SelectItem} from 'primeng/api';

import {MessageService} from 'primeng/api';

import {MenuItem} from 'primeng/api';





@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',  
  styleUrls: ['./employees.component.css'],
  providers: [MessageService]
})
export class EmployeesComponent implements OnInit {



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
  top_deps = [];

  selectedTopDepar:SelectItem;
  selectedDepar: SelectItem;

  mailto: string = 'mailto:';
  tel: string = 'tel:';
  
  employees: Employee[];
  groups: {};

  users:any;
  users1:any;

  selected_top_deps;

  depclass:string = 'dep';

  selecteddep: string;

  items1: MenuItem[];

  display: boolean = false;

  constructor(private HttpService: HttpService,
              private messageService: MessageService) { }

  ngOnInit() {

    if(localStorage.getItem("top_deps")){

      JSON.parse(localStorage.getItem('top_deps')).top_deps.forEach((element) => {
        this.top_deps.push({label: element.label, data: element.label});
      });

    }

    this.cols = [
      { field: 'displayName', header: 'Name' },
      { field: 'jobTitle', header: 'Title' },    
      { field: 'mail', header: 'Email' },
      { field: 'telephoneNumber', header: 'Phone' }      
    ];
    // context menu items
    this.items1 = [
      {
          label: 'File',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project',  command: event => {console.log(event)} },
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      }]
  
  // to remove
  this.colors = [
      { label: 'White', value: 'White' },
      { label: 'Black', value: 'Black' }
  ];

  //  this.GetEmployees();
  //  this.GetGroups();
  
  }
  
  // ?
  showDialog() {
      this.display = true;
  }
  onBackClick(){
    this.depclass == 'dep hidden' ?  this.depclass = 'dep active' : this.depclass = 'dep hidden';
    //  console.log(this.depclass);
  }  
  onCDClick(num){

    this.selected_top_deps = JSON.parse(localStorage.getItem('top_deps') ).top_deps[num].children;

    this.selecteddep = this.selected_top_deps[0].children; 

    this.filter = "$filter=accountEnabled eq true and startswith(department, '" + this.selected_top_deps[0].label + "')";
    this.full_url = '' + this.url + this.call + this.api_version + '&' + this.select + '&' + this.filter + '&' + this.top;
    console.log(this.full_url);
    this.HttpService.getJson(this.full_url)
      .subscribe(users => 
                          {
                          console.log('--------------start-users1-----------');                          
                          this.users = users;
                          this.users1 = this.users.value;  
                          console.log(this.users1);
                          },
                  error=> {
                          this.messageService.add({severity: 'error', summary: 'MS Grath connection failed', detail: 'status: '+ error.status});                            
                          });
  }
  onDepClick(indx): void {  
    //this.filter = "$filter=accountEnabled eq true";
    this.selecteddep = this.selected_top_deps[indx].children;  
    this.filter = "$filter=accountEnabled eq true and startswith(department, '" + this.selected_top_deps[indx].label + "')";
    this.full_url = '' + this.url + this.call + this.api_version + '&' + this.select + '&' + this.filter + '&' + this.top;
    console.log(this.full_url);
    this.HttpService.getJson(this.full_url)
      .subscribe(users => 
                          {
                          console.log('--------------start-users1-----------');                          
                          this.users = users;
                          this.users1 = this.users.value;  
                          console.log(this.users1);
                          },
                  error=> {
                          this.messageService.add({severity: 'error', summary: 'MS Grath connection failed', detail: 'status: '+ error.status});                            
                          });
  }
  onDeparChanged(): void {  
    //this.filter = "$filter=accountEnabled eq true";  
    this.filter = "$filter=accountEnabled eq true and startswith(department, '" + this.selectedTopDepar + "')";
    this.full_url = '' + this.url + this.call + this.api_version + '&' + this.select + '&' + this.filter + '&' + this.top;
    console.log(this.full_url);
    this.HttpService.getJson(this.full_url)
      .subscribe(users => 
                          {
                          console.log('--------------start-users1-----------');                          
                          this.users = users;
                          this.users1 = this.users.value;  
                          console.log(this.users1);
                          },
                  error=> {
                          this.messageService.add({severity: 'error', summary: 'MS Grath connection failed', detail: 'status: '+ error.status});                            
                          });
  }
  GetUsers(): void {
    this.HttpService.getJson(this.full_url)
      .subscribe(users => 
                          {
                          console.log('--------------start-users1-----------');                          
                          this.users = users;
                          this.users1 = this.users.value;  
                          console.log(this.users1);
                          },
                  error=> {
                          this.messageService.add({severity: 'error', summary: 'MS Grath connection failed', detail: 'status: '+ error.status});                            
                          });
  }

  // old
  GetGroups(): void {this.HttpService
                .getJson('https://graph.windows.net/interoko.onmicrosoft.com/groups?api-version=1.6')   // /users?$select=displayName,givenName,postalCode
                            .subscribe(groups => { 
                                                console.log(groups);
                                                this.groups = groups;
                                            });
  }

  // GetEmployees(): void {  this.HttpService
  //                 .getEmployees()
  //                           .subscribe(employees => {
  //                                             console.log(employees);
  //                                             this.employees = employees;
  //                                           });
  // }
  
}




