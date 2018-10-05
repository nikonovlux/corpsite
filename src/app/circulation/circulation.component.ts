import { Component, OnInit } from '@angular/core';
import {EmployeeService } from '../employee.service';

@Component({
  selector: 'app-circulation',
  templateUrl: './circulation.component.html',
  styleUrls: ['./circulation.component.css']
})
export class CirculationComponent implements OnInit {

  // old server2: string = "https://interoko.sharepoint.com/teams/hr/_api/lists/getbytitle('complains')/items/";
  
  server2: string = "https://graph.microsoft.com/v1.0/sites/interoko.sharepoint.com:/teams/hr:/lists/complains/items";

  constructor(
      private employeeService:  EmployeeService
    ) { }

  respo_area = 'response...';

  SendComplain() {

    console.log("clicked1");  

    this.employeeService.getJson(this.server2)   //  + '&api-version=1.6'
      .subscribe(
        response => {
          console.log("recieved--------------------------");
          console.log(response);
          this.respo_area = JSON.stringify(response);
        },
        error => {
          alert(JSON.stringify(error))
        }        
      );
    console.log("clicked2");   
  }

  ngOnInit() {
  }

}
