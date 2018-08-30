import {Injectable} from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import {Observable} from 'rxjs'



//'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyIsImtpZCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaW50ZXJva28uc2hhcmVwb2ludC5jb21ANDM1YTRmMDItZjZiMi00MjQ4LTlhNWMtMGYzNTUxNzljMGRmIiwiaXNzIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQDQzNWE0ZjAyLWY2YjItNDI0OC05YTVjLTBmMzU1MTc5YzBkZiIsImlhdCI6MTUzNTYyMDkxNiwibmJmIjoxNTM1NjIwOTE2LCJleHAiOjE1MzU2NTAwMTYsImFjdG9yIjoiYWFlZjQ4NjgtY2M0OS00NDUxLWI1MGItODYzYjhiNjZjZWZhQDQzNWE0ZjAyLWY2YjItNDI0OC05YTVjLTBmMzU1MTc5YzBkZiIsImlkZW50aXR5cHJvdmlkZXIiOiJ1cm46ZmVkZXJhdGlvbjptaWNyb3NvZnRvbmxpbmUiLCJuYW1laWQiOiIxMDAzMDAwMEFDNzMwMEQzIn0.K_RHAk6y2sWxzt57miVOY2GBdCS3hnmHj1YtwRxXhs1Frs5bnsJ5LURNWnBku1d7BV5qctj7zpajsja1d4KurylAaa4FgeqIe8jlERUzlqPmfDilVN1dYFuJC5GeHd417u6IazKLO8EPpywKN1PaAo1XL88oY1EzmgTZFQFM-prmXQVHeoG3BOpnSEHTg2QP-wXPNVdAMCjmtcl1iFXLuyyq-0A9J6CbPVdpkoBeoW7fqsk7NsD0fRQeIwwzaoZbmb9IHFA_FQ8iFqQ5PkRQQ3-wu9VbIPTVXmbufvEuyDHGZHXoRj8lB1U9K3sY_-0L9SLcHxGHSBPvYfl8KUjt0A'


@Injectable()
export class AppIntercept implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    //const access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyIsImtpZCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaW50ZXJva28uc2hhcmVwb2ludC5jb21ANDM1YTRmMDItZjZiMi00MjQ4LTlhNWMtMGYzNTUxNzljMGRmIiwiaXNzIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQDQzNWE0ZjAyLWY2YjItNDI0OC05YTVjLTBmMzU1MTc5YzBkZiIsImlhdCI6MTUzNTQ0OTgwOCwibmJmIjoxNTM1NDQ5ODA4LCJleHAiOjE1MzU0Nzg5MDgsImFjdG9yIjoiYWFlZjQ4NjgtY2M0OS00NDUxLWI1MGItODYzYjhiNjZjZWZhQDQzNWE0ZjAyLWY2YjItNDI0OC05YTVjLTBmMzU1MTc5YzBkZiIsImlkZW50aXR5cHJvdmlkZXIiOiJ1cm46ZmVkZXJhdGlvbjptaWNyb3NvZnRvbmxpbmUiLCJuYW1laWQiOiIxMDAzMDAwMEFDNzMwMEQzIn0.n3JZju_xUhuq5ISWaXcwMOITXi5NSCgpR-ChrxgBWhCtLjCFwXMn5B6mneX3Lvv43R9AvHbk71b455YMuRxctd3vnPYkHzu5RQNhxdWX-_calFaCxItjzGiJEggJmGtudZcTatTupD2kCt5tecC6xsYPfuQtqt2EmcxQ4cPD69oAaSlJrjua9x0c5cR4IYvL9Ig03D7mMHOWf3IEG_teMpEzBmgMpXAxFUvy1x4Yiute7otQf-svytxxQP_NNTGgxvG7iR3LXfR0jghVzT3moPrksxDRQ4pMfawoe0t2MW6_XrG4-CyLCTlEyuf8I3-siN9G6XW3l46bfxUGttlfrw'
    //const access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyIsImtpZCI6IjdfWnVmMXR2a3dMeFlhSFMzcTZsVWpVWUlHdyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaW50ZXJva28uc2hhcmVwb2ludC5jb21ANDM1YTRmMDItZjZiMi00MjQ4LTlhNWMtMGYzNTUxNzljMGRmIiwiaXNzIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQDQzNWE0ZjAyLWY2YjItNDI0OC05YTVjLTBmMzU1MTc5YzBkZiIsImlhdCI6MTUzNTYyMDkxNiwibmJmIjoxNTM1NjIwOTE2LCJleHAiOjE1MzU2NTAwMTYsImFjdG9yIjoiYWFlZjQ4NjgtY2M0OS00NDUxLWI1MGItODYzYjhiNjZjZWZhQDQzNWE0ZjAyLWY2YjItNDI0OC05YTVjLTBmMzU1MTc5YzBkZiIsImlkZW50aXR5cHJvdmlkZXIiOiJ1cm46ZmVkZXJhdGlvbjptaWNyb3NvZnRvbmxpbmUiLCJuYW1laWQiOiIxMDAzMDAwMEFDNzMwMEQzIn0.K_RHAk6y2sWxzt57miVOY2GBdCS3hnmHj1YtwRxXhs1Frs5bnsJ5LURNWnBku1d7BV5qctj7zpajsja1d4KurylAaa4FgeqIe8jlERUzlqPmfDilVN1dYFuJC5GeHd417u6IazKLO8EPpywKN1PaAo1XL88oY1EzmgTZFQFM-prmXQVHeoG3BOpnSEHTg2QP-wXPNVdAMCjmtcl1iFXLuyyq-0A9J6CbPVdpkoBeoW7fqsk7NsD0fRQeIwwzaoZbmb9IHFA_FQ8iFqQ5PkRQQ3-wu9VbIPTVXmbufvEuyDHGZHXoRj8lB1U9K3sY_-0L9SLcHxGHSBPvYfl8KUjt0A'

    
    const authReq = req.clone({
      setHeaders: {
        //'Content-Type': 'application/json:odata=verbose',
        //'User-Agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)',
        //'Authorization':'Bearer ' + access_token   
      },
      responseType: 'json'
    });          
    console.log('intercept detected');
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