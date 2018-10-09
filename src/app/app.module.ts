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

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { SPService } from './mainpage/sp.service';
import { WikipageComponent } from './wikipage/wikipage.component';


import { HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppIntercept} from './intercept.service';

import { TreeModule } from 'primeng/primeng';
import { OrganizationChartModule} from 'primeng/organizationchart';

import {ToastModule} from 'primeng/toast';

import {TableModule} from 'primeng/table';

import {ContextMenuModule} from 'primeng/contextmenu';

import {DialogModule} from 'primeng/dialog';

import {TabMenuModule} from 'primeng/tabmenu';

import {MegaMenuModule} from 'primeng/megamenu';

import { NgxSoapModule } from 'ngx-soap';




// import { registerLocaleData } from '@angular/common';
// import localeRu from '@angular/common/locales/ru';
// import localeRuExtra from '@angular/common/locales/extra/ru';


import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { SptestComponent } from './sptest/sptest.component';
import { CirculationComponent } from './circulation/circulation.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

//registerLocaleData(localeRu, 'ru-RU', localeRuExtra);



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
    ComplainComponent,
    WikipageComponent,
    SptestComponent,
    CirculationComponent    
  ],
  imports: [
    NgxSoapModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    MegaMenuModule,
    TabMenuModule,
    DialogModule,
    ContextMenuModule,
    TableModule,
    ToastModule,
    OrganizationChartModule,
    TreeModule,
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
                                  //tenant: '435a4f02-f6b2-4248-9a5c-0f355179c0df', // interoko.onmicrosoft.com
                                  // clientId: '8557d00c-fd93-4abc-b48a-66eea1f08ed7',
                                  //redirectUri: "https://corpsite.opticalhouse.com.ua:4200/mainpage",
                                  tenant: 'interoko.onmicrosoft.com',
                                  clientId: '937a47e8-b6ad-4226-8d28-4940d9662ac9',                                  
                                  redirectUri: "https://corpsite.opticalhouse.com.ua:4200/mainpage",
                                  endpoints: {
                                              "sharePointUri": "https://interoko.sharepoint.com/teams/IT/_api/",
                                              "graphwindows": "https://graph.windows.net/interoko.onmicrosoft.com/",
                                              "graphms": "https://graph.microsoft.com/v1.0",
                                              },
                                  navigateToLoginRequestUrl: false,
                                  postLogoutRedirectUri: 'https://corpsite.opticalhouse.com.ua:4200/retail',
                                  cacheLocation: '<localStorage / sessionStorage>'
                                })
  ],
  providers: [
    AuthenticationGuard,
    SPService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppIntercept,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

