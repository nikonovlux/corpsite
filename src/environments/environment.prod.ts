export const environment = {
  production: true,
  apiHost: ''  
}

export interface form_graph_azure_interface {
  resource:string,
  client_id:string,
  client_secret:string,  
  redirect_uri:string,
  grant_type:string 
};

export interface form_graph_ms_interface {
  redirect_uri:string,
  client_id:string,
  client_secret:string,  
  grant_type:string,
  code:string, 
  scope:string
};


export const urls =
{
  'auth':'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
  'token':'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  "url_auth_implicit":"https://login.microsoftonline.com/interoko.onmicrosoft.com/oauth2/v2.0/authorize?client_id=8557d00c-fd93-4abc-b48a-66eea1f08ed7&response_type=token&redirect_uri=https://corpsite.opticalhouse.com.ua:4200/mainpage&scope=openid&response_mode=fragment&state=31254&nonce=135790",
  "url_auth_code":"https://login.microsoftonline.com/interoko.onmicrosoft.com/oauth2/v2.0/authorize?client_id=8557d00c-fd93-4abc-b48a-66eea1f08ed7&response_mode=fragment&response_type=id_token&redirect_uri=https://corpsite.opticalhouse.com.ua:4200/mainpage&scope=User.Read",
  "url":"https://login.microsoftonline.com/interoko.onmicrosoft.com/oauth2/v2.0/token",
  "me":"https://graph.microsoft.com/beta/me"
}

export const adal_config =
{ 
  scope:  'openid',
  response_mode:  'fragment',
  state:  '31254',
  nonce:  '135790',
  response_type:  'token', 
  resource: 'https://graph.microsoft.com/',
  tenant: 'interoko.onmicrosoft.com',  // common for all ms accounts
  clientId: '8557d00c-fd93-4abc-b48a-66eea1f08ed7',                                  
  redirectUri: 'https://corpsite.opticalhouse.com.ua:4200/mainpage',
  endpoints: {
              //"graph_azure": "https://graph.windows.net/interoko.onmicrosoft.com/",
              'https://interoko.sharepoint.com/_api/': 'https://interoko.sharepoint.com',
              //"sharePointUri": "https://interoko.sharepoint.com/",              
              'graphApiUri': 'https://graph.microsoft.com/',
              },
  navigateToLoginRequestUrl: false,
  postLogoutRedirectUri: 'https://corpsite.opticalhouse.com.ua:4200/mainpage',
  cacheLocation: 'localStorage' //    '<localStorage / sessionStorage>'
}

export const adal_config_original =
{  
  resource: "https://graph.microsoft.com/",
  tenant: 'interoko.onmicrosoft.com',  // comon for all ms accounts
  clientId: '8557d00c-fd93-4abc-b48a-66eea1f08ed7',                                  
  redirectUri: "https://corpsite.opticalhouse.com.ua:4200/mainpage",
  endpoints: {
              //"graph_azure": "https://graph.windows.net/interoko.onmicrosoft.com/",
              'https://interoko.sharepoint.com/_api/': 'https://interoko.sharepoint.com',
              //"sharePointUri": "https://interoko.sharepoint.com/",              
              "graphApiUri": "https://graph.microsoft.com/",
              },
  navigateToLoginRequestUrl: false,
  postLogoutRedirectUri: 'https://corpsite.opticalhouse.com.ua:4200/mainpage',
  cacheLocation: 'localStorage' //    '<localStorage / sessionStorage>'
}

export const form_graph_ms = {
  "Content-Type":"application/x-www-form-urlencoded",
  "client_id":"8557d00c-fd93-4abc-b48a-66eea1f08ed7",
  "client_secret":"",
  "code":"",
  "redirect_uri":"https://corpsite.opticalhouse.com.ua:4200/mainpage",
  "grant_type":"authorization_code",
  "scope":"https://graph.microsoft.com/User.Read" // scope=https%3A%2F%2Fgraph.microsoft.com%2Fmail.read
}
