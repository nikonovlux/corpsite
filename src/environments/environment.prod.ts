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

//  https://graph.microsoft.com/beta/sites/interoko.sharepoint.com:/teams/test:/lists/complains/items?expand=fields(select=id,Title,department)
//  https://graph.microsoft.com/beta/sites/interoko.sharepoint.com:/teams/test:/lists/complains/items?expand=fields(select=id,Title,department)

export const urls_graph = 
{
  'drives':'https://graph.microsoft.com/beta/sites/interoko.sharepoint.com/drives',
  'projects':'https://graph.microsoft.com/beta/sites/interoko.sharepoint.com/drives/b!aFuLuUnUzEe5WPgTFmlSwZhUjDmMlABPr47g2vTgGKZrTGtYNiaqQY9n94r2IARu/items/017KN5K5HB33MFTROIRBDZ3OMFPSPHDPK2',
  'digests': 'https://graph.microsoft.com/beta/sites/interoko.sharepoint.com/drives/b!1mjONJ3kvky_8BBGX7upYCT6qJM_j_tAnVNx0AV94ZkqYvu5A5SOQYZm2xC0x5yN/items/01QGYUVUC3F2DLXNHX4BB3FOCPOXYQSTXA/children',
  'sharedwithme':'https://graph.microsoft.com/beta/me/drive/sharedWithMe',
  'getlists':'https://graph.microsoft.com/beta/sites/interoko.sharepoint.com:/teams/test:/lists/complains/items?expand=fields(select=id,Title,department)',
  'getevents':'https://graph.microsoft.com/beta/me/events?$select=subject,bodyPreview,organizer,attendees,start,end,location',
  'getonedrive':'https://graph.microsoft.com/beta/me/drive/root/children',
  'getmail':'https://graph.microsoft.com/beta/me/messages?$top=18',
  'getonedrivesearch':"https://graph.microsoft.com/v1.0/me/drive/root/search(q='')",
  'getonedrivesecurity':"https://graph.microsoft.com/beta/sites/interoko.sharepoint.com/drives/b!PzA2vC1hh0ueQ3zmhy0aksfSpZ56MWxHveJBstzv5NBfXRvbBez_QJdtGPUUBILH/root/search(q='')",  
  'usersearch':"https://graph.microsoft.com/v1.0/users?$filter=startswith(givenName,'ENTER_SURName')"
}

export const urls_departments = 
{
  'InformationSecurity':{
    'url':'https://graph.microsoft.com/beta/sites/interoko.sharepoint.com:/sites/InformationSecurity',
    'drive_id':'b!PzA2vC1hh0ueQ3zmhy0aksfSpZ56MWxHveJBstzv5NBfXRvbBez_QJdtGPUUBILH'},
  'hr':'https://graph.microsoft.com/beta/sites/interoko.sharepoint.com:/sites/hr',
  'it':'https://graph.microsoft.com/beta/sites/interoko.sharepoint.com:/sites/it'
}

export const urls_instructions = 
{
  'drive_me':"01PDBPZ3F6Y2GOVW7725BZO354PWSELRRZ",

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
  postLogoutRedirectUri: 'https://corpsite.opticalhouse.com.ua:4200/mainpage', // 'https://192.168.131.146:4200/mainpage',  //
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
