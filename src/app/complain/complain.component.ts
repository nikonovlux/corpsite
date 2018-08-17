import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})
export class ComplainComponent implements OnInit {

  constructor(public restService: RestService) { }

  

  SendComplain() {

    // this.restService.getUser().subscribe(response => this.restdata = response.text() );
    
    this.restService.getList()
      .subscribe(response =>
        {
          console.log("recieved");
          console.log(response);

          Object.values(response).forEach(element => {
                            console.log(element);
                          });
        }
      );

    console.log("clicked");
   
  }

  ngOnInit() {
  }

}
