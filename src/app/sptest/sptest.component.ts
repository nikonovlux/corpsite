import { Component, OnInit, Input } from '@angular/core';
 import { Router, ActivatedRoute } from '@angular/router';
  
 import { IEmployee } from './app.interfaces';
 import { IEmployeeEntity } from './app.entities'; 
 
 

 @Component({
     templateUrl: './sptest.component.html',
 
 })
 export class SptestComponent implements IEmployee {
     private Id: string;
     @Input()
     Employee: IEmployeeEntity = null;
     pageTile = "Edit / Delete Employee";
     pageMode = "edit";
     loading: string = 'init';
 
     constructor(  
        //  private AppSettings: AppSettings,        
         private activeRoute: ActivatedRoute,
         private router: Router
     ) { }
 
     
    saveChanges(){
        
    }
     ngOnInit() {
     }
 

 }
