import { Component, OnInit } from '@angular/core';

//import { Util } from "@pnp/common";

import {HttpClient, HttpHeaders } from '@angular/common/http';

import {EmployeeService } from '../employee.service';

import {SelectItem} from 'primeng/api';

import {form_graph_ms, form_graph_azure} from '../environments/environment.prod'



// import { sp } from "@pnp/sp";
// import { SPFetchClient } from "@pnp/nodejs";
// import { AdalFetchClient } from "@pnp/nodejs";
//  import { graph } from "@pnp/graph";
//  import { config } from 'rxjs';
//  import {  NodeFetchClient } from 'node-pnp-js';
//  import * as pnp from 'sp-pnp-js';
//  import pnp from "@pnp/pnpjs";
//  import { getGUID } from "@pnp/common";


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
              private http: HttpClient,
              private employeeService: EmployeeService   
              ) {  }
 
  SendComplain() {

    console.log("clicked1");  

    this.employeeService.getJsonSPO(this.server2)
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
    //{label:'interoko.sharepoint.com', value:'https://interoko.sharepoint.com/_api/Web/GetUserById(15)/title'},
    {label:'accounts.accesscontrol.windows.net', value:'https://accounts.accesscontrol.windows.net/435a4f02-f6b2-4248-9a5c-0f355179c0df/tokens/OAuth/2'}
  ]; 

  params : param[] = [
    {label:'grant_type', text:'authorization_code', encode: false },
    {label:'resource', text:'00000003-0000-0ff1-ce00-000000000000/interoko.sharepoint.com@435a4f02-f6b2-4248-9a5c-0f355179c0df', encode: true },
    {label:'client_id', text:'fd315e4f-1c14-4e84-bea3-04425b868ada@435a4f02-f6b2-4248-9a5c-0f355179c0df', encode: false },
    {label:'client_secret', text:'XHl75+tk0MLOfuwa5akG3Wb5pXsJ99nIftEVnCg7YD4=', encode: false },
    {label:'code', text:'PAQABAAIAAADXzZ3ifr-GRbDT45zNSEFECwl9sSV0ME_DFwo4-sfV_D-iE74MeQtI6ac8mb0TEm2CWWAqm-1EDQjfeVUzlWknUmdRvWnzoXgDtafFfM3ANMelnUgAoi3AOhyFsFtH2S2fHo6mWw54aI5lX6pQUsVJ6fYvRzwiSVklPDzfrQcRyUOa-v6FAkJcp0ZM9IH6aS6w5F9BmXifQ4DP6HUwLAnTeLo_LsHLyyKqfyGuiqnXb6xpzNLqwlTPWhQ8-MlkfTltgh_Cse9EzPsSO_daOcMXqR0KW9OrnKd184hk2NUcA9xUxJ5E9LHWBq9dO7AzrYGRt5XgK2o9T08XbLpLD2aOxUNzyLI3Y8tLKyb920zoCSAA', encode: false },
    //{label:'redirect_uri', text:'http://192.168.220.146:4200', encode: true  },
    //{label:'client_id', text:'8557d00c-fd93-4abc-b48a-66eea1f08ed7@435a4f02-f6b2-4248-9a5c-0f355179c0df', encode: false },
    //{label:'client_secret', text:'scbyGFBW6489$raxQGQ8][@', encode: false },
    {label:'redirect_uri', text:'https://corpsite.opticalhouse.com.ua:4200', encode: true  }
];




topics: SelectItem[]  = [
  {label:'Complain', value:'Complain'},
  {label:'Idea', value:'Idea'}
]; 

server1: string = this.urls[0].value;
//  graph ok --- https://graph.microsoft.com/v1.0/sites/interoko.sharepoint.com:/teams/hr:/lists/complains/items/1
server2: string = "https://interoko.sharepoint.com/teams/hr/_api/lists/getbytitle('complains')/items/";
//  server2: string = "https://interoko.sharepoint.com/_api/Web/Lists(guid'91e6a90c-8be1-411a-a964-d8ee385eb537')/items";  // works!

method1: string = this.httpmethod[0].value;

SetLocalCode_ag:string;
SetLocalCode_ms:string;

onSetLocalCode_ag(){
  localStorage.setItem('code_ag',this.SetLocalCode_ag);
  console.log('Code_ag set -------------------');
  console.log(JSON.parse(localStorage.getItem('code_ag')).access_token);
  window.location.href =  window.location.toString();
}

onSetLocalCode_ms(){
  localStorage.setItem('code_ms', this.SetLocalCode_ms);
  console.log('Code_ms set --------------------');
  console.log(JSON.parse(localStorage.getItem('code_ms')).access_token);
  window.location.href =  window.location.toString();
}
onSetLocalCode_spo(){
  localStorage.setItem('code_spo', this.SetLocalCode_ms);
  console.log('Code_spo set --------------------');
  console.log(JSON.parse(localStorage.getItem('code_spo')).access_token);
  window.location.href =  window.location.toString();
}

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

  this.post_body = this.post_body.substr(0,this.post_body.length-1);

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
      //'Access-Control-Allow-Origin':'https://corpsite.opticalhouse.com.ua:4200',
      //'Content-Type':'application/json:odata=verbose'      
     })
  };

  console.log('method-' + this.method1 + ', server-' + this.server1 + ', body-' + this.post_body);
  
  this.http.request(this.method1, this.server1, httpOptions)
          .subscribe( 
                data =>{ 
                  console.log(data);
                  //   this.respo2 = data;
                  this.respo2 = JSON.stringify(data);
                  //localStorage.setItem('code_spo',JSON.stringify(data));
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


  onSpClick(){ }

  getAuthCode(){
                this.http.get(form_graph_ms.url_auth_code).subscribe( data => console.log(data),
                                                                      error => console.log(error),
                                                                      () => console.log('completed!')  )
  }

  form_graph_ms_tmp = {};
  form_graph_azure_tmp = {};

  ngOnInit(){      
    
    Object.entries(form_graph_ms).forEach((key) => {                                                    
                                                    this.form_graph_ms_tmp[key[0]] = key[1];
                                                  });

    Object.entries(form_graph_azure).forEach((key) => {                                                    
                                                    this.form_graph_azure_tmp[key[0]] = key[1];
                                                  });
                                                    

   }

}


// executor.executeAsync({
//   url: "<app web url>/_api/SP.AppContextSite(@target)/web
//     /lists(guid'a290086b-2d43-4151-add4-893474a930a9')/items
//     ?@target='<host web url>'",
//   method: "POST",
//   body: "{ '__metadata': { 'type': 'SP.Data.Team_x0020_tasksListItem' },
//     'Title': 'Teams incorporate feedback', 'AssignedToId': {"results":[1]},
//     'StartDate':'2014-01-29T08:00:00Z', 'DueDate':'2014-01-31T08:00:00Z',
//     'PredecessorsId': {"results":[4]} }",
//   headers: { 
//     "accept": "application/json;odata=verbose",
//     "content-type": "application/json;odata=verbose"
//   },
//   success: successHandler,
//   error: errorHandler
// });





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

 // let settings = {
  //     sp: {
  //         id: "4b93c3b2-f01b-4469-80b2-0e4784711b35",
  //         secret: "qOcEZQtn9h5G/J43j325QtTMCsHxmSJYqKpF3DlmKUg=",
  //         url: "https://interoko.sharepoint.com/teams/test",
  //         }
  //       }

  //   sp.setup({
  //       sp: {
  //             fetchClientFactory: () => {
  //               return new SPFetchClient(settings.sp.url, settings.sp.id, settings.sp.secret);
  //             },
  //           },
  //     });

  //     let list1 = sp.web.lists.getByTitle("complains");
  // console.log(JSON.stringify(list1, null, 4));


  // graph.setup({
  //   graph: {
  //       fetchClientFactory: () => {
  //           return new AdalFetchClient("interoko.sharepoint.com/teams/test", "4b93c3b2-f01b-4469-80b2-0e4784711b35", "qOcEZQtn9h5G/J43j325QtTMCsHxmSJYqKpF3DlmKUg=");
  //       },
  //   },
  // });

  // // execute a library request as normal
  // graph.groups.get().then(g => {

  //     console.log(JSON.stringify(g, null, 4));

  // }).catch(e => {
  //     console.error(e);
  // });


    // sp.setup({
    //       sp: {
    //           fetchClientFactory: () => {
    //             return new SPFetchClient("interoko.sharepoint.com/teams/test", "4b93c3b2-f01b-4469-80b2-0e4784711b35", "qOcEZQtn9h5G/J43j325QtTMCsHxmSJYqKpF3DlmKUg=");
    //           },
    //       },
    //   });

    // now make any calls you need using the configured client
    // sp.web.select("Title").get().then(w => {

    //     console.log(`Web Title: ${w.Title}`);

    // });

