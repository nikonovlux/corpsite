import {Component,OnInit} from '@angular/core';
import {DomSanitizer,SafeUrl} from '@angular/platform-browser';
import {TreeNode} from 'primeng/api';
import {MsAdalAngular6Service} from 'microsoft-adal-angular6';
import {EmployeeService} from '../employee.service';
import {urls_departments,urls_graph} from 'src/environments/environment.prod';
import {AppComponent} from '../app.component'



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
  
  onPdfClick(e){
    if(e.node.type == "file"){
                              // let url = urls_graph.drives + '/' + urls_departments.InformationSecurity.drive_id + '/items/' + e.node.id + '/thumbnails?'
                              // this.employeeService.getJson( url,
                              //                             'ms').subscribe(data => {
                              //                                                         console.log(data)
                              //                                                         let tmp = data;
                              //                                                         this.imgsrc = tmp['value'][0].large.url;
                              //                                                     })
                              let url2 = urls_graph.drives + '/' + urls_departments.InformationSecurity.drive_id + '/items/' + e.node.id                                                                                
                              this.employeeService.getJson( url2,
                                                          'ms').subscribe(data => {
                                                                                      console.log(data);
                                                                                      
                                                                                      //this.purl = this.domSanitizer.bypassSecurityTrustResourceUrl(data['webUrl'])
                                                                                      this.purl = data['webUrl']
                                                                                      
                                                                                  })
  
                              let url3 = urls_graph.drives + '/' + urls_departments.InformationSecurity.drive_id + '/items/' + e.node.id + '/preview'
                              let body =
                              {
                                "type": "embed"
                              }
                              this.employeeService.getJson( url3,
                                                          'ms',
                                                          'post',
                                                          body
                                                          ).subscribe(data => {
                                                                                      console.log(data);                                                                                    
                                                                                      //this.iframeview = true                                                                                                                                                                        
                                                                                      //this.iframesrc = this.domSanitizer.bypassSecurityTrustResourceUrl(data['getUrl'])
                                                                                      this.appComponent.sidebar_r_display = true
                                                                                      this.appComponent.rbar.nativeElement.innerHTML = `<iframe id="iframe_hook" style="height: calc(100vh*0.95);" width="100%" src= "${data['getUrl']}" ></iframe>`
                                                                                  })                                                                                
  
                              } else {
                                this.appComponent.sidebar_r_display = false
                              }
                            }

  instructions_last
  instructions:TreeNode[] = [{label:'Информационная безопасность', expanded:true,icon:"pi-folder",expandedIcon:"pi-folder-open",collapsedIcon:"pi-folder",children:[]}];
  
  getInstructions(){
    if(this.adal.isAuthenticated){
      this.employeeService.getJson(urls_graph.getonedrivesecurity,
                                  'ms').subscribe(data =>
                                                        {
                                                          console.log('---  data ---')
                                                          console.log(data)
  
                                                          // this.instructions_last  = Object.keys(data).filter(key => key == "value" ).map(key => data[key])[0]                                                        
                                                          // console.log('---  Instructions ---')
                                                          // console.log(this.instructions_last)
  
                                                          let tmp1 = Object.keys(data)
                                                                                .filter(key => key == "value" )
                                                                                .map(key => data[key])[0]
  
                                                          let oddata = tmp1
                                                                          .map(item => {  return {  label:item.name,
                                                                                                    icon: item.file ? 'pi pi-file' : 'pi pi-folder', // 'pi pi-check'
                                                                                                    data:{  id:item.id,
                                                                                                            parent:item.parentReference.id},
                                                                                                    expandedIcon: item.file ? "" : "pi pi-folder-open",
                                                                                                    collapsedIcon: item.file ? "" : "pi pi-folder",
                                                                                                    id:item.id,
                                                                                                    parent:item.parentReference.id,
                                                                                                    size:item.size,
                                                                                                    type: item.file ? 'file': 'folder'}})
                                                                                                                                   
                                                          
                                                          oddata = this.getNestedChildren(oddata, "01RUGPFPAUYULGSQX2FRFYCICBX4AAWROS")  // "01RUGPFPAUYULGSQX2FRFYCICBX4AAWROS" // '01RUGPFPF6Y2GOVW7725BZO354PWSELRRZ' // "01RUGPFPAUYULGSQX2FRFYCICBX4AAWROS"
  
                                                          console.log('---  oddata  ----')
                                                          console.log(oddata) 
  
                                                          this.instructions[0].children=oddata
                                                          //console.log(this.instructions);
  
                                                        },
                                                  error=> console.log(error)
      )
    }
  }  

  ngOnInit() {

    this.getInstructions()

  }

}
