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

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


import { AuthenticationGuard } from 'microsoft-adal-angular6';






//  import { AppComponent } from './app.component';





const routes: Routes = [
//  { path: '', component: AppComponent, pathMatch:'full', canActivate: [AuthenticationGuard] },
  { path: '', redirectTo: '/mainpage', pathMatch: 'full'},
  { path: 'mainpage', component: MainpageComponent  },
  { path: 'employees', component: EmployeesComponent , canActivate: [AuthenticationGuard] },
  { path: 'structure', component: StructureComponent , canActivate: [AuthenticationGuard] },
  { path: 'feedback', component: FeedbackComponent , canActivate: [AuthenticationGuard] },
  { path: 'retail', component: RetailComponent , canActivate: [AuthenticationGuard] },
  { path: 'docs', component: DocsComponent , canActivate: [AuthenticationGuard] },
  { path: 'news', component: NewsComponent , canActivate: [AuthenticationGuard] },
  { path: 'detail/:id', component: EmployeeDetailComponent , canActivate: [AuthenticationGuard] },
  { path: 'login', component: LoginComponent , canActivate: [AuthenticationGuard] },
  { path: 'logout', component: LogoutComponent , canActivate: [AuthenticationGuard] },
  { path: 'complain', component: ComplainComponent },
];


@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
