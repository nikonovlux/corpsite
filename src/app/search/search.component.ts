import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService }  from '../http.service';


interface Employee{
  id:string,
  name:string,
  position:string,
  phone:string,
  mail:string
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  employees //: Observable<Employee>;

  constructor(
    private route: ActivatedRoute,    
    private http: HttpService
  ) { }


  onClick(){


  }

  ngOnInit() {

    this.route.paramMap.pipe(
                              switchMap((params:ParamMap) => {
                                                                return this.http.getEmployee(params.get('query'))
                                                                }
                            ))
                        .subscribe(data => {
                                          let tmp1 = Object.keys(data)
                                                              .filter(key => key == "value" )
                                                              .map(key => data[key])[0]
                                          this.employees = tmp1
                                          console.log(this.employees)
                                    })

    }
  }



  
    //  gotoEmployees(params.get('query'))
    //  console.log(  this.route.paramMap)


    // this.employees = this.route.paramMap.pipe(
    //   switchMap(  (params: ParamMap)  =>
    //                                     {
    //                                       let url = params.get('query')
    //                                       console.log(url)
    //                                       return this.http.getEmployee(url)
    //                                     }
    //             ))