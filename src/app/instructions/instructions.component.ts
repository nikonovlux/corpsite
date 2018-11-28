import {Component,OnInit} from '@angular/core'
import {DomSanitizer,SafeUrl} from '@angular/platform-browser'
import {TreeNode} from 'primeng/api'
import {MsAdalAngular6Service} from 'microsoft-adal-angular6'
import {EmployeeService} from '../employee.service'
import {urls_departments,urls_graph} from 'src/environments/environment.prod'
import {AppComponent} from '../app.component'
import {Observable} from 'rxjs'



@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  constructor(
    private appComponent: AppComponent,
    private adal: MsAdalAngular6Service,
    private employeeService: EmployeeService,
    private domSanitizer: DomSanitizer
  ){}

  selectedFile
  selectedFolder

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
  
  imgsrc = '/assets/img/logo_ico.png'
  iframesrc
  iframeview = false
  purl

  instructions_files
  
  onPdfClick(e){
    if(e.node.type == "file"){  
                              let url3 = urls_graph.drives + e.node.data.drive + '/items/' + e.node.id + '/preview'
                              let body =
                              {
                                "type": "embed"
                              }
                              this.employeeService.getJson(url3,'ms','post',body)
                                                                .subscribe(data => {
                                                                                      console.log(data);                                                                                    
                                                                                      //this.iframeview = true                                                                                                                                                                        
                                                                                      //this.iframesrc = this.domSanitizer.bypassSecurityTrustResourceUrl(data['getUrl'])
                                                                                      this.appComponent.sidebar_r_display = true
                                                                                      this.appComponent.rbar.nativeElement.innerHTML = `<iframe id="iframe_hook" style="height: calc(100vh*0.95);" width="100%" src= "${data['getUrl']}" ></iframe>`
                                                                                    })                                                                                
  
                              } else {
                                this.appComponent.sidebar_r_display = false
                                this.instructions_files = e.node.children
                              }
                            }
  
  instructions:TreeNode[] = [
      {label:'Информационная безопасность',type: "folder", expanded:true,icon:"pi-folder",expandedIcon:"pi-folder-open",collapsedIcon:"pi-folder",children:[{label:"a1"}]},
      {label:'Приказы',type: "folder", expanded:true,icon:"pi-folder",expandedIcon:"pi-folder-open",collapsedIcon:"pi-folder",children:[{label:"a2"}]},
      {label:'HR',type: "folder", expanded:true,icon:"pi-folder",expandedIcon:"pi-folder-open",collapsedIcon:"pi-folder",children:[{label:"a3"}]}
    ];
   

  getOneDriveFolder(department,i){
   
        this.employeeService.getJson(urls_graph.drives + department.drive_id + urls_graph.rootsearch,'ms')
                            .subscribe(data =>
                                                {
                                                  let tmp1 = Object.keys(data)
                                                                        .filter(key => key == "value" )
                                                                        .map(key => data[key])[0]

                                                  // console.log('---  tmp1  ----')
                                                  // console.log(tmp1)                                                                         

                                                  let oddata = tmp1.map(item => { return {  label:item.name,
                                                                                            icon: item.folder ? 'pi pi-folder' : 'pi pi-file',
                                                                                            data:{  id:item.id,
                                                                                                    drive: department.drive_id,
                                                                                                    parent: item.parentReference.id},
                                                                                            expandedIcon: item.file ? "" : "pi pi-folder-open",
                                                                                            collapsedIcon: item.file ? "" : "pi pi-folder",
                                                                                            id:item.id,                                                                                            
                                                                                            parent:item.parentReference.id,
                                                                                            size:item.size,
                                                                                            type: item.folder ? 'folder': 'file'}})

                                                  this.instructions[i].children = this.getNestedChildren(oddata, department.public_folder)                                                                                           

                                                },
                                    error=> console.log(error))
      
  }

  public_sources: Observable<Object>
  
  ngOnInit() {    

    if(this.adal.isAuthenticated){
              this.public_sources = Observable.create(observer => { [urls_departments.InformationSecurity, urls_departments.reception,urls_departments.hr].forEach(elem =>observer.next(elem))                
              observer.complete();
    })

    let i = 0
    this.public_sources.subscribe(elem=>
                                        { 
                                          this.getOneDriveFolder(elem,i)                                        
                                          i = i + 1
                                        },
                                        error=>console.log(error),
                                        ()=> {} // console.log(this.instructions)
                                  )    
    } else {
      alert('You are not authenticated')
    }





  }
}



  //  getInstructions(){

  //   if(this.adal.isAuthenticated){
  //     this.employeeService.getJson(urls_graph.drives + urls_departments.InformationSecurity.drive_id + urls_graph.rootsearch,'ms')
  //                                       .subscribe(data =>
  //                                                       {  
  //                                                         let tmp1 = Object.keys(data)
  //                                                                               .filter(key => key == "value" )
  //                                                                               .map(key => data[key])[0]
  
  //                                                         let oddata = tmp1
  //                                                                         .map(item => {  return {  label:item.name,
  //                                                                                                   icon: item.folder ? 'pi pi-folder' : 'pi pi-file',
  //                                                                                                   data:{  id:item.id,
  //                                                                                                           drive: urls_departments.InformationSecurity.drive_id,
  //                                                                                                           parent:item.parentReference.id},
  //                                                                                                   expandedIcon: item.file ? "" : "pi pi-folder-open",
  //                                                                                                   collapsedIcon: item.file ? "" : "pi pi-folder",
  //                                                                                                   id:item.id,                                                                                                    
  //                                                                                                   parent:item.parentReference.id,
  //                                                                                                   size:item.size,
  //                                                                                                   type: item.folder ? 'folder': 'file'}})

  //                                                         oddata = this.getNestedChildren(oddata, urls_departments.InformationSecurity.public_folder)
  
  //                                                         console.log('---  infosecur  ----')
  //                                                         console.log(oddata) 
  
  //                                                         this.instructions[0].children =oddata                                                          
  
  //                                                       },
  //                                                 error=> console.log(error)
  //     )
  //     this.employeeService.getJson(urls_graph.drives + urls_departments.reception.drive_id + urls_graph.rootsearch,
  //       'ms').subscribe(data =>
  //                             {
  //                               let tmp1 = Object.keys(data)
  //                                                     .filter(key => key == "value" )
  //                                                     .map(key => data[key])[0]

  //                               let oddata = tmp1
  //                                               .map(item => {  return {  label:item.name,
  //                                                 icon: item.folder ? 'pi pi-folder' : 'pi pi-file',
  //                                                 data:{  id:item.id,
  //                                                         drive: urls_departments.reception.drive_id,
  //                                                         parent:item.parentReference.id},
  //                                                 expandedIcon: item.file ? "" : "pi pi-folder-open",
  //                                                 collapsedIcon: item.file ? "" : "pi pi-folder",
  //                                                 id:item.id,                                                  
  //                                                 parent:item.parentReference.id,
  //                                                 size:item.size,
  //                                                 type: item.folder ? 'folder': 'file'}})
                                                                                                         
                                
  //                               oddata = this.getNestedChildren(oddata, urls_departments.reception.public_folder)

  //                               console.log('---  reception  ----')
  //                               console.log(oddata) 

  //                               this.instructions[1].children=oddata                                

  //                             },
  //                       error=> console.log(error))      
  //   } else {
  //     alert('You are not authenticated')
  //   }
  // }  

                                // let url = urls_graph.drives + '/' + urls_departments.InformationSecurity.drive_id + '/items/' + e.node.id + '/thumbnails?'
                              // this.employeeService.getJson( url,
                              //                             'ms').subscribe(data => {
                              //                                                         console.log(data)
                              //                                                         let tmp = data;
                              //                                                         this.imgsrc = tmp['value'][0].large.url;
                              //                                                     })
                              // let url2 = urls_graph.drives + e.node.data.drive + '/items/' + e.node.id                                                                                
                              // this.employeeService.getJson( url2,
                              //                             'ms').subscribe(data => {
                              //                                                         console.log(data);
                                                                                      
                              //                                                         //this.purl = this.domSanitizer.bypassSecurityTrustResourceUrl(data['webUrl'])
                              //                                                         this.purl = data['webUrl']
                                                                                      
                              //                                                     })
