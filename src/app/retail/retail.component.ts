import {Component, OnInit } from '@angular/core';

import {EmployeeService} from '../employee.service';

import { LazyLoadingScriptService } from '../gmap2.directive';

import {} from 'google-maps';

interface Optic {
  address:String,
  gmapsN:String,
  gmapsS:String,
  id:String,
  mobile:String,
  phone:String,
  schedule:String,
  city:String
}


@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.css']
})


export class RetailComponent implements OnInit {

protected gmap: any;

protected mapReady(map) {
    this.gmap = map;
  //  console.log('---map---')
  //  console.log(this.gmap)
  }

geted
parsed
options: any;
overlays: any[];
optics: Optic[];
selectedOptic: Optic;

  constructor( 
    private http: EmployeeService,
    private lazyLoadService: LazyLoadingScriptService
  ) { }

onRowSelect(event) { 

  this.gmap.map.panTo({lat: parseFloat(event.data.gmapsS), lng: parseFloat(event.data.gmapsN)});
  
}

dataAvailable = false;



onParseClick(){
    //let server = 'https://192.168.131.146:4200'
    this.http.getJson("/assets/html/optics.html")
                    .subscribe(item => {
                                      this.geted = item;                                                                  
                                      console.log(this.geted)
                                    },
                              error=>{  
                                        this.geted= error.error.text;
                                        let parser=new DOMParser();
                                        let htmlDoc=parser.parseFromString(this.geted, "text/html");  
                                        this.parsed = Array.from(htmlDoc.getElementsByTagName('li'));                                                                                                                                    
                                        this.optics = this.parsed.map(item => {
                                            let info = item.dataset;
                                            info["city"]  = item.dataset.address.indexOf(",") ? item.dataset.address.substring(0, item.dataset.address.indexOf(",") ) : 'None';                                                                                                                                                
                                            return info;
                                        });
                                        //
                                        //       item.dataset.address.substring(0, item.dataset.address.indexOf(",") )
                                        //
                                        //console.log(this.optics);
                                        this.optics.forEach(element=>{
                                                                    try{                          
                                                                        this.overlays.push (  new google.maps.Marker({position: { lat: parseFloat(element.gmapsS.toString()),
                                                                                                                                  lng: parseFloat(element.gmapsN.toString())},
                                                                                                                                  icon: "/assets/img/optic_ico_48.png",
                                                                                                                                  title:element.address.toString()})   )    
                                                                    } catch {}
                                                                    this.dataAvailable=true;
                                                                });
                              })
}


ngOnInit() {

      this.lazyLoadService.loadScript('https://maps.googleapis.com/maps/api/js').subscribe(() => {
            
            this.onParseClick();

          });

    this.options = {
                    center: {lat: 50.491838, lng: 30.495094},
                    zoom: 15
                  };


    this.overlays = [
      //                 new google.maps.Marker({position: {lat: 50.49000, lng: 30.49000}, title:"ЦО"}),
      //                 new google.maps.Polygon({paths: [
                    //                                     {lat: 50.49100, lng: 30.49500},
                    //                                     {lat: 50.49199, lng: 30.49500},
                    //                                     {lat: 50.49199, lng: 30.49599},
                    //                                     {lat: 50.49100, lng: 30.49599}
                    //                                   ],  strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35 })
      //  new google.maps.Circle({center: {lat: 50.49183, lng: 30.49509}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500})
      //  new google.maps.Polyline({path: [{lat: 50.491838, lng: 30.495094},{lat: 36.8634, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
      ];

  //  let bounds =    new google.maps.LatLngBounds();
  //  this.overlays.forEach(marker => {
  //  bounds.extend(marker.getPosition());
  // });

  // setTimeout(()=> { // map will need some time to load
  //   this.map.fitBounds(bounds); // Map object used directly
  // }, 1000);

  //this.onParseClick();

  }

}
