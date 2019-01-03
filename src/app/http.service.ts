import {Injectable} from '@angular/core';
 
import {Observable} from 'rxjs';
 
import {MessageService} from './message.service';

import {HttpClient,HttpHeaders} from '@angular/common/http';

import {MsAdalAngular6Service} from 'microsoft-adal-angular6';

import {adal_config} from 'src/environments/environment.prod';
import { ResponseType } from '@angular/http';



@Injectable({ providedIn: 'root' })
export class HttpService {
 
  constructor(
              private messageService: MessageService,
              private adalSvc: MsAdalAngular6Service,
              private http: HttpClient
              ) { }

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

  connectUrl = (userUrl:string) => {
                                    return (method:string) => {                                                          
                                                                return (body = {}) => {
                                                                                          if(method =='get'){
                                                                                            return this.getHttp(userUrl)
                                                                                          }else if(method =='post'){
                                                                                            return this.postHttp(userUrl,body)
                                                                                          }
                                                                                        }                                                                
                                  }}
  //  : Observable<Blob>


  getBlobThumbnail(userUrl:string): Observable<Blob> {  
                                                        const headers = new HttpHeaders({
                                                                                'Authorization':'Bearer ' + JSON.parse(localStorage.getItem('code_ms')).access_token,
                                                                                'Content-Type': 'application/json',
                                                                                'Accept': 'application/json'
                                                                              });
                                                        return this.http.get<Blob>(userUrl,
                                                                                  {headers: headers, responseType: 'blob' as 'json' });
                                                      }


  getBlob =  (userUrl:string) => {
                                  if(localStorage.getItem('code_ms') ){                       
                                    return this.getHttp(userUrl)
                                }
                              }

  getHttp(userUrl:string) {      
                            if(localStorage.getItem('code_ms') ){    
                                let httpOptions = {
                                                headers: new HttpHeaders({                                                                                                                        
                                                                          'Authorization':'Bearer ' + JSON.parse(localStorage.getItem('code_ms')).access_token
                                                                        })}                                  
                              return this.http.get(userUrl, httpOptions );
                            }else{
                              console.log('error')
                            }
                          }

  postHttp(userUrl:string,body:{}){
                                    if(localStorage.getItem('code_ms') ){                            
                                      let httpOptions = {
                                                      headers: new HttpHeaders({                                                                                                             
                                                                                'Authorization':'Bearer ' + JSON.parse(localStorage.getItem('code_ms')).access_token
                                                                              })}
                                      return this.http.post(userUrl, body, httpOptions );
                                    }else{
                                      console.log('error')
                                    }
                                  }                    

  getJsonSPO(userUrl) {
                                    let code;
                                    localStorage.getItem('code_spo') ? code = JSON.parse(localStorage.getItem('code_spo'))  : code = ''
                                    let  httpOptions = {
                                                        headers: new HttpHeaders({
                                                                'Accept':'application/json;odata=verbose',
                                                                'Content-Type':'application/json:odata=verbose',    
                                                                'Authorization':'Bearer ' + code.access_token  
                                                              })
                                                        }
                                    return this.http.get( userUrl, httpOptions )
                                  }
  
  getJsonCurry = (method) => { 
                              return (httpOptions) => { 
                                                        if(method == 'Get'){
                                                                            return (url) => { 
                                                                                              return this.http.get(url, httpOptions) 
                                                                                              }}
                                                                                          // else if(method =='Post'){
                                                                                          //   return (url,body) => { 
                                                                                          //     return this.http.post(url, body, httpOptions) 
                                                                                          //   }
                                                                                          // }
                                                                                        }
                                }


// curryGetMs  = this.getJsonCurry('Get')({
//                                         headers: new HttpHeaders(localStorage.getItem('code_ms')?{
//                                                                   'Authorization':'Bearer ' + JSON.parse(localStorage.getItem('code_ms')).access_token
//                                                                 }:{}),
//                                         responseType: 'json'
//                                       })

  httpOptions_env = {
                      headers: new HttpHeaders({
                                                'Content-Type': 'application/x-www-form-urlencoded'                     
                                              })
                    }         

  getJson(userUrl, token='ms', method='get', body:any='', httpOptions=this.httpOptions_env  ) {
                          if(method == 'post' && token === 'ms'){    
                            if(localStorage.getItem('code_ms') ){                            
                              httpOptions = {
                                headers: new HttpHeaders({                                
                                  'Authorization':'Bearer ' + JSON.parse(localStorage.getItem('code_ms')).access_token
                                })} 
                              }
                              return this.http.post(userUrl, body, httpOptions );

                    }else if(method == 'get' && token === 'ms'){
                            if(localStorage.getItem('code_ms') ){    
                                      httpOptions = {
                                        headers: new HttpHeaders({                                                
                                          //'Authorization':'Bearer ' + JSON.parse(localStorage.getItem('code_ms')).access_token
                                          'Authorization':'Bearer ' + JSON.parse(localStorage.getItem('code_ms')).access_token
                                        })}                                  
                              }
                              return this.http.get(userUrl, httpOptions );
                          }}
public httpRequestPhoto(userUrl:string):string{
                                              let result:string
                                                                                           
                                                                        
                                              let httpOptions = {
                                                  headers: new HttpHeaders({                                
                                                    'Authorization':'Bearer ' + JSON.parse(localStorage.getItem('code_ms')).access_token                                                     
                                                  })} 
                                                                                             

                                              return result
                                            }



public httpRequestPhoto_or2 = (email:string) => {try {
                                                  let request = new XMLHttpRequest
                                                  let result:string
                                                  request.open("GET", "https://graph.microsoft.com/beta/users/" + email + "/Photos/48X48/$value");
                                                  if(localStorage.getItem('code_ms')){          
                                                    request.setRequestHeader("Authorization", "Bearer " + JSON.parse(localStorage.getItem('code_ms')).access_token);
                                                  }else{            
                                                    console.log('NO Bearer !!!')           
                                                  }
                                                  request.responseType = "blob";
                                                  request.onload =  function () {
                                                      if (request.readyState === 4 && request.status === 200) {
                                                          var url = window.URL;
                                                          var blobUrl:string = url.createObjectURL(request.response);
                                                          result = blobUrl;
                                                                                                
                                                      }
                                                  };

                                                  request.send(null);

                                                  return result;
                                                                                              
                                                }catch(e){}} 

public httpRequestPhoto_original(email, elId='photo'){
          var request = new XMLHttpRequest;
          request.open("GET", "https://graph.microsoft.com/beta/users/" + email + "/Photos/120x120/$value");
          if(localStorage.getItem('code_ms')){          
            request.setRequestHeader("Authorization", "Bearer " + JSON.parse(localStorage.getItem('code_ms')).access_token);
          }else{            
              request.setRequestHeader("Authorization", "Bearer 123");            
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



}


//: Observable<Object>

//'Content-Type': 'application/x-www-form-urlencoded',  

//'Accept':'application/json;odata=context',
//'Authorization':'Bearer test123token' //+ token_graph_ms.access_token
//'Authorization':'Bearer ' + localStorage.getItem('adal.idtoken') ? localStorage.getItem('adal.idtoken') : ''  


// else if (localStorage.getItem('code_ag') && token === 'ag'){
//   try{
//     httpOptions = {
//       headers: new HttpHeaders({                                                
//         'Authorization':'Bearer ' + JSON.parse(localStorage.getItem('code_ag')).access_token
        
//       })}

//   }
//   catch{ console.log('ERROR IN http!!!!!!!-------------')} 

  
// }


// import { Employee } from './employee';
// import { EMPLOYEES } from './lst-employees';

  // getEmployees(): Observable<Employee[]> {
  //   // TODO: send the message _after_ fetching the employees
  //   this.messageService.add('HttpService: fetched employees');
  //   return of(EMPLOYEES);
  // }
 
  // getEmployee(id: number): Observable<Employee> {
  //   // TODO: send the message _after_ fetching the employee
  //   this.messageService.add(`HttpService: fetched employee id=${id}`);
  //   return of(EMPLOYEES.find(employee => employee.id === id));
  // }



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
// export class HttpService {
 
//   constructor(private messageService: MessageService) { }
 
//   getEmployees(): Observable<Employee[]> {
//     // TODO: send the message _after_ fetching the employees
//     this.messageService.add('HttpService: fetched employees');
//     return of(EMPLOYEES);
//   }
 
//   getEmployee(id: number): Observable<Employee> {
//     // TODO: send the message _after_ fetching the employee
//     this.messageService.add(`HttpService: fetched employee id=${id}`);
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
