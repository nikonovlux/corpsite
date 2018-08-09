import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { FooterComponent } from './footer/footer.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { StructureComponent } from './structure/structure.component';
import { RetailComponent } from './retail/retail.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { EmployeesComponent } from './employees/employees.component';
import { DocsComponent } from './docs/docs.component';
import { MenuComponent } from './menu/menu.component';

import { AppRoutingModule } from './/app-routing.module';

import { MessagesComponent } from './messages/messages.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { NewsComponent } from './news/news.component';



@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    FooterComponent,
    MainpageComponent,
    StructureComponent,
    RetailComponent,
    FeedbackComponent,
    EmployeesComponent,
    DocsComponent,
    MenuComponent,
    MessagesComponent,
    EmployeeDetailComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
