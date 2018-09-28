import { Component } from '@angular/core';
import {graph_params, login_token_url} from '../environments/environment.prod'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  ngOnInit(): void {}

  setLocal:string;

onSetLocal(){
  localStorage.setItem('code2',this.setLocal);
  console.log('Code2 set');
}

  onGetTokenClick(){

    // let params = graph_params;

    // let first: boolean = true;

    // for (var prop in graph_params) {
      
    //   first ? params = '' : params = params + '&';

    //   first = false;

    //   console.log(prop + "=" + graph_params[prop]);
    //   params = params + String(prop) + "=" + encodeURIComponent(graph_params[prop]);

    // }

    // alert(login_token_url);


    // var xhr = new XMLHttpRequest();
    
    // xhr.open("POST", login_token_url, true);
    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
    // //xhr.onreadystatechange;
    
    // xhr.send(JSON.stringify(params));

    
  }

}
//https://login.microsoftonline.com/435a4f02-f6b2-4248-9a5c-0f355179c0df/oauth2/authorize?resource=https://graph.windows.net&client_id=937a47e8-b6ad-4226-8d28-4940d9662ac9&client_secret=9/o/DYn+yzQsLqheMjWodnqUEBvgk7xykRNYONT/tXs=&grant_type=client_credentials
//console.log(prop + "=" + graph_params[prop]);
//window.location.href= "https://login.microsoftonline.com/435a4f02-f6b2-4248-9a5c-0f355179c0df/oauth2/authorize?response_type=id_token&client_id=937a47e8-b6ad-4226-8d28-4940d9662ac9&redirect_uri=http%3A%2F%2F192.168.220.146%3A4200%2Fmainpage"


