import { Injectable } from '@angular/core';
 
import { Observable, of } from 'rxjs';
 
import { Employee } from './employee';
import { EMPLOYEES } from './lst-employees';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

import {token_graph_ms, globals, token_adal} from './environments/environment.prod';

const httpOptions_env = {
  headers: new HttpHeaders({
    //'Accept':'application/json;odata=context',
    'Authorization':'Bearer ' + token_graph_ms.access_token      
  })};


@Injectable({ providedIn: 'root' })
export class EmployeeService {
 
  constructor(private messageService: MessageService,
              private adalSvc: MsAdalAngular6Service,
              private http: HttpClient) { }

  getTopDepsData(){
                this.http.get('./assets/json/top_deps.json').subscribe(
                                                                        data => {
                                                                          //  console.log(data);
                                                                          localStorage.setItem('top_deps', JSON.stringify(data));
                                                                          //                            this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.        
                                                                        });                  
              }

  getAdalToken(){
                this.adalSvc.acquireToken('<RESOURCE>').subscribe(
                                                                    (resToken: string) => {
                                                                                            //localStorage.setItem('adalToken', resToken); 
                                                                                            console.log('adalToken------------------------------');
                                                                                            console.log(resToken);
                                                                                          });
                }

  getJson(userUrl, method='get', body='', httpOptions=httpOptions_env ) {

                            // if ((localStorage.getItem('code2'))) {
                            //                                       httpOptions = {
                            //                                                       headers: new HttpHeaders({
                            //                                                         'Accept':'application/json;odata=verbose',
                            //                                                         'Authorization':'Bearer ' + JSON.parse(localStorage.getItem('code2')).access_token
                            //                                                       })}
                            //                                         };
                                                                    
                            let answer;

                            if(method == 'post'){                                            
                                                answer = this.http.post(userUrl, body, httpOptions );
                                          }else if(method == 'get'){
                                                answer = this.http.get(userUrl, httpOptions );
                                          }
                return answer;
              }
 
  getEmployees(): Observable<Employee[]> {
    // TODO: send the message _after_ fetching the employees
    this.messageService.add('EmployeeService: fetched employees');
    return of(EMPLOYEES);
  }
 
  getEmployee(id: number): Observable<Employee> {
    // TODO: send the message _after_ fetching the employee
    this.messageService.add(`EmployeeService: fetched employee id=${id}`);
    return of(EMPLOYEES.find(employee => employee.id === id));
  }

}



//'Content-Type':'application/json:odata=verbose',
//'Access-Control-Allow-Origin':'https://192.168.220.146:4200',
//'adal.access.token.keyhttps://graph.windows.net':'eyJ0eXAiOiJKV1Qi',


// ------------------original ---------------------
// import { Injectable } from '@angular/core';
 
// import { Observable, of } from 'rxjs';
 
// import { Employee } from './employee';
// import { EMPLOYEES } from './lst-employees';
// import { MessageService } from './message.service';


// @Injectable({ providedIn: 'root' })
// export class EmployeeService {
 
//   constructor(private messageService: MessageService) { }
 
//   getEmployees(): Observable<Employee[]> {
//     // TODO: send the message _after_ fetching the employees
//     this.messageService.add('EmployeeService: fetched employees');
//     return of(EMPLOYEES);
//   }
 
//   getEmployee(id: number): Observable<Employee> {
//     // TODO: send the message _after_ fetching the employee
//     this.messageService.add(`EmployeeService: fetched employee id=${id}`);
//     return of(EMPLOYEES.find(employee => employee.id === id));
//   }
// }

//const token = '1eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6';





