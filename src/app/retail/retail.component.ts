import { Component, OnInit } from '@angular/core';

import {GMapModule} from 'primeng/gmap';


@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.css']
})



export class RetailComponent implements OnInit {

// buttonModule: ButtonModule

options: any;

  constructor( ) { }

  ngOnInit() {


    this.options = {
      center: {lat: 50.491838, lng: 30.495094},
      zoom: 15
  };

      }

}
