import { Component, OnInit } from '@angular/core';

//import { NgxSoapService, Client, ISoapMethodResponse } from 'ngx-soap';

import {Http} from '@angular/http';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})


export class LogoutComponent implements OnInit {

  //client: Client; 

  body = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:mob="http://www.mobile.itilium.org">'+
  '<soapenv:Header/>'+
  '<soapenv:Body>'+
     '<mob:GetIncidentByNumber>'+
        '<mob:Number>0000029925</mob:Number>'+
     '</mob:GetIncidentByNumber>'+
  '</soapenv:Body>'+
'</soapenv:Envelope>'
 
  constructor(
    //private soap: NgxSoapService
    ) {}

    soap2(){

    let soap = new XMLHttpRequest();
    soap.onreadystatechange = function(){
      if(soap.readyState==4)
        alert("status " + soap.status);
    }
    
    soap.open('post', 'http://192.168.220.35/itilium/ws/IT_Mobile?wsdl');
    soap.send(this.body);

    }

      ngOnInit() {}

    }


