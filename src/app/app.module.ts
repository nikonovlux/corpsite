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


import { MsAdalAngular6Module, AuthenticationGuard } from 'microsoft-adal-angular6';

//import {MsalModule, MsalGuard, MsalInterceptor} from '@azure/msal-angular';

// import * as MicrosoftGraph from '@microsoft/microsoft-graph-client'
// const MicrosoftGraph = require("@microsoft/microsoft-graph-client");
// MicrosoftGraph.Client.init();

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';


//import { SPService } from './mainpage/sp.service';
import { WikipageComponent } from './wikipage/wikipage.component';


import { HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppIntercept} from './intercept.service';

import { TreeModule } from 'primeng/primeng';
import { OrganizationChartModule} from 'primeng/organizationchart';

import {ToastModule} from 'primeng/toast';

import {TableModule} from 'primeng/table';

import {CalendarModule} from 'primeng/calendar';

import {ContextMenuModule} from 'primeng/contextmenu';

import {DialogModule} from 'primeng/dialog';

import {TabMenuModule} from 'primeng/tabmenu';

import {MegaMenuModule} from 'primeng/megamenu';

import {SidebarModule} from 'primeng/sidebar';


import { NgxSoapModule } from 'ngx-soap';



import {adal_config} from 'src/environments/environment.prod'

// import { registerLocaleData } from '@angular/common';
// import localeRu from '@angular/common/locales/ru';
// import localeRuExtra from '@angular/common/locales/extra/ru';


import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { SptestComponent } from './sptest/sptest.component';
import { CirculationComponent } from './circulation/circulation.component';



import { PipeUkrDateComponent } from './ukrdate'
import { PowerPipe } from './powerpipe'
import { UniquePipe } from './uniquepipe'

import { LazyLoadingScriptService } from './gmap2.directive';


import { PdfViewerModule } from 'ng2-pdf-viewer';
import { InstructionsComponent } from './instructions/instructions.component';




export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

//registerLocaleData(localeRu, 'ru-RU', localeRuExtra);



@NgModule({
  declarations: [
    UniquePipe,
    PowerPipe,
    PipeUkrDateComponent,
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
    CirculationComponent,
    InstructionsComponent    
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
  PdfViewerModule,
    SidebarModule,
    CalendarModule,
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
    //MsalModule.forRoot(adal_config_ms)
    MsAdalAngular6Module.forRoot(adal_config)
  ],
  providers: [
    //MsalGuard,
    LazyLoadingScriptService,
    AuthenticationGuard,    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppIntercept,
      //useClass: MsalInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

