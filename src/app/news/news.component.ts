import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

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
