import { Component, OnInit } from '@angular/core';

import { NgxSoapService, Client, ISoapMethodResponse } from 'ngx-soap';

import {Http} from '@angular/http';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})


export class LogoutComponent implements OnInit {


  constructor(      
                ) {               



    //  client: Client; 
    // this.soap.createClient('assets/soap/HelloService.wsdl').catch(prom => {
    //     this.client = prom;
    //     console.log(this.client.error);
    // })
    //this.soap.createClient('assets/soap/HelloService.wsdl').subscribe(client => this.client = client);
  }

  ngOnInit() {

  }

}


