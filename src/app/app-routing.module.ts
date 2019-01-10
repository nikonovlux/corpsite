import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from 'microsoft-adal-angular6';

import { MainpageComponent } from './mainpage/mainpage.component';
import { StructureComponent } from './structure/structure.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RetailComponent } from './retail/retail.component';
import { NewsComponent } from './news/news.component';

import { CirculationComponent} from './circulation/circulation.component';
import { InstructionsComponent} from './instructions/instructions.component';

import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
// import { LogoutComponent } from './logout/logout.component';
// import { DocsComponent } from './docs/docs.component';
// import { ComplainComponent } from './complain/complain.component';
// import { WikipageComponent } from './wikipage/wikipage.component';


//import { ActivatedRoute } from '@angular/router';
//import { Router, NavigationCancel } from '@angular/router';
//import { URLSearchParams, } from '@angular/http';


const routes: Routes = [

  { path: '', redirectTo: '/mainpage', pathMatch: 'full'},
  { path: 'mainpage', component: MainpageComponent , canActivate: [AuthenticationGuard]  },
  { path: 'structure', component: StructureComponent  , canActivate: [AuthenticationGuard] },
  { path: 'feedback', component: FeedbackComponent , canActivate: [AuthenticationGuard] },
  { path: 'news', component: NewsComponent  , canActivate: [AuthenticationGuard] },
  { path: 'instructions', component: InstructionsComponent  , canActivate: [AuthenticationGuard] },
  { path: 'retail', component: RetailComponent  },
  { path: 'login', component: LoginComponent  },
  // { path: 'docs', component: DocsComponent , canActivate: [AuthenticationGuard]  },
  // { path: 'logout', component: LogoutComponent },
  // { path: 'complain', component: ComplainComponent },
  // { path: 'wikipage', component: WikipageComponent },
  { path: 'circulation', component: CirculationComponent },
  { path: 'search/:query',      component: SearchComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]  
})
export class AppRoutingModule {}


//  temp strings

//  constructor(
//     private route: ActivatedRoute,
//   ) { 
//     if(this.route.fragment){
//     this.route.fragment.subscribe((fragment: string) =>
//                     {
//                       console.log(fragment); 
//                     }
//   );
//                   }
//  }



  // constructor(public router: Router) {
  //   router.events.subscribe(s => {
  //     if (s instanceof NavigationCancel) {
  //       let params = new URLSearchParams(s.url.split('#')[1]);

  //       localStorage.setitem('hass2', params.get('access_token'));
        
  //     }
  //   });
  // }

//  import { AppComponent } from './app.component';
//  { path: '', component: AppComponent, pathMatch:'full'  }
//

