import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions,  Request, RequestMethod} from '@angular/http';



const headers = new Headers();
headers.append('Access-Control-Allow-Origin','*')


const options = new RequestOptions({
  method: RequestMethod.Post,
  headers: headers,
});


interface method {
  label: string;
  text: string;
};

interface param {
  label: string;
  text: string;
  encode: boolean;
};


@Component({
  selector: 'app-wikipage',
  templateUrl: './wikipage.component.html',
  styleUrls: ['./wikipage.component.css']
})
export class WikipageComponent implements OnInit {

  responcearea = '';

  httpmethod: method[] = [{label:'GET', text:'GET'}, {label:'POST', text:'POST'}]; 

  post_body: string = '';

  server:string = 'https://accounts.accesscontrol.windows.net/435a4f02-f6b2-4248-9a5c-0f355179c0df/tokens/OAuth/2';

  params : param[] = [
    {label:'grant_type', text:'authorization_code', encode: false},
    {label:'resource', text:'00000003-0000-0ff1-ce00-000000000000/interoko.sharepoint.com@435a4f02-f6b2-4248-9a5c-0f355179c0df', encode: true},
    {label:'client_id', text:'0a0000d0-0718-48a4-bda7-fa6e4b4c8a46@435a4f02-f6b2-4248-9a5c-0f355179c0df', encode: false},
    {label:'client_secret', text:'kAoT/4DFhNLIY5QnWN8y+wVDTM8K7z9aHTlLSpQq6yY=', encode: false},
    {label:'code', text:'PAQABAAIAAADXzZ3ifr-GRbDT45zNSEFEpuZRrmMygzHxmYEDDuOGl8YazW0a0g7GweZXAHlsMuwoKz-FmbYM7ziOPzGujVOGt1Q8mU63MoqGxW84crnKXorI9qY4O0dR5KFxwvBbORnHxKlHUZeHroJWmgr70tI4B2J8QDTZFtR3fsyURKj3xxsboUddt2LFcoJq1AiHCxQQGTPoz3_49WPPJIW3xrkerJkQvNSGGi-qiqqM1jjAYVvBeQ-ddc2NH0OO2DnOw8F8hnqPiZ6tl4FDtCGEPwZKLo9CwregUsmpCBosljbWWxVbqQyzLv6dK3kNHwU6S1ezGVkF4XGOOpzb9cYTLCM5IAA', encode: false },
    {label:'redirect_uri', text:'http://192.168.220.146:4200', encode: true  },
]


onFormBodyClick(){
  this.post_body = '';

  this.params.forEach(element => {
      this.post_body = this.post_body + element.label + '=' + (element.encode === true ? encodeURIComponent(element.text) : element.text) + '&';
      //this.post_body = left(this.post_body, length(this.post_body - 2));
  });
}

onSendClick(){
  this.responcearea = '';

  this.http.request(this.server, this.post_body).subscribe(response =>{ 
                                                                        console.log(response.text());
                                                                        // this.responcearea = response.text;
  })

}

  constructor(
    private http: Http,
    private options: RequestOptions
  ) {  }





  onDblClick(e){
    e = e || window.event;
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
      
    }        
  } 

  ngOnInit() { }


}
