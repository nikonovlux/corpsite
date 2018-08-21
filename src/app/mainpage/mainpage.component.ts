import { Component, OnInit } from '@angular/core';
import { SPService } from './sp.service'
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  title = 'App';

  constructor(private spService: SPService,
              private adalSvc: MsAdalAngular6Service
            ) { 
    }

  tokenn
  ngOnInit(){}
  checkUser(){
      this.adalSvc.acquireToken('<RESOURCE>').subscribe((resToken: string) => {
                                                                                this.tokenn = resToken
                                                                                console.log(this.tokenn)
                                                                              });

      this.spService.getWebTitle().subscribe(web => (this.title = web.title));
  }
  checkUserInfo(){
      console.log(this.adalSvc.userInfo);
  }

}


// this.adalSvc.acquireToken('<RESOURCE>').subscribe((resToken: string) => {
//   console.log('-------token--------');
//   console.log(resToken);
//   console.log('--------end---------');
// });


//console.log('clicked1')
//console.log(sessionStorage.getItem('adal.idtoken'))
