import { Component, OnInit } from '@angular/core';

import {TreeNode, MenuItem} from 'primeng/api';

import {MessageService} from 'primeng/api';

import { EmployeeService } from '../employee.service';

import {SelectItem} from 'primeng/api';



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
    data2  = JSON.parse( localStorage.getItem("top_deps")).top_deps;

    selectedNode: TreeNode;

    menuitems: MenuItem[];

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
                          console.log('--------------start-users1-----------');                          
                          this.users = users;
                          this.users1 = this.users.d.results;
                          console.log(this.users1);
                          this.users1.length > 0 ? this.depclass = 'dep active' : this.depclass = 'dep hidden';
                          },
                  error=> {
                          this.messageService.add({severity: 'error', summary: 'MS Grath connection failed', detail: 'status: '+ error.status});                            
                          });
                          
      
  }
  sendEmail(suser) {
    this.messageService.add({ severity: 'info', summary: 'Email send to user', detail: suser.displayName + ' - ' + suser.mail });
  }  
  ngOnInit() {

    this.menuitems = [
        {
            label: 'Menu',
            command: event => {console.log(event)},
            items: [
                    {label: 'Send Email', command: event => {alert(event)} },
                    {label: 'Quit'}
                    ]
                }]

    if(localStorage.getItem("top_deps")){       
           //this.data2 = JSON.parse( localStorage.getItem("top_deps")).top_deps;
      this.data2.forEach(element => {
        this.data1[0].children.push(    element );
      });
          //console.log(this.data2);
                     
    }
    
    console.log(this.data1);

    this.items = [
      { label: 'Send email', icon: 'pi pi-search', command: (event) => this.sendEmail(this.selectedUser) },
      { label: 'View', icon: 'pi pi-times', command: (event) => { alert(this.selectedUser)} }
    ];



    this.cols = [
      { field: 'displayName', header: 'Name' },
      { field: 'jobTitle', header: 'Title' },    
      { field: 'mail', header: 'Email' },
      { field: 'telephoneNumber', header: 'Phone' }      
    ];

    // this.data1 = [{
    //     label: 'Директор департамента ЦИТ',
    //     type: 'person',
    //     styleClass: 'ui-person',
    //     expanded: true,
    //     data: {name:'Ещенко Сергей Александрович', 'avatar': 'walter.jpg', phone:'8053', email: 'yeshchenko.s@luxoptica.com.ua'},
    //     children: [
    //         {
    //             label: 'Руководитель службы ТП и обеспечения',
    //             type: 'person',
    //             styleClass: 'ui-person',
    //             expanded: true,
    //             data: {name:'Романенко Максим', 'avatar': 'saul.jpg'},
    //             children:[{
    //                 label: 'КиРС',
    //                 styleClass: 'department-cfo'
    //             },
    //             {
    //                 label: 'ОдРС',
    //                 styleClass: 'department-cfo'
    //             },
    //             {
    //                 label: 'ХаРС',
    //                 styleClass: 'department-cfo'
    //             }],
    //         },
    //         {
    //             label: 'Технический директор',
    //             type: 'person',
    //             styleClass: 'ui-person',
    //             expanded: true,
    //             data: {name:'Кучер Виталий', 'avatar': 'mike.jpg'},
    //             children:[{
    //                 label: 'Отдел системного администрирования',
    //                 styleClass: 'department-coo'
    //             }]
    //         },
    //         {
    //             label: 'Директор по разработке ПО',
    //             type: 'person',
    //             styleClass: 'ui-person',
    //             expanded: true,
    //             data: {name:'Порицкий Александр', 'avatar': 'jesse.jpg'},
    //             children:[{
    //                 label: 'Отдел разработки ПО',
    //                 styleClass: 'department-cto',
    //                 expanded: true                  
    //             },
    //             {
    //                 label: 'Отдел поддержки ПО',
    //                 styleClass: 'department-cto'
    //             }]
    //         },
    //         {
    //             label: 'Директор по проектам',
    //             type: 'person',
    //             styleClass: 'ui-person',
    //             expanded: true,
    //             data: {name:'Славгородский Юрий', 'avatar': 'jesse.jpg'},
    //             children:[{
    //                 label: 'Офис управления проектами',
    //                 styleClass: 'department-cto',
    //                 expanded: true                  
    //             }]
    //         }
    //       ]
    //   }];

    }
}
