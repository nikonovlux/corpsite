import { Component } from '@angular/core';
import {graph_params, login_token_url} from 'src/environments/environment.prod'

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
  }

}
