import { Injectable } from '@angular/core'; 

@Injectable() 

export class ConfigService { 

constructor() { 

    } 

public get getAdalConfig(): any { 

return { 

tenant: '435a4f02-f6b2-4248-9a5c-0f355179c0df', 

clientId: '937a47e8-b6ad-4226-8d28-4940d9662ac9', 

redirectUri: window.location.origin + '/', 

//postLogoutRedirectUri: window.location.origin + '/' 

postLogoutRedirectUri: 'http://localhost:4200/logout'

        }; 

    } 

} 
