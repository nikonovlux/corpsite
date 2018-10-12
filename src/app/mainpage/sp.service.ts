import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable} from '@angular/core';

import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

  

 
@Injectable()
export class SPService {
    constructor( 
                private http: HttpClient,
                private adalSvc: MsAdalAngular6Service
                ){ }

    ngOnInit() { }

}


