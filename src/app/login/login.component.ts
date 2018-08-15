import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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




