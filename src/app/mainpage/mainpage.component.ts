import { Component, OnInit } from '@angular/core';
import {SPService} from './sp.service'


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  title = 'App';

  constructor(private spService: SPService) { }

  ngOnInit() {
   
  }
  checkUser(){
    //console.log('clicked1')
    //console.log(sessionStorage.getItem('adal.idtoken'))
      this.spService.getWebTitle().subscribe(web => (this.title = web.title));
      console.log(webkitCancelAnimationFrame.toString);
  }

}
