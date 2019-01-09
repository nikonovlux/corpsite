import {Component,OnInit,ElementRef,ViewChild,Output } from '@angular/core';

import {TreeNode, MenuItem} from 'primeng/api';

import {MessageService} from 'primeng/api';

import {HttpService} from '../http.service';

import {SelectItem} from 'primeng/api';

import {urls,form_graph_azure_interface,form_graph_ms_interface} from 'src/environments/environment.prod';

//import { map } from "rxjs/operators";

//import 'rxjs/add/operator/map';

import {DomSanitizer,SafeUrl} from '@angular/platform-browser'
import { EventEmitter } from 'events';


@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  providers: [MessageService],
  styleUrls: ['./structure.component.css']
   
})
export class StructureComponent implements OnInit {

  constructor(    
    private HttpService: HttpService,
    private messageService: MessageService,
    private domSanitizer: DomSanitizer
    ) { }

    data1: TreeNode[] = [{"label":"Люксоптика",
                          "type": 'department',
                          "styleClass": 'no-display',
                          "expanded": true,                          
                          "children":[{"label":"Административный департамент","type": "department",
                          "data":{"head":{"title":"Секретарь", "type": "person", "styleClass": "ui-person", "name":""}},
                          "children":[
                                      {"label":"Администрация"},
                                      {"label":"Административно отдел"},
                                      {"label":"Административный отдел"},
                                      {"label":"Административный отдел Холдинга ОД"}                                      
                                    ]}],
                          "data":{"head":{"title":"Генеральный директор", "name":"Свистун Алексей Николаевич"}}
                          }];
    
    
    data2

    selectedNode: TreeNode;
    selectedRow: TreeNode;
    selectedNode_pre: TreeNode;
    

    //url:string = 'https://graph.windows.net/interoko.onmicrosoft.com/';
    url:string = 'https://graph.microsoft.com/beta/';
    call:string = 'users?';
    //api_version:string = 'api-version=1.6';
  
  
    filter:string;
    select:string = '$select=givenName,displayName,jobTitle,city,mail,mobilePhone,accountEnabled,id';
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
    items_tree: MenuItem[];

    selectedUser:any;
    
    form_graph_ms_tmp: form_graph_ms_interface;
    form_graph_azure_tmp: form_graph_azure_interface;

    auth_code:string;

    iframe_body:ElementRef;

    wurl = window.URL

    @ViewChild('form_azure') private form_azure:ElementRef;
    @ViewChild('form_ms') private form_ms:ElementRef;
    @ViewChild('my_iframe_azure') private my_iframe_azure:ElementRef;
    @ViewChild('my_iframe_ms') private my_iframe_ms:ElementRef;
        

    unExpandNode(node:TreeNode){
        if(node.children){
        node.expanded != true && node.type=='department' ? node.expanded = true : node.expanded = false;

        //this.selectedNode_pre.expanded = false;
        }
      }

    onRowSelect(event){    
      console.log(event)
      
    }

    onNodeSelect(event) {

        this.unExpandNode(this.selectedNode);

        if(typeof event.node.data !== 'undefined'){
            this.messageService.clear();    
            this.messageService.add({severity: 'success', summary: event.node.data.head.title, detail: event.node.data.head.name || '' + ' ' + event.node.data.head.name || '' + ' ' + event.node.data.head.email || ''});
            //console.log(event.node.label);
        }
        this.onDepClick(event.node.label);

        //this.depclass = 'dep active';

      }

    onChildrenSearch(node: TreeNode[], dep_name = "", arr_all = []){
    
          node.forEach( elem => {
              if(elem.label == dep_name){
                  arr_all = elem.children
              }
          })

      return arr_all

    }

    onDepClick(indx_l): void {  
              //this.filter = "$filter=accountEnabled eq true";
              this.selecteddep = indx_l;  
              //this.filter =  "$filter=Department eq '" + indx_l + "' and accountEnabled eq true"
              this.filter =  "$filter=startswith(Department, '" + indx_l + "')  and accountEnabled eq true"   // Department eq '" + indx_l + "' or 
              //this.filter = "$filter=accountEnabled eq true and startswith(department, '" + indx_l + "')";
              this.full_url = '' + this.url + this.call  + '&' + this.select + '&' + this.filter + '&' + this.top //+ this.api_version;
              console.log(this.full_url);
              this.HttpService.connectUrl(this.full_url)('get')()
                  .subscribe( users => 
                                      {
                                      console.log('--------------start-users1------structure.comp.ts-----');                          
                                      this.users = users;
                                      console.log(this.users);
                                      this.users1 = this.users.value;
                                      //this.users1 = this.users.d.results;
                                      console.log(this.users1);
                                      this.users1.length > 0 ? this.depclass = 'dep active' : this.depclass = 'dep hidden';
                                      this.messageService.add({severity: 'Ok', summary: 'MS Grath connection ok', detail: 'Query startswith "' + indx_l  + '"'});


                                      // this.users1.forEach(element => {
                                      //   console.log('user mail - ')
                                      //   console.log(element.mail);
                                      //   this.HttpService.httpRequestPhoto(element.mail, element.givenName);
                                      // }); 

                                      },
                              error=> {
                                      this.messageService.add({severity: 'Error', summary: 'MS Grath connection failed', detail: 'status: '+ error.status});

                                      if(error.status == 401){
                                        localStorage.removeItem('code_ms'); // ag to ms
                                      } 
                                      }
                              );
            }

    getAvatar(event:Event){  
      this.HttpService.httpRequestPhoto_original(event['data'].mail, event['data'].mail,3)
      //this.getAsyncBlob(event['data'].mail,3)
      console.log(this.selectedRow)
    }   
   

    getAsyncBlobPromise(email:string,size:number=0){
      let size_arr =  ['48x48', '64x64', '96x96', '120x120', '240x240', '360x360','432x432', '504x504','648x648']     
      return this.HttpService.downloadResource(`https://graph.microsoft.com/beta/users/${email}/Photos/${size_arr[size]}/$value`)
    }

    photo_urls:{} = {}

    getAsyncBlob(email:string,size:number=0){      
      let size_arr =  ['48x48', '64x64', '96x96', '120x120', '240x240', '360x360','432x432', '504x504','648x648']     
      return this.HttpService.connectUrl(`https://graph.microsoft.com/beta/users/${email}/Photos/${size_arr[size]}/$value`)('blob')()
                                                                    .toPromise()
                                                                    .then( blob =>  this.photo_urls[email] = this.domSanitizer.bypassSecurityTrustResourceUrl(this.wurl.createObjectURL(blob)) )
    }

    getAvatarr(email:string,size:number=0){
      //return JSON.stringify(this.getAsyncBlobToPromise(email,size) )
      this.getAsyncBlobPromise(email,size)
    }

    sendEmail(user_info) {
      console.log('--------suser----');
      console.log(user_info);
      this.messageService.add({ severity: 'info', summary: 'Email send to user', detail: user_info.displayName + ' - ' + user_info.mail });
    }
    
    onAgClick(){
      console.log(this.my_iframe_azure);
      alert(this.my_iframe_azure)
      console.log(this.my_iframe_azure.nativeElement.contentDocument.body.innerText);
    }

    onMsClick(){
      console.log(this.my_iframe_ms.nativeElement);
    }

    ngOnInit() {
      
      this.HttpService.getTopDepsData();
      
      if((localStorage.getItem("top_deps"))){ 

        this.data2  = JSON.parse(localStorage.getItem("top_deps")).top_deps;

        //this.data1 = this.data2;

        // this.data2.forEach(element => {
        //         this.data1.push(  element );
        // });

        this.data2.forEach( element => {
          this.data1[0].children.push(  element );
        });
                      
      }

      this.items_tree = [
        { label: 'Send complain', icon: 'pi pi-cloud', command: (event) => {
            window.location.href = 'mailto:nikonov.m@luxoptica.com.ua?subject=Жалоба на ' + this.selectedNode.label + '';
          }
        },
        { label: 'View', icon: 'pi pi-calendar', command: (event) => { alert(this.selectedUser)} }
      ];    
      
      this.items = [
        { label: 'Send email', icon: 'pi pi-cloud', command: (event) => { 
          console.log(this.selectedNode);
          if (this.selectedUser == null){
            window.location.href = 'mailto:nikonov.m@luxoptica.com.ua'
          } else {
            this.sendEmail(this.selectedUser)
          }
          }
        },
        { label: 'View', icon: 'pi pi-calendar', command: (event) => { alert(this.selectedUser)} }
      ];

      this.cols = [
        { field: 'displayName', header: 'Name' },
        { field: 'jobTitle', header: 'Title' },    
        { field: 'mail', header: 'Email' },
        { field: 'mobilePhone', header: 'Phone' }      
      ];
      
      }
}



//  this.getAvatarr('polyakov.s@opticalhouse.com.ua',0)


// beta 2 go   --------   https://graph.microsoft.com/beta/users?$select=givenName,displayName,jobTitle,city,mail,telephoneNumber,phones,accountEnabled,objectType,id&$top=100&$filter=accountEnabled eq true and startswith(department, 'Коммерческий')"

// test this.getAvatarr('nikonov.m@luxoptica.com.ua')

// avatarShown = false;

// wurl = window.URL 

// count = 0

// createImageFromBlob(image: Blob) {
//   //  this.wurl.createObjectURL(data)
//   //  console.log('---getava---')
//   return this.wurl.createObjectURL(image)
//   }


  //alert(this.selectedRow)
  //console.log(this.selectedRow)
  //console.log(event['data'].mail)

  //  alert(mail)  
  //  let mail
  //  if(this.count < 3){
  //   this.count = this.count +1
  //   return this.HttpService.getBlobThumbnail(`https://graph.microsoft.com/beta/users/${event['data'].mail}/Photos/48X48/$value`).subscribe(
  //                                                                                                                           image => {                                                                                                                                        
  //                                                                                                                                       return this.createImageFromBlob(image)
  //                                                                                                                                     })}



        //  window.location.href = form_graph_ms.url_auth_code;  // ok


                      //   window.iframeLoad = function(){
                      //     if (! _this.submitted) {
                      //         document.getElementById('aForm').submit();
                      //     }
                      //     _this.submitted = true;
                      //  };

                      //   <iframe id="iFrame" name="iFrame" src="iframeUrl" height="500" width="400" border=0 onload="iframeLoad()">
                      //   <p>Your browser does not support iframes.</p>
                      //    </iframe>


                      //     <form target="frame" action="<Your URL to POST>" #form method="POST" hidden="hidden">
                      //     <input name="token" value={{token}}>
                      // </form>

                      // And call nativeElement.submit() from nginint() in your component.

                      // if(this.form_azure.nativeElement.submit()){
                      //   alert('ok');
                      // }


                      // getAvatar1(email){

                      //   console.log('getAvatar email - ' + email);
                      
                      //   let answer
                      
                      //   if(email == 'polyakov.s@opticalhouse.com.ua'){
                      
                      //     alert(email)
                          
                      
                      //     // if(this.avatarShown == "false"){
                      //     //       this.avatarShown = true;          
                      //     //       answer = this.HttpService.httpRequestPhotoBlob(email);
                      //     //       console.log('if email - ' + answer)
                      //     // }
                      
                      //     //  answer = 'https://graph.microsoft.com/beta/users/polyakov.s@opticalhouse.com.ua/Photos/48X48/$value'
                      
                      //   }
                      
                      //   if(answer == null){  answer = '../assets/img/logo_ico.png' }
                        
                      //   return answer;
                      
                      // }




      //.subscribe( data => )
      //.subscribe( data => { return this.wurl.createObjectURL(data) })
      //.map(blob => this.wurl.createObjectURL(blob))
      //.map(res => res.json().data)
      //.map(blob => { return  this.wurl.createObjectURL(blob)})
      //.then()
      //.then(response => response.json().data)                      