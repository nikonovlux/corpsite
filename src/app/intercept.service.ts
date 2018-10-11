import {Injectable} from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {token_graph_ms, url_graph_ms} from './environments/environment.prod'




@Injectable()
export class AppIntercept implements HttpInterceptor {  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    var headers

    //if (req.url == 'https://graph.microsoft.com/beta/users/savchenko.v@opticalhouse.com.ua/Photos/48X48/$value'){
      if (req.url == 'https://graph.microsoft.com/beta/users/polyakov.s@opticalhouse.com.ua/Photos/48X48/$value'){
      headers = new HttpHeaders({          
                                  'Authorization':'Bearer ' + token_graph_ms.access_token
                                })
    }

    let authReq = req.clone({

      headers

        });
    
    console.log('intercept detected - ' + req.url);
    return next.handle(authReq);
      
    
  }
}


// modifiedRequest.headers.append('Authorization', 'Basic 123');    // 'Content-Type':'application/json:odata=verbose'
// 'Cookie':'FedAuth=77u/PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48U1A+VjQsMGguZnxtZW1iZXJzaGlwfDEwMDMwMDAwYWM3MzAwZDNAbGl2ZS5jb20sMCMuZnxtZW1iZXJzaGlwfG5pa29ub3YubUBsdXhvcHRpY2EuY29tLnVhLDEzMTgwMDgyNjE4MDAwMDAwMCwxMzE3NjgwOTk2NTAwMDAwMDAsMTMxODAxNzE4MDYzNjY4NDIwLDAuMC4wLjAsMiw0MzVhNGYwMi1mNmIyLTQyNDgtOWE1Yy0wZjM1NTE3OWMwZGYsLFYyITEwMDMwMDAwQUM3MzAwRDMhMTMxODAwODI2MTgsNTdiYzg5OWUtMDBhNS02MDAwLTJlM2QtMTIzMzAyNTM0ZTY5LDU3YmM4OTllLTAwYTUtNjAwMC0yZTNkLTEyMzMwMjUzNGU2OSwsMCwxMzE4MDA4OTAwNjMyMDAwMTYsMTMxODAzNDQ2MDYzMjAwMDE2LG1RUFJtZmhsaEJqZHVmdVpDVXAzRW5vbXhxNFdSbllxck5BRWoyL0t4NXJrK0haeGlpbUh3VjJpV2JmcFRKQXBKY3V6NlRPb2VxUnFUb2NZc1RsOWZpZDZvUzRwUWtEVlhucjJJM0hHL3FkaXFBMW5lWEVLeGxiN2gwOVcrYjFhZkE5WlllZDhYZDRyMEZDYVJyTEM4eWNWakNPcEVkTzVDc3NJTzFOUDlTOWVHOGVzcjRBNi9WRm1FSyt0bEFLUGJKT29mNFkvQUxWSjJkMlc2MmpmS0E0RU5aOXFFemlqZEJySzVGZGZUVjNocHVqNEFlakdmbHBObHdoMDlUakhQQXdESUdzS3VtWWlKbTBIWDYwU1dXNWRXalRiVG1nU2dEOTJjc3U5YTNHUkdBK0dQYXlIY2x0SXhoNlNqWklIWE5QS0pWa3I4NFB3NUpFK2tVaC9QZz09PC9TUD4=; rtFa=62eufS7sNi/8kWmzFefNKQZ1aqbPWPFolz7HaG2vudcmNDM1QTRGMDItRjZCMi00MjQ4LTlBNUMtMEYzNTUxNzlDMERGAlkOc3CJnUyt16Wjxx50/on0aH4HZHE6KffjXYDiBPgPm9Bo/XWLk8DrZ7FGfsOgzV+VyS72XfBPXJPax9uHFydgbtfdqBQQeLbSrYTsT9xE5ZC3hhlIVoeL7VY7UmrFAE/7+g6usn5iSQxTOkBFUVZi08QtwZW08WklJ6EnjARtXJP70b8fRJ4D1mzPbVO/hBxjg3k9v90HMiFXva5eKhzZ7EVJmUt+OFwcDIy/iLuwnM5NzER/UsgLgIiOqCYZD25rMZpYjhs9nCgngbL9T986lixi0d5GmqF69aONlphBxKZPW46MVqN8aEE9n64s9Ssn+ztSkoKm2PTNYpygG0UAAAA='


// interface HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
// }



// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable'; // - old

// export class AuthInterceptor implements HttpInterceptor {

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<HttpEventType.Response>> {
//     const authReq = req.clone({
//       setHeaders: { Authorization: `Bearer authtest` }
//     });
//     return next.handle(authReq);
//   }

// }



// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// @NgModule({
//   imports: [],
//   providers: [
//     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
//   ]
// })
// export class AppModule {}


// providers: [
//   { provide: HTTP_INTERCEPTORS, useClass: First, multi: true },
//   { provide: HTTP_INTERCEPTORS, useClass: Second, multi: true }
// ]


// const req = new HttpRequest('POST', 'upload/file', file, {
//   requestProgress: true
// });
// this.http.request(req)
//   .subscribe(event => {
//     if (event.type === HttpEventType.UploadProgress) {
//       console.log(event.total, event.loaded);
//     }
//   });



    //  if (req.url == 'https://graph.microsoft.com/beta/users/nikonov.m@luxoptica.com.ua/Photos/48X48/$value'){
      //  'Accept':'application/json;odata=verbose',
      //  if (req.url == 'https://graph.windows.net/interoko.onmicrosoft.com/users'){
      //  if (req.url == 'https://graph.microsoft.com/v1.0/me/photo/$value'){
        // var headers = new HttpHeaders({          
        //   'Authorization':'Bearer ' + JSON.parse(localStorage.getItem('code_ag')).access_token
        // })
      //   console.log('graph intercepted')
      //  } else if (req.url == 'https://graph.microsoft.com/beta/users/nikonov.m@luxoptica.com.ua/Photos/48X48/$value'){
      //   var headers = new HttpHeaders({          
      //     'Authorization':'Bearer ' + token_graph_ms.access_token
      //   })
      //  } else {
      //   var headers = new HttpHeaders({          
      //     'Authorization':'Bearer ' + '125'
      //   })
      //  }


          //  headers     // 1 needed
          //  setHeaders: {
          //               //'Content-Type': 'application/json:odata=verbose',
          //               //'User-Agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)',
          //               'Authorization':'Bearer ' + token_graph_ms.access_token
          //             },
          // responseType: 'blob'