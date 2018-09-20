import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';

import { Util } from "@pnp/common";

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { EmployeeService } from '../employee.service';

import {SelectItem} from 'primeng/api';


interface method {
  label: string;
  value: string;
};

interface param {
  label: string;
  text: string;
  encode: boolean;
};


@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})
export class ComplainComponent implements OnInit {

  constructor(
    public restService: RestService,
    private http: HttpClient,
    private employeeService: EmployeeService   
  ) { }
 
  SendComplain() {

    console.log("clicked1");  

    this.restService.getJson(this.server2)
      .subscribe(
        response => {
          console.log("recieved");
          console.log(response);
          this.respo1 = JSON.stringify(response);
        },
        error => {
          alert(JSON.stringify(error))
        }        
      );
    console.log("clicked2");   
  }

  getUser() { 
  }

  respo1: string = "waiting..."

  respo2: string = 'Waiting...';

  post_body: string = 'Testing';
  
  httpmethod: SelectItem[]  = [
    {label:'Get', value:'GET'},
    {label:'Post', value:'POST'}
  ]; 

  urls: SelectItem[] = [
    {label:'interoko.sharepoint.com', value:'https://interoko.sharepoint.com/_api/Web/GetUserById(15)/title'},
    {label:'accounts.accesscontrol.windows.net', value:'https://accounts.accesscontrol.windows.net/435a4f02-f6b2-4248-9a5c-0f355179c0df/tokens/OAuth/2'}
  ]; 

  params : param[] = [
    {label:'grant_type', text:'authorization_code', encode: false },
    {label:'resource', text:'00000003–0000–0ff1-ce00–000000000000/interoko.sharepoint.com@435a4f02-f6b2-4248-9a5c-0f355179c0df', encode: true },
    {label:'client_id', text:'8557d00c-fd93-4abc-b48a-66eea1f08ed7@435a4f02-f6b2-4248-9a5c-0f355179c0df', encode: false },
    {label:'client_secret', text:'scbyGFBW6489$raxQGQ8][@', encode: false },
    {label:'code', text:'PAQABAAIAAADXzZ3ifr-GRbDT45zNSEFEpuZRrmMygzHxmYEDDuOGl8YazW0a0g7GweZXAHlsMuwoKz-FmbYM7ziOPzGujVOGt1Q8mU63MoqGxW84crnKXorI9qY4O0dR5KFxwvBbORnHxKlHUZeHroJWmgr70tI4B2J8QDTZFtR3fsyURKj3xxsboUddt2LFcoJq1AiHCxQQGTPoz3_49WPPJIW3xrkerJkQvNSGGi-qiqqM1jjAYVvBeQ-ddc2NH0OO2DnOw8F8hnqPiZ6tl4FDtCGEPwZKLo9CwregUsmpCBosljbWWxVbqQyzLv6dK3kNHwU6S1ezGVkF4XGOOpzb9cYTLCM5IAA', encode: false },
    {label:'redirect_uri', text:'http://192.168.220.146:4200', encode: true  },
];

topics: SelectItem[]  = [
  {label:'Complain', value:'Complain'},
  {label:'Idea', value:'Idea'}
]; 

server1: string = this.urls[0].value;

server2: string = "https://interoko.sharepoint.com/teams/hr/_api/lists/getbytitle('complain')/items/";
//  server2: string = "https://interoko.sharepoint.com/_api/Web/Lists(guid'91e6a90c-8be1-411a-a964-d8ee385eb537')/items";  // works!

method1: string = this.httpmethod[0].value;

onTopicChange(){}

onMethodChanged(e){
  e = e || window.event;
  // console.log(e);
  console.log(this.method1);
  this.method1 == this.httpmethod[1].value ? document.getElementById("body").hidden = false : document.getElementById("body").hidden = true;
}

onServerChanged(e){
  e = e || window.event;
  // console.log(e);
  console.log(this.server1);
}

onFormBodyClick(){

  this.post_body = '';

  this.params.forEach(element => {
      this.post_body = this.post_body + element.label + '=' + (element.encode === true ? encodeURIComponent(element.text) : element.text) + '&';      
  });

  this.post_body = this.post_body.substr(0,this.post_body.length-1)
}

onEmpClick(){
  this.employeeService.getEmployees().subscribe(
                                                response => { console.log(response)  }
                                              )                                              
}

onSendClick(){

  const httpOptions = {
    //withCredentials: true,   // -- add  error  
    body: this.post_body,           
    //responseType: 'json',    
    headers: new HttpHeaders({
      'Accept':'application/json;odata=verbose',      
      'Access-Control-Allow-Origin':'https://192.168.220.146:4200',
      //'Content-Type':'application/json:odata=verbose'      
     })
  };

  console.log('method-' + this.method1 + ', server-' + this.server1 + ', body-' + this.post_body);
  
  this.http.request(this.method1, this.server1, httpOptions
              ).subscribe( 
                data =>{ 
                  console.log(data);
                  //   this.respo2 = data;
                  this.respo2 = JSON.stringify(data);
                },
                error =>{ 
                  console.log('------------');
                  console.log(error);
                  this.respo2 = JSON.stringify(error);
                }
              )
}

  onDblClick(e){
    e = e || window.event;
    console.log(e);
    console.log(e.target.name);

    switch(e.target.name){ 
      case 'post_body': alert('111');
      break;
      case '0': alert(this.params[0].text)
      break;
      case '1': alert(this.params[1].text)
      break;
      case 'topic': alert(this.params[5].text)
      break;  
      case 'method': alert(this.method1)
      break;     
      
    }        
  } 

  ngOnInit() { }


}

// this.restService.getUser().subscribe(response => this.restdata = response.text() );


          // Object.values(response).forEach(data => {
          //                                   console.log(data);
          //                                   this.respo1 = JSON.stringify(data);
          //                                 });

// import pnp from "sp-pnp-js";
// import { sp } from "@pnp/sp";
// import { SPFetchClient } from "@pnp/nodejs";




// import { sp } from "@pnp/sp";
// import { SPFetchClient } from "@pnp/nodejs";

// //import {Observable} from "rxjs/Observable";


// sp.setup({
//   sp: {
//       fetchClientFactory: () => {
//           return new SPFetchClient("interoko.sharepoint.com/teams/test", "4b93c3b2-f01b-4469-80b2-0e4784711b35", "qOcEZQtn9h5G/J43j325QtTMCsHxmSJYqKpF3DlmKUg=");
//       },
//   },
// });

// (function main() {
    
//   sp.web.lists.getByTitle("complains").items.get().then((items: any[]) => {
//     console.log(items);

// });
// })()


// (function() {
//   // get and log a random string
//   console.log(Util.getRandomString(30));
//   console.log(Util.getGUID());  
// })()


    
// sp.setup({
//   sp: {
//       headers: {
//           "Accept": "application/json; odata=verbose"
//       }
//   }
        
// });

// sp.web.currentUser.get().then(result => {
// console.log(result);
// });



  // const headers1 = new HttpHeaders;
  // headers1.append('Access-Control-Allow-Origin','https://192.168.220.146:4200');
  // headers1.append('cookie','FedAuth=77u/PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48U1A+VjQsMGguZnxtZW1iZXJzaGlwfDEwMDMwMDAwYWM3MzAwZDNAbGl2ZS5jb20sMCMuZnxtZW1iZXJzaGlwfG5pa29ub3YubUBsdXhvcHRpY2EuY29tLnVhLDEzMTgwMDgyNjE4MDAwMDAwMCwxMzE3NjgwOTk2NTAwMDAwMDAsMTMxODAxNzE4MDYzNjY4NDIwLDAuMC4wLjAsMiw0MzVhNGYwMi1mNmIyLTQyNDgtOWE1Yy0wZjM1NTE3OWMwZGYsLFYyITEwMDMwMDAwQUM3MzAwRDMhMTMxODAwODI2MTgsNTdiYzg5OWUtMDBhNS02MDAwLTJlM2QtMTIzMzAyNTM0ZTY5LDU3YmM4OTllLTAwYTUtNjAwMC0yZTNkLTEyMzMwMjUzNGU2OSwsMCwxMzE4MDA4OTAwNjMyMDAwMTYsMTMxODAzNDQ2MDYzMjAwMDE2LG1RUFJtZmhsaEJqZHVmdVpDVXAzRW5vbXhxNFdSbllxck5BRWoyL0t4NXJrK0haeGlpbUh3VjJpV2JmcFRKQXBKY3V6NlRPb2VxUnFUb2NZc1RsOWZpZDZvUzRwUWtEVlhucjJJM0hHL3FkaXFBMW5lWEVLeGxiN2gwOVcrYjFhZkE5WlllZDhYZDRyMEZDYVJyTEM4eWNWakNPcEVkTzVDc3NJTzFOUDlTOWVHOGVzcjRBNi9WRm1FSyt0bEFLUGJKT29mNFkvQUxWSjJkMlc2MmpmS0E0RU5aOXFFemlqZEJySzVGZGZUVjNocHVqNEFlakdmbHBObHdoMDlUakhQQXdESUdzS3VtWWlKbTBIWDYwU1dXNWRXalRiVG1nU2dEOTJjc3U5YTNHUkdBK0dQYXlIY2x0SXhoNlNqWklIWE5QS0pWa3I4NFB3NUpFK2tVaC9QZz09PC9TUD4=; rtFa=62eufS7sNi/8kWmzFefNKQZ1aqbPWPFolz7HaG2vudcmNDM1QTRGMDItRjZCMi00MjQ4LTlBNUMtMEYzNTUxNzlDMERGAlkOc3CJnUyt16Wjxx50/on0aH4HZHE6KffjXYDiBPgPm9Bo/XWLk8DrZ7FGfsOgzV+VyS72XfBPXJPax9uHFydgbtfdqBQQeLbSrYTsT9xE5ZC3hhlIVoeL7VY7UmrFAE/7+g6usn5iSQxTOkBFUVZi08QtwZW08WklJ6EnjARtXJP70b8fRJ4D1mzPbVO/hBxjg3k9v90HMiFXva5eKhzZ7EVJmUt+OFwcDIy/iLuwnM5NzER/UsgLgIiOqCYZD25rMZpYjhs9nCgngbL9T986lixi0d5GmqF69aONlphBxKZPW46MVqN8aEE9n64s9Ssn+ztSkoKm2PTNYpygG0UAAAA=');
