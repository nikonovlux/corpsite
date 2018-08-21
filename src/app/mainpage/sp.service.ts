import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

import { from } from 'rxjs';

import { sp, Web } from '@pnp/sp'

import { MsAdalAngular6Service } from 'microsoft-adal-angular6';


const enviroment = {
  production: true,
  web: 'https://interoko.sharepoint.com/'
  // web: 'https://interoko.sharepoint.com/sites/IT/'
};


let web1 = new Web (enviroment.web);

sp.setup({
        sp: {
            headers: {
                'Accept': 'application/json; odata=verbose',
                'Authorization': 'Bearer ' + sessionStorage.getItem('adal.idtoken'),
                'Access-Control-Allow-Origin': 'http://192.168.220.146:4200/mainpage',
                'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Access-Control-Allow-Origin'
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