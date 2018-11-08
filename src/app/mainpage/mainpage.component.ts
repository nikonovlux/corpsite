import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import {MenuItem} from 'primeng/api';

import {MsAdalAngular6Service} from 'microsoft-adal-angular6';
import {EmployeeService} from '../employee.service';

import {urls_graph} from 'src/environments/environment.prod'
import { TreeTable } from 'primeng/primeng';
import {TreeNode} from 'primeng/api';







@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(
    private adal: MsAdalAngular6Service,
    private employeeService: EmployeeService
  ){

  }

  @ViewChild('dttb') private dttb:any;
  
  title = 'App';
  

  digests;
  orders;

  top_menu: MenuItem[];

  files_menu: MenuItem[] = [
    {label: 'Инструкция SD'},
    {label: 'Приказы'},
    {label: 'Дайджесты'},
    {label: 'Emails'},
    {label: 'Events'},
    {label: 'Lists'},      // 5
    {label: 'OneDrive'}, 
    {label: 'SharedWithMe'},
    {label: 'Проекты'},
    {label: 'Itilium'}
  ];


  activeItem: MenuItem;
 
  
  email_last:any 
  files_last:any  
  events_last:any  
  lists_last:any  
  shared_last:any  
  digests_last:any  
  projects_last:any

  senders:any =
  [
    { label: 'All Users' }
  ]

  table_email_cols = [
    { field: 'receivedDateTime', header: 'Date' },
    { field: 'sender', header: 'Sender' },
    { field: 'subject', header: 'Subject' }
];

  calendar_date: Date;

  invalidDates: Array<Date>

  month_now = new Date().getMonth();
  year_now = new Date().getFullYear();

  onedrivefolders:TreeNode[] = [{label:'MyOneDrive', children:[]}];

  selectedFile: TreeNode;

  contextmenu_items: MenuItem[];


  getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days: Array<Date> = [];
    while (date.getMonth() === month) {
       days.push(new Date(date));
       date.setDate(date.getDate() + 1);
    }
    return days;
}
 
  @ViewChild('menuItems') menu: MenuItem[];
  
  activateMenu(){
    this.activeItem = this.menu['activeItem'];
    // console.log(this.activeItem);
    // console.log(this.menu['activeItem']);
  }



  getItilium(){
  
    if(this.adal.isAuthenticated){         
         this.employeeService.curryGetMs(urls_graph.drives).subscribe(data=>{ });         
    }    
  }



  getProjects(){
  
    if(this.adal.isAuthenticated){
      this.employeeService.getJson( urls_graph.projects,
                                    'ms').subscribe(data =>
                                                          {                                                            
                                                            this.projects_last  = Object.keys(data).filter(key => key == "value" ).map(key => data[key])[0] 
                                                          },
                                                    error=> console.log(error)
                                                    )      
    }    
  }

  getDigests(){
  
    if(this.adal.isAuthenticated){
      this.employeeService.getJson(urls_graph.digests,
                                    'ms').subscribe(data =>
                                                          {        
                                                            this.digests_last = Object.keys(data).filter(key => key == "value" ).map(key => data[key])[0]
                                                          },
                                                    error=> console.log(error)
                                                    )      
    }    
  }



  getShared(){    
  
    if(this.adal.isAuthenticated){
      this.employeeService.getJson(urls_graph.sharedwithme,
                                    'ms').subscribe(data =>
                                                          {                                                           
                                                            this.shared_last  = Object.keys(data).filter(key => key == "value" ).map(key => data[key])[0]                                                               
                                                          },
                                                    error=> console.log(error)
                                                    )      
    }    
  }
  


getLists(){

  if(this.adal.isAuthenticated){
    this.employeeService.getJson( urls_graph.getlists,
                                  'ms').subscribe(data =>
                                                        {                                                          
                                                          this.lists_last = Object.keys(data).filter(key => key == "value" ).map(key => data[key])[0]
                                                        },
                                                  error=> console.log(error)
                                                  )    
  }
}

getEvents(){
  if(this.adal.isAuthenticated){
    this.employeeService.getJson(urls_graph.getevents,
                                'ms').subscribe(data =>
                                                      {
                                                        this.events_last  = Object.keys(data).filter(key => key == "value" ).map(key => data[key])[0]
                                                      },
                                                error=> console.log(error)
    )    
  }
}


getNestedChildren(arr, parent) {
  var out = []
  for(var i in arr) {
      if(arr[i].parent == parent) {
          var children = this.getNestedChildren(arr, arr[i].id)

          if(children.length) {
              arr[i].children = children
          }
          out.push(arr[i])
      }
  }
  return out
}


getOneDrive(){
  if(this.adal.isAuthenticated){
    this.employeeService.getJson(urls_graph.getonedrivesearch,
                                'ms').subscribe(data =>
                                                      {
                                                        this.files_last  = Object.keys(data).filter(key => key == "value" ).map(key => data[key])[0]                                                        
                                                        console.log('--- OneDrive ---')
                                                        console.log(this.files_last)


                                                        let tmp1 = Object.keys(data).filter(key => key == "value" ).map(key => data[key])[0]

                                                        let oddata = tmp1
                                                                        .map(item => {  return {  label:item.name,
                                                                                                  icon: item.file ? 'pi pi-file'  : 'pi pi-check',
                                                                                                  data:{  id:item.id,
                                                                                                          parent:item.parentReference.id},
                                                                                                  id:item.id,
                                                                                                  parent:item.parentReference.id,
                                                                                                  size:item.size,
                                                                                                  type: item.file ? 'file': 'folder'}})
                                                        
                                                        oddata = this.getNestedChildren(oddata, '01PDBPZ3F6Y2GOVW7725BZO354PWSELRRZ')

                                                        console.log('---oddata----')
                                                        console.log(oddata)

                                                        this.onedrivefolders[0].children=oddata
                                                        console.log(this.onedrivefolders);

                                                      },
                                                error=> console.log(error)
    )
  }
}

getMail(){
  if(this.adal.isAuthenticated){
    this.employeeService.getJson(urls_graph.getmail,
                                'ms').subscribe(data =>
                                                      {                                                                                                               
                                                        const tmp = Object.keys(data).filter(key => key == "value" ).map(key => data[key])[0] 
                                                        this.email_last = tmp                                                                                                                 
                                                        console.log('-----emails-----')
                                                        console.log(this.email_last)

                                                        //  let tmp0 = tmp.map(key => new Date(key.receivedDateTime)).map(key=>key.substring(8,10)).filter(this.onlyUnique).sort())

                                                        let valid_days: number[] = tmp.map(item => new Date(item.receivedDateTime)).map(item => item.getDate())
                                                        this.invalidDates = this.invalidDates.filter( item => !valid_days.includes(item.getDate()) )
                                                        //console.log(valid_days)    



                                                        let senders2push = tmp.map(email => {
                                                                                              return {label: email.sender.emailAddress.name,
                                                                                                      value: email.sender.emailAddress.name  }})
                                                                              //.filter(this.onlyUnique) 

                                                        //console.log('---senders2push---')
                                                        //console.log(senders2push)                     
                                                        
                                                        let senders2push1 = this.getUniqueValuesOfKey(senders2push,'label')
                                                                                                                    .map(item => { return { label:item, value:item} })
                                                                                                                          .sort((a, b) => {
                                                                                                                                            return a['value'] - b['value'];
                                                                                                                                          })

                                                        //console.log('---senders2push1---')
                                                        //console.log(senders2push1)
                                                        

                                                        senders2push1.forEach(element => {
                                                          this.senders.push(element)
                                                        });
                                                        //console.log('-----senders-----')
                                                        //console.log(this.senders)
                                                      },
                                                error=> console.log(error)
    )    
  }
}

onDateSelect(){
  //"2018-10-29T08:00:34Z"
  //let date  
  //date = this.calendar_date.toISOString().substring(0, 10)
  let date = new Date(this.calendar_date.getTime() - (this.calendar_date.getTimezoneOffset() * 60000)).toISOString().substring(0, 10);
  console.log(date)
  this.dttb.filter(date, 'receivedDateTime', 'contains')

}

// .sort()                                                                                                                                      
// .reduce((a, x) => a.includes(x) ? a : [...a, x], [])
// .filter((x, i, a) => !i || x != a[i-1])
getUniqueValuesOfKey(array, key){

  return array.reduce(  function(carry, item){                                            
                                            if(item[key] && !~carry.indexOf(item[key])) carry.push(item[key]);
                                            return carry;
                                            },
                        []
                        );
}

onlyUnique(value, index, self) { 
    //console.log(value)
    return self.indexOf(value) === index;
}



  ngOnInit(){ 

    
    this.contextmenu_items = [
      { label: 'Send link by email', icon: 'pi pi-cloud', command: (event) => { 
                                                                        console.log(this.selectedFile);                                                                        
                                                                        alert(this.selectedFile.label);}
        },
      { label: 'Share', icon: 'pi pi-calendar', command: (event) => { 
                                                                    console.log(this.selectedFile); 
                                                                    alert(this.selectedFile.label)}
        }
    ];


    this.invalidDates = this.getDaysInMonth(new Date().getMonth(), new Date().getFullYear())


    this.getDigests()
    this.getShared()
    this.getLists()
    this.getEvents()
    this.getMail()
    this.getOneDrive()


    this.activeItem = this.files_menu[0];
    
    this.top_menu = [
      { label: 'Информация',  icon: ' pi pi-bar-chart'},
      { label: 'Инструкции', command: event => console.log(event), icon: 'pi pi-calendar', items: [
      [
        {
          label: "Безопасность рабочего места",
          items: [
            { label: "Инструкция №1" },
            { label: "Инструкция №2" }
          ]
        }
      ],
      [
        {
          label: "Информационная безопасность",
          items: [
            { label: "Инструкция №1", command: event => alert(event) },
            { label: "Инструкция №2", command: event => console.log(event) }
          ]
        }
      ]
    ]
      },
      {label: 'Приказы', icon: 'pi pi-book'},
      {label: 'Поддержка', icon: 'pi pi-support'}
    ];
 
  }

}




    // if (window.location.hash.length){

    //     localStorage.setItem('text_url_hash',  window.location.hash);

    //     let my_time:string =  Date.now().toString();

    //     let urlHashs = new URLSearchParams(window.location.hash);

    //     let id_token:string = urlHashs.get('id_token');
    //     let state:string = urlHashs.get('state');
    //     let session_state:string = urlHashs.get('session_state');

    //     if(id_token){       
    //       localStorage.setItem('id_token', id_token);
    //       localStorage.setItem('s_state', session_state);
    //       localStorage.setItem('state', state);
    //       localStorage.setItem('time', my_time);
    //     }

    // }

    // if (window.location.search.length){

    //   localStorage.setItem('text_url_params',  window.location.search);

    //   let my_time:string =  Date.now().toString();

    //   let urlParams = new URLSearchParams(window.location.search);
    
    //   let myCode:string = urlParams.get('code');
    //   let mySessionState:string = urlParams.get('session_state');
    //   let myState:string = urlParams.get('state');
      
    //   if(myCode){
    //     localStorage.setItem('session_code', myCode);
    //     localStorage.setItem('session_state', mySessionState);
    //     localStorage.setItem('session_state2', myState);
    //     localStorage.setItem('session_time', my_time)
    //   }

    // }


                                                            // let folders = tmp1
                                                        //           .filter(item => item.folder)
                                                        //           .map(item => {
                                                        //                 return {
                                                        //                   label:item.name,
                                                        //                   data: {id:item.id, size:item.size },
                                                        //                   icon: "pi pi-check",
                                                        //                   expandedIcon: "pi pi-check",
                                                        //                   collapsedIcon: "pi pi-check",
                                                        //                   type:'folder',
                                                        //                   children: []
                                                        //                 }
                                                        //               })
                                                        // //console.log('--- folders ---')
                                                        // //console.log(folders)

                                                        // folders.forEach(element => {
                                                        //   //this.onedrivefolders[0].children.push(element)
                                                        //   this.onedrivefolders.push(element)
                                                        // });

                                                        // let files = tmp1
                                                        //           .filter(item => item.file)
                                                        //           .map(item => {
                                                        //                 return {
                                                        //                   label:item.name,
                                                        //                   data:{id:item.id, size:item.size },
                                                        //                   icon: "pi pi-file",
                                                        //                   type:'file'
                                                        //                 }
                                                        //               })
                                                        // //console.log('--- files ---')
                                                        // //console.log(files)

                                                        // files.forEach(element => {
                                                        //   //this.onedrivefolders[0].children.push(element)
                                                        //   this.onedrivefolders.push(element)
                                                        // });

                                                        
                                                        // //console.log(this.onedrivefolders)



                                                            //  setInterval(  () => observer.next(  new Date()), 5000  )   // .toString()   // works!
    //  observer.complete;  

    // ()=>{
    //   for(let i = 0; i < arr.length; i++){
    //     i==3 ? i=0 : i=i   
    //     return arr[i]
    //   }} 