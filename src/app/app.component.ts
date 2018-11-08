import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {TranslateService} from '@ngx-translate/core';

// import { Router, NavigationEnd } from '@angular/router';

import { Observable } from "rxjs"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]

})
export class AppComponent {

  constructor(
    // router: Router,
    translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    //translate.use('ru');

      if(localStorage.getItem("lang")){
        translate.use(  JSON.parse(localStorage.getItem("lang")).value );
      }else{
        translate.use('en');
      }


      // router.events.subscribe(s => {
      //   if (s instanceof NavigationEnd) {
      //     const tree = router.parseUrl(router.url);
      //     if (tree.fragment) {
      //       const element = document.querySelector("#" + tree.fragment);
      //       alert(tree.fragment);
      //     }
      //   }
      // });

    

  }

  title = 'Corpsite';

  menuState:string = 'out';
  spanclass:string = 'menu-icon';




  toggleMenu() {
      //alert('hited');
      this.menuState = this.menuState === 'out' ? 'in' : 'out';
      this.spanclass = this.spanclass === 'menu-icon' ? 'menu-icon is-active': 'menu-icon';

  }
  toggleMenuOut() {
    this.spanclass = 'menu-icon';
    this.menuState = 'out';
  }

  arr = ['obladi','oblada']
  onObsClick(){
  
    this.arr.push('hey')
    console.log(this.arr)
    
  }

  time
  
ngOnInit(){
  let obs = new Observable(  (observer) => {
     
    let i = 0
    setInterval(  () => {
                          observer.next( this.arr[i] );
                          i < this.arr.length ? i++ : i=0;  },
                2000  )


  }
  );

  obs.subscribe(
    element => {
      this.time = element
      //console.log(element)
    }

  )
}


}
