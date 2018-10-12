import {Component, OnInit } from '@angular/core';

import {TreeNode, MenuItem} from 'primeng/api';

import {MessageService} from 'primeng/api';

import {EmployeeService} from '../employee.service';

import {SelectItem} from 'primeng/api';

import {Observable} from "rxjs";

import {url_graph_ms} from 'src/environments/environment.prod'



@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  providers: [MessageService],
  styleUrls: ['./structure.component.css']
  
})
export class StructureComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService,
    private messageService: MessageService) { }

    data1: TreeNode[] = [{"label":"Люксоптика",
                          "type": 'person',
                          "styleClass": 'ui-person',
                          "expanded": true,
                          "children":[{"label":"Административный департамент"}],
                          "data":{"head":{"title":"Генеральный директор", "label":"Свистун Алексей Николаевич"}}
                          }];
    
    
    data2

    selectedNode: TreeNode;
    

    url:string = 'https://graph.windows.net/interoko.onmicrosoft.com/';
    call:string = 'users?';
    api_version:string = 'api-version=1.6';
  
  
    filter:string;
    select:string = '$select=givenName,displayName,jobTitle,city,mail,telephoneNumber,phones,accountEnabled,objectType,id';
    top:string = '$top=100';
  
    full_url:string;
  
    cols: any[];
    colors: SelectItem[];
  
    deps: SelectItem[];
    top_deps = [];
  
    selectedTopDepar:SelectItem;
    selectedDepar: SelectItem;
  
    mailto: string = 'mailto:';
    tel: string = 'tel:';
 
    groups: {};
  
    users:any;
    users1:any = [];
  
    selected_top_deps;
  
    depclass:string = 'dep hidden';
  
    selecteddep: string;
  
    items1: MenuItem[];
  
    display: boolean = false;

    items: MenuItem[];

    selectedUser:any;

  onNodeSelect(event) {

      if(typeof event.node.data !== 'undefined'){
      this.messageService.clear();    
      this.messageService.add({severity: 'success', summary: event.node.data.head.title, detail: event.node.data.head.label || '' + ' ' + event.node.head.name || '' + ' ' + event.node.head.email || ''});
      //console.log(event.node.label);
      }
      this.onDepClick(event.node.label);

      //this.depclass = 'dep active';

    }

  onDepClick(indx_l): void {  
    //this.filter = "$filter=accountEnabled eq true";
    this.selecteddep = indx_l;  
    this.filter = "$filter=accountEnabled eq true and startswith(department, '" + indx_l + "')";
    this.full_url = '' + this.url + this.call + this.api_version + '&' + this.select + '&' + this.filter + '&' + this.top;
    console.log(this.full_url);
    this.employeeService.getJson(this.full_url)
          .subscribe(users => 
                            {
                            console.log('--------------start-users1------structure.comp.ts-----');                          
                            this.users = users;
                            console.log(this.users);
                            this.users1 = this.users.value;
                            //this.users1 = this.users.d.results;
                            console.log(this.users1);
                            this.users1.length > 0 ? this.depclass = 'dep active' : this.depclass = 'dep hidden';
                            this.messageService.add({severity: 'Ok', summary: 'MS Grath connection ok'});


                            // this.users1.forEach(element => {
                            //   console.log('user mail - ')
                            //   console.log(element.mail);
                            //   this.employeeService.httpRequestPhoto(element.mail, element.givenName);
                            // }); 

                            },
                    error=> {
                            this.messageService.add({severity: 'Error', summary: 'MS Grath connection failed', detail: 'status: '+ error.status});

                            if(error.status == 401){
                              localStorage.removeItem('code_ag');
                            } 
                            }
                    );
  }

count = 1;

getAvatar(email){
  console.log('getAvatar email - ' + email);

  let answer

  if(email == 'polyakov.s@opticalhouse.com.ua'){

        if(this.count < 2){
              this.count = this.count + 1;          
              answer = this.employeeService.httpRequestPhotoBlob(email);
              console.log('if email - ' + answer)
        }

    //answer = 'https://graph.microsoft.com/beta/users/polyakov.s@opticalhouse.com.ua/Photos/48X48/$value'

  }

  if(answer == null){  answer = '../assets/img/logo_ico.png' }
  
  return answer;
}

  getImage(email){
    return this.employeeService.getAvatar(email).subscribe(photo => {return photo});
  }

  sendEmail(suser) {
    this.messageService.add({ severity: 'info', summary: 'Email send to user', detail: suser.displayName + ' - ' + suser.mail });
  }  
  ngOnInit() {

    this.employeeService.getTopDepsData();
    

    if((localStorage.getItem("top_deps"))){ 

      //this.data2 = JSON.parse( localStorage.getItem("top_deps")).top_deps;
      this.data2  = JSON.parse(localStorage.getItem("top_deps")).top_deps;           
      this.data2.forEach(element => {
        this.data1[0].children.push(    element );
      });
          //console.log(this.data2);
                     
    }
    
    console.log(this.data1);

    this.items = [
      { label: 'Send email', icon: 'pi pi-cloud', command: (event) => this.sendEmail(this.selectedUser) },
      { label: 'View', icon: 'pi pi-calendar', command: (event) => { alert(this.selectedUser)} }
    ];



    this.cols = [
      { field: 'displayName', header: 'Name' },
      { field: 'jobTitle', header: 'Title' },    
      { field: 'mail', header: 'Email' },
      { field: 'telephoneNumber', header: 'Phone' }      
    ];

    

    }
}
