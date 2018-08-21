import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

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

import { AppRoutingModule } from './app-routing.module';

import { MessagesComponent } from './messages/messages.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { NewsComponent } from './news/news.component';
import { ComplainComponent } from './complain/complain.component';


import { AccordionModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { GMapModule} from 'primeng/gmap';


import { DropdownModule} from 'primeng/dropdown';


import { MsAdalAngular6Module } from 'microsoft-adal-angular6';
import { AuthenticationGuard } from 'microsoft-adal-angular6';


import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { SPService } from './mainpage/sp.service';


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
    NewsComponent,
    LoginComponent,
    LogoutComponent,
    ComplainComponent
  ],
  imports: [
    FormsModule,
    DropdownModule,     
    HttpModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    GMapModule,
    MsAdalAngular6Module.forRoot({
      tenant: '435a4f02-f6b2-4248-9a5c-0f355179c0df',
      clientId: '937a47e8-b6ad-4226-8d28-4940d9662ac9',
      redirectUri: "http://192.168.220.146:4200/mainpage",
      endpoints: { },
      navigateToLoginRequestUrl: false,
      cacheLocation: '<localStorage / sessionStorage>'
    })
  ],
  providers: [AuthenticationGuard, SPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
