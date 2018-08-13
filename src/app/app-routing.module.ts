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

const routes: Routes = [
  { path: '', redirectTo: '/mainpage', pathMatch: 'full' },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'structure', component: StructureComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'retail', component: RetailComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'detail/:id', component: EmployeeDetailComponent },
];


@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
