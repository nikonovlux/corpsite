import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})


export class LogoutComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  soap() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', 'https://192.168.220.35/itilium/ws/IT_Mobile?wsdl', false);
  
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                alert(xmlhttp.responseText);
            }
        }
    }
    // Send the POST request
    
    xmlhttp.send();
  }



}
