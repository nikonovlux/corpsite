import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({
    'Accept':'application/json;odata=verbose',
    'Content-Type':'application/json:odata=verbose'
   })
};

@Injectable({
    providedIn: 'root'
  })
export class RestService {

  constructor(private http: HttpClient) {  }

  //userUrl = 'https://www.yammer.com/api/v1/users/current.json';
  //userUrl = 'assets/json/current.json';

  list = "complains"

  userUrl = ' https://interoko.sharepoint.com/sites/IT/_api/Web/lists/getbytitle(\'' + this.list + '\')/items'

  getList() {
    return this.http.get(this.userUrl, httpOptions );
  }


}

// 'accept': 'application/json;odata=verbose'
//   return new SPFetchClient("interoko.sharepoint.com/teams/test", "4b93c3b2-f01b-4469-80b2-0e4784711b35", "qOcEZQtn9h5G/J43j325QtTMCsHxmSJYqKpF3DlmKUg=");

// import sp from "@pnp/sp";

// // get all the items from a list
// sp.web.lists.getByTitle("My List").items.get().then((items: any[]) => {
//     console.log(items);
// });