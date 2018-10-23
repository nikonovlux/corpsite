import { Injectable } from '@angular/core';
 
import { Observable, of, Subscriber } from 'rxjs';
 
import { Employee } from './employee';
import { EMPLOYEES } from './lst-employees';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

import {adal_config} from 'src/environments/environment.prod';



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
                let res01 = adal_config.endpoints["https://interoko.sharepoint.com/_api/"];
                this.adalSvc.acquireToken(res01).subscribe(
                                                            (token: string) => {
                                                                                    //localStorage.setItem('adalToken', resToken); 
                                                                                    console.log('adalToken----'+ res01 +'---------');
                                                                                    console.log(token);
                                                                                  });
                let res02 = adal_config.endpoints.graphApiUri;
                this.adalSvc.acquireToken(res02).subscribe(
                                                            (token: string) => {
                                                                                    //localStorage.setItem('adalToken', resToken); 
                                                                                    console.log('adalToken----'+ res02 +'---------');
                                                                                    console.log(token);
                                                                                  });
                }

  getJsonSPO(userUrl) {
                        let code;
                        localStorage.getItem('code_spo') ? code = JSON.parse(localStorage.getItem('code_spo'))  : code='';
                        let  httpOptions = {
                                            headers: new HttpHeaders({
                                                    'Accept':'application/json;odata=verbose',
                                                    'Content-Type':'application/json:odata=verbose',    
                                                    'Authorization':'Bearer ' + code.access_token  
                                                  })
                                            };
                        return this.http.get( userUrl, httpOptions );
                      }

  httpOptions_env = {
                      headers: new HttpHeaders({
                                                'Content-Type': 'application/x-www-form-urlencoded'
                                                //'Accept':'application/json;odata=context',
                                                //'Authorization':'Bearer test123token' //+ token_graph_ms.access_token
                                                //  'Authorization':'Bearer ' + localStorage.getItem('adal.idtoken') ? localStorage.getItem('adal.idtoken') : ''                       
                                              })
                    };              


  getJson(userUrl, token='ag', method='get', body:any='', httpOptions=this.httpOptions_env  ) {
                                          
                        //let answer;
                          if(method == 'post'){    

                              return this.http.post(userUrl, body, httpOptions );

                          }else if(method == 'get'){

                              if(localStorage.getItem('code_ms') && token === 'ms'){    // localStorage.getItem('code_ms') &&
                                      httpOptions = {
                                        headers: new HttpHeaders({                                                
                                          //'Authorization':'Bearer ' + JSON.parse(localStorage.getItem('code_ms')).access_token
                                          'Authorization':'Bearer ' + JSON.parse(localStorage.getItem('code_ms')).access_token
                                        })}                                  
                              }else if (localStorage.getItem('code_ag') && token === 'ag'){
                                    try{
                                      httpOptions = {
                                        headers: new HttpHeaders({                                                
                                          'Authorization':'Bearer ' + JSON.parse(localStorage.getItem('code_ag')).access_token
                                          
                                        })}

                                    }
                                    catch{ console.log('ERROR IN http!!!!!!!-------------')} 

                                    
                              }
                              return this.http.get(userUrl, httpOptions );
                          }
          //return answer;


}


public httpRequestPhoto(email, elId='photo'){
          var request = new XMLHttpRequest;
          request.open("GET", "https://graph.microsoft.com/beta/users/" + email + "/Photos/48X48/$value");
          if(localStorage.getItem('code_ms')){
          //if(localStorage.getItem('adal.idtoken')){
            request.setRequestHeader("Authorization", "Bearer " + JSON.parse(localStorage.getItem('code_ms')).access_token);
            //request.setRequestHeader("Authorization", "Bearer " + localStorage.getItem('adal.idtoken'));
          }else{
            if(localStorage.getItem('adal.idtoken')){
              request.setRequestHeader("Authorization", "Bearer " + localStorage.getItem('adal.idtoken'));
            }
          }
          request.responseType = "blob";
          request.onload = function () {
              if (request.readyState === 4 && request.status === 200) {

                  var url = window.URL;
                  var blobUrl = url.createObjectURL(request.response);
                  document.getElementById(elId).setAttribute('src', blobUrl)

              }
          };
          request.send(null);
  }

  avatarUrl:string;

  public httpRequestPhotoBlob(email){

    var request = new XMLHttpRequest;
    request.open("GET", "https://graph.microsoft.com/beta/users/" + email + "/Photos/48X48/$value");
    request.setRequestHeader("Authorization", "Bearer " + JSON.parse(localStorage.getItem('code_ms')).access_token);
    request.responseType = "blob";
    request.onload = function () {
        if (request.readyState === 4 && request.status === 200) {
          var url = window.URL;
          var blobUrl =  url.createObjectURL(request.response);

            // var url = window.URL;
            // var blobUrl = url.createObjectURL(request.response);
            // document.getElementById(elId).setAttribute('src', blobUrl);
            //var imageElm = document.createElement("img");
            //imageElm.src = blobUrl;
            //document.getElementById('avatar_img')[0].appendChild(imageElm);
        } else {
          return 'ErrorString';
        }
    };
    
    request.send(null);

  }

  getAvatar(email:string): Observable<Blob> {
                    return this.http.get<Blob>( "https://graph.microsoft.com/beta/users/" + email + "/Photos/48X48/$value",
                                                { headers: new HttpHeaders({            
                                                                            'Authorization':'Bearer ' + JSON.parse(localStorage.getItem('code_ms')).access_token,
                                                                            'responseType': 'blob'      
                                                                            })
                                                }
                                              )
  }

  getAvatar_test1(email:string) {
    return this.http.get( "https://graph.microsoft.com/beta/users/" + email + "/Photos/48X48/$value",
                                { headers: new HttpHeaders({            
                                                            'Authorization':'Bearer ' + JSON.parse(localStorage.getItem('code_ms')).access_token,
                                                            'responseType': 'blob'      
                                                            })
                                }
                              )
  }

  getAvatar_test2(url: string): Observable<String> {
    return new Observable((observer) => {
        let objectUrl: string = null;

        this.http
            .get(url, {
                headers: this.getHeaders(),
                responseType: 'blob'
            })
            .subscribe(m => {
                objectUrl = URL.createObjectURL(m);
                observer.next(objectUrl);
            });

        return () => {
            if (objectUrl) {
                URL.revokeObjectURL(objectUrl);
                objectUrl = null;
            }
        };
    });
  }

  getHeaders(): HttpHeaders {
      let headers = new HttpHeaders();

      ////let token = this.authService.getCurrentToken();
      let token = { access_token: JSON.parse(localStorage.getItem('code_ms')).access_token }; // Get this from your auth service.
      if (token) {
          headers.set('Authorization', 'Bearer ' + token.access_token);
      }

      return headers;
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


          //var imageElm = document.createElement("img");
          //imageElm.src = blobUrl;
          //document.getElementById('avatar_img')[0].appendChild(imageElm);



          //: Observable<string>  
// public userPhoto() {
//   return this.http.get( "https://graph.microsoft.com/v1.0/" + "me/photo/$value", {
//                                             headers: new HttpHeaders({            
//                                               'Authorization':'Bearer ' + token_graph_ms.access_token,
//                                               'responseType': 'blob'      
//                                             })
//                                           }
//   );

// }
