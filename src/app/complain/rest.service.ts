import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//import {Observable} from "rxjs/Observable";

const httpOptions = {
  headers: new HttpHeaders({'Accept':'application/json;odata=verbose','Content-Type':'application/json:odata=verbose' })
};

@Injectable({
    providedIn: 'root'
  })
export class RestService {

  constructor(private http: HttpClient) { }

  //userUrl = 'https://www.yammer.com/api/v1/users/current.json';
  //userUrl = 'assets/json/current.json';

  list = "complains"

  userUrl = ' https://interoko.sharepoint.com/sites/IT/_api/Web/lists/getbytitle(\'' + this.list + '\')/items'

  getList() {
    return this.http.get(this.userUrl );
  }

}

