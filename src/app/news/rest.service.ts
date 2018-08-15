import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })
export class RestService {

  constructor(private http: HttpClient) { }

  //userUrl = 'https://www.yammer.com/api/v1/users/current.json';
  userUrl = 'assets/json/current.json';


  getUser() {
    return this.http.get(this.userUrl);
  }

}

