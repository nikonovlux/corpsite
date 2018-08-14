import { Component, OnInit } from '@angular/core';

import {ButtonModule} from 'primeng/button';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']

})



export class MenuComponent implements OnInit {

  constructor() { }

  clicked() {
    console.log("Logout initiated");
    window.location.href= "https://login.microsoftonline.com/435a4f02-f6b2-4248-9a5c-0f355179c0df/oauth2/logout"
  //?post_logout_redirect_uri=<optional_uri> 

  }


  ngOnInit() { }

}
