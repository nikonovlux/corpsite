import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent } from './employees/employees.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { StructureComponent } from './structure/structure.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RetailComponent } from './retail/retail.component';
import { DocsComponent } from './docs/docs.component';
import { NewsComponent } from './news/news.component';
import { EmployeeDetailComponent }  from './employee-detail/employee-detail.component';
import { ComplainComponent } from './complain/complain.component';
import { WikipageComponent } from './wikipage/wikipage.component';
import { CirculationComponent} from './circulation/circulation.component';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


import { AuthenticationGuard } from 'microsoft-adal-angular6';

//import { ActivatedRoute } from '@angular/router';
//import { MsalGuard} from '@azure/msal-angular';

// import { Router, NavigationCancel } from '@angular/router';

// import { URLSearchParams, } from '@angular/http';


const routes: Routes = [

  { path: '', redirectTo: '/mainpage', pathMatch: 'full'},
  { path: 'mainpage', component: MainpageComponent },
  { path: 'employees', component: EmployeesComponent , canActivate: [AuthenticationGuard] },
  { path: 'structure', component: StructureComponent  , canActivate: [AuthenticationGuard] },
  { path: 'feedback', component: FeedbackComponent , canActivate: [AuthenticationGuard] },
  { path: 'retail', component: RetailComponent  },
  { path: 'docs', component: DocsComponent , canActivate: [AuthenticationGuard]  },
  { path: 'news', component: NewsComponent  , canActivate: [AuthenticationGuard] },
  { path: 'detail/:id', component: EmployeeDetailComponent  , canActivate: [AuthenticationGuard] },
  { path: 'login', component: LoginComponent  },
  { path: 'logout', component: LogoutComponent   },
  { path: 'complain', component: ComplainComponent },
  { path: 'wikipage', component: WikipageComponent },
  { path: 'circulation', component: CirculationComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]  
})
export class AppRoutingModule {}
//   constructor(
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

