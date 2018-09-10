import { Injectable } from '@angular/core';
 
import { Observable, of } from 'rxjs';
 
import { Employee } from './employee';
import { EMPLOYEES } from './lst-employees';
import { MessageService } from './message.service';


import { HttpClient, HttpHeaders } from '@angular/common/http';



const access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyIsImtpZCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLndpbmRvd3MubmV0IiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNDM1YTRmMDItZjZiMi00MjQ4LTlhNWMtMGYzNTUxNzljMGRmLyIsImlhdCI6MTUzNjU3OTc5OCwibmJmIjoxNTM2NTc5Nzk4LCJleHAiOjE1MzY1ODM2OTgsImFjciI6IjEiLCJhaW8iOiJBU1FBMi84SUFBQUExSDJuWW4rWXgxamdFWnVoVXFVRWNyK0dPbWVaVWNNR3VHSGJaUzhOejhVPSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiI5MzdhNDdlOC1iNmFkLTQyMjYtOGQyOC00OTQwZDk2NjJhYzkiLCJhcHBpZGFjciI6IjEiLCJmYW1pbHlfbmFtZSI6ItCc0LjRhdCw0LjQuyDQkNC90LTRgNC10LXQstC40YciLCJnaXZlbl9uYW1lIjoi0J3QuNC60L7QvdC-0LIiLCJpcGFkZHIiOiIxOTMuMTUwLjg4LjEiLCJuYW1lIjoi0J3QuNC60L7QvdC-0LIg0JzQuNGF0LDQuNC7INCQ0L3QtNGA0LXQtdCy0LjRhyIsIm9pZCI6IjIxNDA3YjNjLWYyMzYtNDllNy05NTY5LTQ0ZmE0OTFhOGNjYiIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS00MjkwOTgwMDItMjEyNjk4OTQzNS00MDQ1NDg4MDAxLTQ3OTAiLCJwdWlkIjoiMTAwMzAwMDBBQzczMDBEMyIsInNjcCI6ImVtYWlsIEdyb3VwLlJlYWQuQWxsIG9wZW5pZCBwcm9maWxlIFRhc2tzLlJlYWQgVXNlci5SZWFkIFVzZXIuUmVhZEJhc2ljLkFsbCIsInN1YiI6InBFajIyMHVpTWtLNFI5YnhCN3o0SnVrcTc0MFNKQ1BYTEFrX3RiZk9oOFEiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiRVUiLCJ0aWQiOiI0MzVhNGYwMi1mNmIyLTQyNDgtOWE1Yy0wZjM1NTE3OWMwZGYiLCJ1bmlxdWVfbmFtZSI6Im5pa29ub3YubUBsdXhvcHRpY2EuY29tLnVhIiwidXBuIjoibmlrb25vdi5tQGx1eG9wdGljYS5jb20udWEiLCJ1dGkiOiJ1OUlvWl9qTDRVaUdkR0YxcnpJVkFBIiwidmVyIjoiMS4wIn0.ubYFFBmn0ZZuSasAqVQbyiY3KiVhDxENGRQLaykpnjSZhbIoS28IgQEIUgbkeQla8P1Vhia8CaOZFb8aHD9CxF8FUWcyJSscEdPbygk8qRO1iurjAkiCvLPQ_n3NgLatH9L_cdfcJ6j7-kCNmC_-zAWPM7NigaAqgfpYSG2OsbaUdnQGZfl-PgFpBDDm2gZvyme189BXsBecIb4z3nTKRiwpgEK4tbIFpbRpmR5xYdpdnz7DDMggX70IwMW69ydX6ALJORu3AL16YFWosT5_b9tjlCMjajfxAF_8i_1AsYYN5WhlukXT2CgbjFVjVSwZUD7-dUxGxvTAMkvj5s_DpQ';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept':'application/json;odata=verbose',
    'Authorization':'Bearer ' + access_token  
   })
};



@Injectable({ providedIn: 'root' })
export class EmployeeService {
 
  constructor(private messageService: MessageService,
              private http: HttpClient) { }

  getJson(userUrl) {
                return this.http.get(userUrl, httpOptions );
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
    //'adal.access.token.keyhttps://graph.windows.net':'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyIsImtpZCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLndpbmRvd3MubmV0IiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNDM1YTRmMDItZjZiMi00MjQ4LTlhNWMtMGYzNTUxNzljMGRmLyIsImlhdCI6MTUzNjIyNjA5OSwibmJmIjoxNTM2MjI2MDk5LCJleHAiOjE1MzYyMjk5OTksImFjciI6IjEiLCJhaW8iOiJBU1FBMi84SUFBQUF3anNJWXM2LzBSbVFhZnJoSC9rZzhNNW5VUjdwT0xKclM4dGRHZlNzRlZFPSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiJkM2NlNGNmOC02ODEwLTQ0MmQtYjQyZS0zNzVlMTQ3MTAwOTUiLCJhcHBpZGFjciI6IjAiLCJlX2V4cCI6MjYyODAwLCJmYW1pbHlfbmFtZSI6ItCc0LjRhdCw0LjQuyDQkNC90LTRgNC10LXQstC40YciLCJnaXZlbl9uYW1lIjoi0J3QuNC60L7QvdC-0LIiLCJpcGFkZHIiOiIxOTMuMTUwLjg4LjEiLCJuYW1lIjoi0J3QuNC60L7QvdC-0LIg0JzQuNGF0LDQuNC7INCQ0L3QtNGA0LXQtdCy0LjRhyIsIm9pZCI6IjIxNDA3YjNjLWYyMzYtNDllNy05NTY5LTQ0ZmE0OTFhOGNjYiIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS00MjkwOTgwMDItMjEyNjk4OTQzNS00MDQ1NDg4MDAxLTQ3OTAiLCJwdWlkIjoiMTAwMzAwMDBBQzczMDBEMyIsInNjcCI6IkRpcmVjdG9yeS5BY2Nlc3NBc1VzZXIuQWxsIFVzZXIuUmVhZCIsInN1YiI6InBFajIyMHVpTWtLNFI5YnhCN3o0SnVrcTc0MFNKQ1BYTEFrX3RiZk9oOFEiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiRVUiLCJ0aWQiOiI0MzVhNGYwMi1mNmIyLTQyNDgtOWE1Yy0wZjM1NTE3OWMwZGYiLCJ1bmlxdWVfbmFtZSI6Im5pa29ub3YubUBsdXhvcHRpY2EuY29tLnVhIiwidXBuIjoibmlrb25vdi5tQGx1eG9wdGljYS5jb20udWEiLCJ1dGkiOiJXU3VtWGl5RldrT3RsLXVnTUNJQkFBIiwidmVyIjoiMS4wIn0.XeIQOdESyezriTve5WA4_rifkVTfUkbTMz0suNJAyFBK-d_hlsFI4QwHnhSkMf7Ur-LO7PHCN3lp4Hx7p5WeH3wvXvEsWj0f7vo8WENJNbMYwN0tOGECNlspxRMMkVWtM0i8lDJarrsVAenje1G-A_LlmB8WWTtIH5RPiHpDrJGrDRnkUPY6zQuW0w8R-X2CIM2Fhh9PAzA8IQe760ONYAAKIESZ_840S91IYnZ8BV6Pcrr7pM1j6CZzTObLjChKFa0IlWkBeudwfs91Jf5e33WSRjBTNuU5U3kLZWgz3dFKS99q75vJMEIpzmOfZOHsxBFrggSD5mp-V44S6FhX1w',


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






 

 
