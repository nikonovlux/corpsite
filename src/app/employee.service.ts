import { Injectable } from '@angular/core';
 
import { Observable, of } from 'rxjs';
 
import { Employee } from './employee';
import { EMPLOYEES } from './lst-employees';
import { MessageService } from './message.service';


import { HttpClient, HttpHeaders } from '@angular/common/http';



const access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyIsImtpZCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLndpbmRvd3MubmV0IiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNDM1YTRmMDItZjZiMi00MjQ4LTlhNWMtMGYzNTUxNzljMGRmLyIsImlhdCI6MTUzNjI0NDQxOSwibmJmIjoxNTM2MjQ0NDE5LCJleHAiOjE1MzYyNDgzMTksImFjciI6IjEiLCJhaW8iOiI0MkJnWVBpOVJiL3c0cHZzYnFuK2hOZzV4N1dLSkpyMk5XZVpCdlBmckl2UlAzSEc4QVFBIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjkzN2E0N2U4LWI2YWQtNDIyNi04ZDI4LTQ5NDBkOTY2MmFjOSIsImFwcGlkYWNyIjoiMSIsImZhbWlseV9uYW1lIjoi0JzQuNGF0LDQuNC7INCQ0L3QtNGA0LXQtdCy0LjRhyIsImdpdmVuX25hbWUiOiLQndC40LrQvtC90L7QsiIsImlwYWRkciI6IjE5My4xNTAuODguMSIsIm5hbWUiOiLQndC40LrQvtC90L7QsiDQnNC40YXQsNC40Lsg0JDQvdC00YDQtdC10LLQuNGHIiwib2lkIjoiMjE0MDdiM2MtZjIzNi00OWU3LTk1NjktNDRmYTQ5MWE4Y2NiIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTQyOTA5ODAwMi0yMTI2OTg5NDM1LTQwNDU0ODgwMDEtNDc5MCIsInB1aWQiOiIxMDAzMDAwMEFDNzMwMEQzIiwic2NwIjoiZW1haWwgR3JvdXAuUmVhZC5BbGwgb3BlbmlkIHByb2ZpbGUgVGFza3MuUmVhZCBVc2VyLlJlYWQgVXNlci5SZWFkQmFzaWMuQWxsIiwic3ViIjoicEVqMjIwdWlNa0s0UjlieEI3ejRKdWtxNzQwU0pDUFhMQWtfdGJmT2g4USIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJFVSIsInRpZCI6IjQzNWE0ZjAyLWY2YjItNDI0OC05YTVjLTBmMzU1MTc5YzBkZiIsInVuaXF1ZV9uYW1lIjoibmlrb25vdi5tQGx1eG9wdGljYS5jb20udWEiLCJ1cG4iOiJuaWtvbm92Lm1AbHV4b3B0aWNhLmNvbS51YSIsInV0aSI6InRUNTN0dGt1RUV1VUE4T1NRMWtHQUEiLCJ2ZXIiOiIxLjAifQ.nxCrIGXlSICoLc1yahIFyhotv-ZddeY1O-oBDMuPHWQWSgEhFGghgaSmSR6w2hQ9tyb8jiqnjW2R9DfD-13cKOTGnaFwHmpemJuOaxNz8UsIMYsrw1nRS17tZC-mU_5J6KfYSxqU2TDgBfLweeRDtdlagLwhUhqNtBetZvIEzaTnDRHWDPLfdNHdFT6UjCYKny0dj-fNjoQZJUmGGt9KT6cA9Oovb6FV3-o2bPppsi6qS_b6MOVL3u6D3jritur2U5F8guDZkCGqwyhfEQeyP3N13rxec2109jmjPFWxJO8aFG2KhZiSZ1BRbhVqujgYQ51KQwSgcOg-6wKYmZQgog';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept':'application/json;odata=verbose',
    'Content-Type':'application/json:odata=verbose',
    //'Access-Control-Allow-Origin':'https://192.168.220.146:4200',
    //'adal.access.token.keyhttps://graph.windows.net':'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyIsImtpZCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLndpbmRvd3MubmV0IiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNDM1YTRmMDItZjZiMi00MjQ4LTlhNWMtMGYzNTUxNzljMGRmLyIsImlhdCI6MTUzNjIyNjA5OSwibmJmIjoxNTM2MjI2MDk5LCJleHAiOjE1MzYyMjk5OTksImFjciI6IjEiLCJhaW8iOiJBU1FBMi84SUFBQUF3anNJWXM2LzBSbVFhZnJoSC9rZzhNNW5VUjdwT0xKclM4dGRHZlNzRlZFPSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiJkM2NlNGNmOC02ODEwLTQ0MmQtYjQyZS0zNzVlMTQ3MTAwOTUiLCJhcHBpZGFjciI6IjAiLCJlX2V4cCI6MjYyODAwLCJmYW1pbHlfbmFtZSI6ItCc0LjRhdCw0LjQuyDQkNC90LTRgNC10LXQstC40YciLCJnaXZlbl9uYW1lIjoi0J3QuNC60L7QvdC-0LIiLCJpcGFkZHIiOiIxOTMuMTUwLjg4LjEiLCJuYW1lIjoi0J3QuNC60L7QvdC-0LIg0JzQuNGF0LDQuNC7INCQ0L3QtNGA0LXQtdCy0LjRhyIsIm9pZCI6IjIxNDA3YjNjLWYyMzYtNDllNy05NTY5LTQ0ZmE0OTFhOGNjYiIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS00MjkwOTgwMDItMjEyNjk4OTQzNS00MDQ1NDg4MDAxLTQ3OTAiLCJwdWlkIjoiMTAwMzAwMDBBQzczMDBEMyIsInNjcCI6IkRpcmVjdG9yeS5BY2Nlc3NBc1VzZXIuQWxsIFVzZXIuUmVhZCIsInN1YiI6InBFajIyMHVpTWtLNFI5YnhCN3o0SnVrcTc0MFNKQ1BYTEFrX3RiZk9oOFEiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiRVUiLCJ0aWQiOiI0MzVhNGYwMi1mNmIyLTQyNDgtOWE1Yy0wZjM1NTE3OWMwZGYiLCJ1bmlxdWVfbmFtZSI6Im5pa29ub3YubUBsdXhvcHRpY2EuY29tLnVhIiwidXBuIjoibmlrb25vdi5tQGx1eG9wdGljYS5jb20udWEiLCJ1dGkiOiJXU3VtWGl5RldrT3RsLXVnTUNJQkFBIiwidmVyIjoiMS4wIn0.XeIQOdESyezriTve5WA4_rifkVTfUkbTMz0suNJAyFBK-d_hlsFI4QwHnhSkMf7Ur-LO7PHCN3lp4Hx7p5WeH3wvXvEsWj0f7vo8WENJNbMYwN0tOGECNlspxRMMkVWtM0i8lDJarrsVAenje1G-A_LlmB8WWTtIH5RPiHpDrJGrDRnkUPY6zQuW0w8R-X2CIM2Fhh9PAzA8IQe760ONYAAKIESZ_840S91IYnZ8BV6Pcrr7pM1j6CZzTObLjChKFa0IlWkBeudwfs91Jf5e33WSRjBTNuU5U3kLZWgz3dFKS99q75vJMEIpzmOfZOHsxBFrggSD5mp-V44S6FhX1w',
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






 

 
