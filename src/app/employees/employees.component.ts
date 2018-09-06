import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee';

import { EmployeeService } from '../employee.service';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  groups: {};
  users:{};

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.GetEmployees();
    this.GetGroups();
    this.GetUsers();
  }
  GetUsers(): void {
    this.employeeService.getJson('https://graph.windows.net/interoko.onmicrosoft.com/users?api-version=1.6')   // /users?$select=displayName,givenName,postalCode
    .subscribe(users => 
                          { 
                          console.log('--------------start-users-----------');
                          console.log(users);
                          this.users = users;                          
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
