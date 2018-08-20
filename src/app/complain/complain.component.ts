import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';

import { Util } from "@pnp/common";


import pnp from "sp-pnp-js";


@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})
export class ComplainComponent implements OnInit {

  constructor(public restService: RestService) { }
 
  SendComplain() {

    // this.restService.getUser().subscribe(response => this.restdata = response.text() );
    console.log("clicked1");   
    this.restService.getList()
      .subscribe(response =>
        {
          console.log("recieved");
          console.log(response);

          Object.values(response).forEach(element => {
                            console.log(element);
                          });
        }
      );
    console.log("clicked2");   
  }

  getUser() {
    pnp.setup({
                sp: {
                    headers: {
                        "Accept": "application/json; odata=verbose"
                    }
                }
                      
            });
  
    pnp.sp.web.currentUser.get().then(result => {
        console.log(result);
    });
  
}


  ngOnInit() {
  }

}

// import { sp } from "@pnp/sp";
// import { SPFetchClient } from "@pnp/nodejs";

// //import {Observable} from "rxjs/Observable";


// sp.setup({
//   sp: {
//       fetchClientFactory: () => {
//           return new SPFetchClient("interoko.sharepoint.com/teams/test", "4b93c3b2-f01b-4469-80b2-0e4784711b35", "qOcEZQtn9h5G/J43j325QtTMCsHxmSJYqKpF3DlmKUg=");
//       },
//   },
// });

// (function main() {
    
//   sp.web.lists.getByTitle("complains").items.get().then((items: any[]) => {
//     console.log(items);

// });
// })()


// (function() {
//   // get and log a random string
//   console.log(Util.getRandomString(30));
//   console.log(Util.getGUID());  
// })()
