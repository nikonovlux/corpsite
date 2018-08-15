import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

import { RestService } from './rest.service';

import { Http, Response } from "@angular/http";


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

@Injectable({ providedIn: 'root' })
export class NewsComponent implements OnInit {

  //Response = [];
  //restdata: string

  constructor(private restService: RestService) {  }

  showUser() {

    // this.restService.getUser().subscribe(response => this.restdata = response.text() );
    
    this.restService.getUser()
      .subscribe(response =>
        {
          console.log("recieved");
          console.log(response);

          Object.values(response).forEach(element => {
                            console.log(element);
                          });
        }
      );

    console.log("clicked");
   
  }
 

  ngOnInit(): void {

    var yam: any = window['yam'];
    yam.connect.embedFeed({
        config: {
          "header": false,
        },
        container: '#embedded-feed',
        network: 'interoko.onmicrosoft.com',
        //feedType: 'group',
        //feedId: '15108844'
        // feedId: '',  
        //feedType: 'Home'
        
    });


  }
}
