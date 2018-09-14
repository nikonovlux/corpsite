import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee';

import { EmployeeService } from '../employee.service';

import {SelectItem} from 'primeng/api';

import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  providers: [MessageService],
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  
  cols: any[];
  colors: SelectItem[];
  deps: SelectItem[];

  mailto: string = 'mailto:';
  tel: string = 'tel:';

  employees: Employee[];
  groups: {};
  users:{} = {d:{results:[]}};

  constructor(private employeeService: EmployeeService,
              private messageService: MessageService) { }

  ngOnInit() {

    this.deps = [
      { label: 'All Deps', value: null },
      { label: 'IT', value: 'IT' },
      { label: 'HR', value: 'HR' }
  ];
  
  this.colors = [
      { label: 'White', value: 'White' },
      { label: 'Black', value: 'Black' }
  ];
  
  this.cols = [
    { field: 'id', header: 'Id' },
    { field: 'name', header: 'Name' },
    { field: 'job', header: 'Title' },
    { field: 'dep', header: 'Department' },
    { field: 'tel_outer', header: 'Phone' },
    { field: 'email', header: 'Email' }    
];

// id: number;
// tel_inner: string;
// job: string;
// name: string;
// tel_outer: string;
// email: string;
// dep:string;
// color: string;


    this.GetEmployees();
    //  this.GetGroups();
    this.GetUsers();
  }
  GetUsers(): void {
    this.employeeService.getJson('https://graph.windows.net/interoko.onmicrosoft.com/users?api-version=1.6')   // /users?$select=displayName,givenName,postalCode
      .subscribe(users => 
                          { 
                          console.log('--------------start-users-----------');
                          console.log(users);                          
                          this.users = users;  
                                                 
                          },
            error=> {
                          this.messageService.add({severity: 'error', summary: 'AAD connection failed', detail: 'status: '+ error.status});   
                            
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
    .subscribe(employees => this.employees = employees);
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
