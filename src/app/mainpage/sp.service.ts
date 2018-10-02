import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

import { from } from 'rxjs';

import { sp, Web } from '@pnp/sp'

import { MsAdalAngular6Service } from 'microsoft-adal-angular6';




const enviroment = {
  production: false,
  web: 'https://interoko.sharepoint.com/sites/IT/'
  // web: 'https://interoko.sharepoint.com/sites/IT/'
};

let web1 = new Web (enviroment.web);

let str1 = 'MicrosoftApplicationsTelemetryDeviceId=95f053fe-9e9d-44e5-9562-d501591b4252;  MicrosoftApplicationsTelemetryFirstLaunchTime=2018-08-20T09:25:28.443Z;  rtFa=tYB/HVtmxqysWwptWpmYr1cyiHHeq7DaRb7M/WsicdEmNDM1QTRGMDItRjZCMi00MjQ4LTlBNUMtMEYzNTUxNzlDMERGeg0hxYKCo2Ww0C52rFQlo07RKrl8MAiEQxkYarqT08A5u8LWwsMLqP/JzoVwYi2LbI6diOVXaU0VfxcBOP/YyBIJpDfJ0NEa3t77Do0Y1SfteLQtxAsWB02sB8Pg/RwoCaJKikQ39dEbEjfhbumdSKvB8+4OmTCIhPSlzhe/2DZ7PFAVqULwaf6k1dtmWCK4J4NsePeJftmEJ6EDN/Ijmhq55BBwnVQHz1Fo6W99H1eS87u7HbP+PhyBUOHbam8g9Gk592mgrQmbGCbiVBhxktxcuxp/2XWl1EUDTKjG8hUBrqeYb7Yd/UcUOr/2HO0YVs5Xn/pIzg6wybDk3Jasw0UAAAA=;  FedAuth=77u/PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48U1A+VjQsMGguZnxtZW1iZXJzaGlwfDEwMDMwMDAwYWM3MzAwZDNAbGl2ZS5jb20sMCMuZnxtZW1iZXJzaGlwfG5pa29ub3YubUBsdXhvcHRpY2EuY29tLnVhLDEzMTc5NDc3MTA1MDAwMDAwMCwxMzE3NjgwOTk2NTAwMDAwMDAsMTMxNzk1ODM4ODUyMjk3MDkyLDAuMC4wLjAsMiw0MzVhNGYwMi1mNmIyLTQyNDgtOWE1Yy0wZjM1NTE3OWMwZGYsLFYyITEwMDMwMDAwQUM3MzAwRDMhMTMxNzk0NzcxMDUsYTg4Yjg3OWUtZjAzNS02MDAwLTQ3NmEtNWIxNDY5YjFiZmMxLGE4OGI4NzllLWYwMzUtNjAwMC00NzZhLTViMTQ2OWIxYmZjMSwsMCwxMzE3OTUwMTA4NTE4MjgzNTAsMTMxNzk3NTY2ODUxODI4MzUwLFBZdkhsdDhmMlN6QWRNSjFQVTRkQml2V2t6bnFRRFY5aDRkZDhCU2c2Y3IwR2F6MktYOURsNDBMUHFEUTVYa0NoREwxSUkzbEJYcGJoUmcyZm05VFFSSkNMUlNWcndCcFFKeUY3WnNiOGl5M0ZlUmJtWXVBOWJGcUdZTWxSZzMwU3NyanNtUnI1MG80ZnYySmxpeVNTNUswMENpaXlPTVA3NDFXQ0l1NUZCY2NWVm9IejVVcTBadmlKTWVndUFHZ0dZbXFoeW9iMDZsQXNOdU1wTEtuYVpKN1JJZEVyMHh6Sy9yeGZ3SHd6dEc4dXdiT3BlcS9ROEFHT2RtVUpYNFRwMUpjVGpqbG9velRoRzJsallnczl4dklad01oVnh3OUwxYmx3RGdFdUdjQUloUDFMUVovM0hxUlUwczFoaVppQUdWOVNpYVNMS3VlVnEya0EvRmRUQT09PC9TUD4=;  WSS_FullScreenMode=false;  odbn=1';

let str = 'MicrosoftApplicationsTelemetryDeviceId=e5210278-2abc-485f-9ce8-00f56f3f19ba; MicrosoftApplicationsTelemetryFirstLaunchTime=2018-08-23T12:43:25.900Z; WSS_FullScreenMode=false; rtFa=kRKlK8HNB1iBHBjTtlwZzFS1WbcoT2q+CKP+dbGRYO0mNDM1QTRGMDItRjZCMi00MjQ4LTlBNUMtMEYzNTUxNzlDMERGLXrw3w5X++IjO0gBHHyUp/14wrA7e04bfH2bhKultU7BarSi/NNgolzwC/4Z+DxUteNLR7MsdYNvJmq5ya9keUlhWs1H/bPs0/7HYLhz4tqRjeIBu/CN8y/NmKhzNrgTplFdjJ3KtPfySu3pP7WL7nZkPgU+JE8wbe+5y/M0s30Bza98umetw0HqcCamPGJzgiFNOXeUjuwJHmyuIbTBeTK12tJ7DRpzOw+TZTYFohU91D9kqnRj6Qd16fykELXXnId0JDrNl86VOqPZ4TGJSvxkRTggIIRS7wwqo4dNQi10pmDyARxkeMPNlVPmHR5rzGMJjls6Du1CfCaY8asHjUUAAAA=; FedAuth=77u/PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48U1A+VjQsMGguZnxtZW1iZXJzaGlwfDEwMDMwMDAwYWM3MzAwZDNAbGl2ZS5jb20sMCMuZnxtZW1iZXJzaGlwfG5pa29ub3YubUBsdXhvcHRpY2EuY29tLnVhLDEzMTc5ODIzMzkyMDAwMDAwMCwxMzE3NjgwOTk2NTAwMDAwMDAsMTMxNzk5MTM0MzI1ODM5MzU5LDAuMC4wLjAsMiw0MzVhNGYwMi1mNmIyLTQyNDgtOWE1Yy0wZjM1NTE3OWMwZGYsLFYyITEwMDMwMDAwQUM3MzAwRDMhMTMxNzk4MjMzOTIsNzdjMjg4OWUtYjBiNi02MDAwLTQ3NmEtNTBiYTNkZjcyNzc5LGYwYzU4ODllLWEwMWMtNjAwMC00NzZhLTViMmIyZWY1ODJjMSwsMCwxMzE3OTgzMDYzMjU4MzkzNTksMTMxODAwODYyMzI1ODM5MzU5LHJvV2d6Smh5R3NOUkgzalNvYldDQUxnOWxuQTFTU1k1QWd2eVFSdjlITDZQdk1nQnpJU09UYUlxcW0yc0hYMWs0RHJZaTBmTUxtcXFmNnEwSVd0U1Y4S0JUN2IzU1lVNk9TN1BEQlRxdG4reERFQXdZeTgweHdRVTlSS2Q1SnVRUzhSQmZBS3FCK09jSmxQbFFoMVpEUExhb3I1SFdSck9SUzJjU1F3NmlXdlJTeTlTcytQbTJPWEVkSmFRczR4NFVpNThJWnFJbC9RNWtIRWdrTTl0Z0J0QlROWTNsYjc4TjkwaWVSaFprdDJwQnRSR0VMRFZZcVh4Y1EwMDFXMm5rMkVmRzVsdjRkWURVVTFhK3QyTi9wOTZHczJkWFNUa245OTB0Tk04WGVqdVpnRk9uV0hPZGZwSW5idVZQeVlXR1FLcVVUem53SUNQNEo2T3VHS3JVUT09PC9TUD4=';

sp.setup({
        sp: {
            headers: {
                // 'Cache-Control': 'no-cache',
                // 'Pragma': 'no-cache',
                //'Authorization': 'Bearer ' + sessionStorage.getItem('adal.idtoken'),
                //'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Access-Control-Allow-Origin',
                //'FedAuth': '77u/PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48U1A+VjQsMGguZnxtZW1iZXJzaGlwfDEwMDMwMDAwYWM3MzAwZDNAbGl2ZS5jb20sMCMuZnxtZW1iZXJzaGlwfG5pa29ub3YubUBsdXhvcHRpY2EuY29tLnVhLDEzMTc5NDc3MTA1MDAwMDAwMCwxMzE3NjgwOTk2NTAwMDAwMDAsMTMxNzk1ODM4ODUyMjk3MDkyLDAuMC4wLjAsMiw0MzVhNGYwMi1mNmIyLTQyNDgtOWE1Yy0wZjM1NTE3OWMwZGYsLFYyITEwMDMwMDAwQUM3MzAwRDMhMTMxNzk0NzcxMDUsYTg4Yjg3OWUtZjAzNS02MDAwLTQ3NmEtNWIxNDY5YjFiZmMxLGE4OGI4NzllLWYwMzUtNjAwMC00NzZhLTViMTQ2OWIxYmZjMSwsMCwxMzE3OTUwMTA4NTE4MjgzNTAsMTMxNzk3NTY2ODUxODI4MzUwLFBZdkhsdDhmMlN6QWRNSjFQVTRkQml2V2t6bnFRRFY5aDRkZDhCU2c2Y3IwR2F6MktYOURsNDBMUHFEUTVYa0NoREwxSUkzbEJYcGJoUmcyZm05VFFSSkNMUlNWcndCcFFKeUY3WnNiOGl5M0ZlUmJtWXVBOWJGcUdZTWxSZzMwU3NyanNtUnI1MG80ZnYySmxpeVNTNUswMENpaXlPTVA3NDFXQ0l1NUZCY2NWVm9IejVVcTBadmlKTWVndUFHZ0dZbXFoeW9iMDZsQXNOdU1wTEtuYVpKN1JJZEVyMHh6Sy9yeGZ3SHd6dEc4dXdiT3BlcS9ROEFHT2RtVUpYNFRwMUpjVGpqbG9velRoRzJsallnczl4dklad01oVnh3OUwxYmx3RGdFdUdjQUloUDFMUVovM0hxUlUwczFoaVppQUdWOVNpYVNMS3VlVnEya0EvRmRUQT09PC9TUD4='
                'Accept': 'application/json; odata=verbose',
                'Content-Type': 'application/json; odata=verbose',
                'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
                'Access-Control-Allow-Origin': 'http://192.168.220.146:4200',
                'Access-Control-Allow-Credentials' : 'true',               
                'Cookie': str
            }
        }
    });

  

 
@Injectable()
export class SPService {
    constructor( 
                private http: HttpClient,
                private adalSvc: MsAdalAngular6Service
                ){ }

    ngOnInit() { }

    getWebTitle():Observable<any> {    
        return from(web1.get());
    }

}


// this.adalSvc.acquireToken('<RESOURCE>').subscribe((resToken: string) => {
//     this.tokenn = resToken
// });


// let token = sessionStorage.getItem('adal.idtoken');

//   Authorization: Bearer {JWT Token}
// sp.setup({
//     sp: {
//         fetchClientFactory: () => {
//             return new SPFetchClient("interoko.sharepoint.com/teams/test", "4b93c3b2-f01b-4469-80b2-0e4784711b35", "qOcEZQtn9h5G/J43j325QtTMCsHxmSJYqKpF3DlmKUg=");                    
//         },
//     },
// });
// sp.web.select("id").get().then(w => { 
//     return `Web Title: ${w.Title}`;
// }



// pnp.setup({
//     sp: {
//         headers: {
//             "Accept": "application/json; odata=verbose"
//         }
//     }
// });

// import { SPFetchClient } from "@pnp/nodejs";

        // return Observable.fromPromise(web.get());  //  - old
        // console.log('---');
        // console.log(web.get());
        // console.log('---');


        // let myHeaders = new HttpHeaders;
        // myHeaders.append('Authorization', 'Bearer ' + sessionStorage.getItem('adal.idtoken'));
        // myHeaders.append('Content-Type','application/x-www-form-urlencoded');
        // myHeaders.append('Access-Control-Allow-Origin', 'http://192.168.220.146:4200/mainpage');
        // let headers1 = "'Authorization', 'Bearer "+ sessionStorage.getItem('adal.idtoken');

        //  console.log(headers1);
        //   ({ 'Authorization': 'Bearer ' + sessionStorage.getItem('adal.idtoken'), 'Content-Type':'application/x-www-form-urlencoded'});
        // , 'Content-Type': 'application/json;odata=verbose;charset=utf-8' 
        // console.log(web.currentUser);

        // this.http.get(enviroment.web, );
        //return this.http.get(enviroment.web, {headers: myHeaders})
        //return from(web1.get());   

        // return  this.http.get(enviroment.web , {headers: myHeaders});


//         let myHeaders = new HttpHeaders;
// myHeaders.append('Authorization', 'Bearer ' + sessionStorage.getItem('adal.idtoken'));
// myHeaders.append('Content-Type','application/x-www-form-urlencoded');
// myHeaders.append('Access-Control-Allow-Origin', 'http://192.168.220.146:4200/mainpage');



// import { SPFetchClient } from "@pnp/nodejs";

// // do this once per page load
// sp.setup({
//     sp: {
//         fetchClientFactory: () => {
//             return new SPFetchClient("{your site url}", "{your client id}", "{your client secret}");
//         },
//     },
// });



// import { SPFetchClient, SPOAuthEnv } from "@pnp/nodejs";

// sp.setup({
//     sp: {
//         fetchClientFactory: () => {
//             return new SPFetchClient("interoko.sharepoint.com/teams/test", "4b93c3b2-f01b-4469-80b2-0e4784711b35", "qOcEZQtn9h5G/J43j325QtTMCsHxmSJYqKpF3DlmKUg=", SPOAuthEnv.SPO, "435a4f02-f6b2-4248-9a5c-0f355179c0df");   
//         },
//     },
// });  