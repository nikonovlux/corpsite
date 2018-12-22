export const environment = {
  production: true,
  apiHost: '' ,
  web: 'https://interoko.sharepoint.com/sites/corportal' 
}

export interface form_graph_azure_interface {
  resource:string,
  client_id:string,
  client_secret:string,  
  redirect_uri:string,
  grant_type:string 
};

export interface SP_Fields {
                          Title:string,
                          employee_surname?:string,
                          employee_name?:string,
                          employee_position?:string,
                          department:string,
                          subject:string
                        };

export interface SP_List_post {  
  fields:SP_Fields
};

export interface form_graph_ms_interface {
  redirect_uri:string,
  client_id:string,
  client_secret:string,  
  grant_type:string,
  code:string, 
  scope:string
};


// https://graph.microsoft.com%2F   - space permission

export const urls =
{
  auth:'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
  token:'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  url_auth_implicit:"https://login.microsoftonline.com/interoko.onmicrosoft.com/oauth2/v2.0/authorize?client_id=8557d00c-fd93-4abc-b48a-66eea1f08ed7&response_type=token&redirect_uri=https://corpsite.opticalhouse.com.ua:4200/mainpage&scope=openid%20https://graph.microsoft.com/Sites.ReadWrite.All&response_mode=fragment&state=31254&nonce=135790",
  url_auth_code:"https://login.microsoftonline.com/interoko.onmicrosoft.com/oauth2/v2.0/authorize?client_id=8557d00c-fd93-4abc-b48a-66eea1f08ed7&response_mode=fragment&response_type=id_token&redirect_uri=https://corpsite.opticalhouse.com.ua:4200/mainpage&scope=User.Read",
  url:"https://login.microsoftonline.com/interoko.onmicrosoft.com/oauth2/v2.0/token",
  me:"https://graph.microsoft.com/beta/me"
}

export const implicit_auth =
{
url_auth_implicit:"&response_mode=fragment&state=31254&nonce=135790",
url:'https://login.microsoftonline.com/interoko.onmicrosoft.com/oauth2/v2.0/',
auth_command:'authorize?',
client_id:'8557d00c-fd93-4abc-b48a-66eea1f08ed7',
response_type:'token',
redirect_uri:'https://corpsite.opticalhouse.com.ua:4200/mainpage',
scope_permissions: {  'openid':'openid',
                      'Sites.ReadWrite.All':'https://graph.microsoft.com/Sites.ReadWrite.All', // 
                      space:'%20',
                      slash:'%2F'
                    }
}


//  https://graph.microsoft.com/beta/sites/interoko.sharepoint.com:/teams/test:/lists/complains/items?expand=fields(select=id,Title,department)
//  https://graph.microsoft.com/beta/sites/interoko.sharepoint.com:/sites/corportal:/lists/results




export const urls_graph = 
{
  'rootsearch':"/root/search(q='')",
  'drives':'https://graph.microsoft.com/beta/sites/interoko.sharepoint.com/drives/',
  'projects':'https://graph.microsoft.com/beta/sites/interoko.sharepoint.com/drives/b!aFuLuUnUzEe5WPgTFmlSwZhUjDmMlABPr47g2vTgGKZrTGtYNiaqQY9n94r2IARu/items/017KN5K5HB33MFTROIRBDZ3OMFPSPHDPK2',
  'digests': 'https://graph.microsoft.com/beta/sites/interoko.sharepoint.com/drives/b!1mjONJ3kvky_8BBGX7upYCT6qJM_j_tAnVNx0AV94ZkqYvu5A5SOQYZm2xC0x5yN/items/01QGYUVUC3F2DLXNHX4BB3FOCPOXYQSTXA/children',
  'sharedwithme':'https://graph.microsoft.com/beta/me/drive/sharedWithMe',
  'getlists':'https://graph.microsoft.com/beta/sites/interoko.sharepoint.com:/teams/test:/lists/complains/items?expand=fields(select=id,Title,department)',
  'getevents':'https://graph.microsoft.com/beta/me/events?$select=subject,bodyPreview,organizer,attendees,start,end,location',
  'getonedrive':'https://graph.microsoft.com/beta/me/drive/root/children',
  'getmail':'https://graph.microsoft.com/beta/me/messages?$top=15',
  'getonedrivesearch':"https://graph.microsoft.com/v1.0/me/drive/root/search(q='')",
  'getonedrivesecurity':"https://graph.microsoft.com/beta/sites/interoko.sharepoint.com/drives/b!PzA2vC1hh0ueQ3zmhy0aksfSpZ56MWxHveJBstzv5NBfXRvbBez_QJdtGPUUBILH/root/search(q='')",  
  'usersearch':"https://graph.microsoft.com/v1.0/users?$filter=startswith(givenName,'ENTER_SURName')"
}

// https://graph.microsoft.com/beta/sites/interoko.sharepoint.com:/sites/it:/drive // find drive

export const graph_resourses = {
  'list':':/lists/',
  'drive':':/drive/'
}

export const urls_departments = 
{
  'corportal':{
    'url':'https://graph.microsoft.com/beta/sites/interoko.sharepoint.com:/sites/corportal'},
  'InformationSecurity':{
    'url':'https://graph.microsoft.com/beta/sites/interoko.sharepoint.com:/sites/InformationSecurity',
    'public_folder':'01RUGPFPAUYULGSQX2FRFYCICBX4AAWROS',
    'drive_id':'b!PzA2vC1hh0ueQ3zmhy0aksfSpZ56MWxHveJBstzv5NBfXRvbBez_QJdtGPUUBILH'},
  'hr':{
    'url':'https://graph.microsoft.com/beta/sites/interoko.sharepoint.com:/sites/hr',
    'drive_id':'b!1mjONJ3kvky_8BBGX7upYCT6qJM_j_tAnVNx0AV94ZkqYvu5A5SOQYZm2xC0x5yN',
    'public_folder':'01QGYUVUC3F2DLXNHX4BB3FOCPOXYQSTXA'},  // "01QGYUVUF6Y2GOVW7725BZO354PWSELRRZ"
  'it':{
    'url':'https://graph.microsoft.com/beta/sites/interoko.sharepoint.com:/sites/it',
    'drive_id':'b!GOQpC4hrQ0SWFEJcIulxGNR3hDraLRpImouGb7JKyhvBuxUkGj4XQ6e3FavhZUKB'},  
  'reception':{
      'url':'https://graph.microsoft.com/beta/sites/interoko.sharepoint.com:/sites/reception',
      'public_folder':'01ZG5MZ4G7CL4EAEDR3ZFLDLPCGMBVJLED',
      'drive_id':'b!IWREt0TEHUyf1OooW2OX0l39tkUTSBBPvxnxsCDBls_kzV36EwgxTrikw1Ect_6L'}
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



export const survey =
{
  topic1 : [{ label:'Выбор', text:'Выбор'}],

  dep1 : [
    { label:'Выбор обращения', value:null},
    { label:'Сообщить о ошибке/баге (Corpsite)', value:{
      id:1,
      name: "ошибки",
      code: '1',
      topics: [
                { label:'Выбор типа ошибки', value:{ id:11, text:null}},
                { label:'Грамматическая ошибка', value:{ id:12, label:'Грамматическая ошибка', text:'Грамматическая ошибка - укажите раздел сайте где обнаружена ошибка'}},
                { label:'Орфографическая ошибка', value:{ id:13, label:'Орфографическая ошибка', text:'Орфографическая ошибка - укажите раздел сайте где обнаружена ошибка'}},
                { label:'Пунктуационная ошибка', value:{ id:14, label:'Пунктуационная ошибка', text:'Пунктуационная ошибка - укажите раздел сайте где обнаружена ошибка'}},
                { label:'Программный баг', value:{ id:14, label:'Программный баг', text:'Программный баг - укажите раздел сайте где обнаружен баг'}}
              ]
     }},
    { label:'Обращение на sd@luxoptica.ua для ИТ', value:{
      id:1,
      name: "ошибки",
      code: '1',
      topics: [
                { label:'Выбор Департамента для обращения', value:{ id:11, text:null}},
                { label:'Техническая поддержка', value:{ id:12, label:'Техническая поддержка', text:'Техническая поддержка - опишите проблему'}},
                { label:'Програмное администрирование', value:{ id:13, label:'Програмное администрирование', text:'Програмное администрирование - опишите проблему'}},
                { label:'Разработка и внедрение', value:{ id:14, label:'Разработка и внедрение', text:'Разработка и внедрение - опишите проблему'}}
              ]      
    }},
    { label:'Оформить жалобу', value:{ 
      id:1,
      name: "Жалоба",
      code: '1',
      topics: [
                { label:'Выбор темы жалобы', value:{ id:11, text:null}},
                { label:'Розница', value:{ id:12, label:'Розница', text:'Розница - опишите проблему'}},
                { label:'Склад', value:{ id:13, label:'Склад', text:'Склад - опишите проблему'}},
                { label:'ИТ', value:{ id:14, label:'ИТ', text:'ИТ - опишите проблему'}},
                { label:'Логистика', value:{ id:14, label:'Логистика', text:'Логистика - опишите проблему'}}
              ] 
    }},
    { label:'Отправить идею', value:{ 
      id:1,
      name: "Идея",
      code: '1',
      topics: [
                { label:'Выбор темы идеи', value:{ id:11, text:null}},
                { label:'Розница', value:{ id:12, label:'Розница', text:'Розница - опишите идею'}},
                { label:'Склад', value:{ id:13, label:'Склад', text:'Склад - опишите идею'}},
                { label:'ИТ', value:{ id:14, label:'ИТ', text:'ИТ - опишите идею'}},
                { label:'Логистика', value:{ id:14, label:'Логистика', text:'Логистика - опишите идею'}}
              ] 
    }},
    { label:'Сообщить о проблеме с безопасностью', value:{ 
      id:1,
      name: "безопасность",
      code: '1',
      topics: [
                { label:'Выбор темы безопасности', value:{ id:11, text:null}},
                { label:'ИТ безопасность', value:{ id:12, label:'Розница', text:'Безопасность - опишите идею'}},
                { label:'Охрана', value:{ id:13, label:'Склад', text:'Безопасность - опишите идею'}},
                { label:'Службы слежения', value:{ id:14, label:'ИТ', text:'Безопасность - опишите идею'}},
                { label:'другое', value:{ id:14, label:'Логистика', text:'Безопасность - опишите идею'}}
              ]
    }}
  ],

  dep2 : [
                {   label:'Select Department', value:null},
                {   label:'Бухгалтерия', value:{  id:1,
                                                  name: 'Бухгалтерия',
                                                  code: '1',
                                                  topics: [
                                                            { label:'Select Topic', value:{ id:11, text:null}},
                                                            { label:'Бухгалтерия не загружается', value:{ id:12, label:'Бухгалтерия не загружается', text:'Бухгалтерия всё плохо'}},
                                                            { label:'Бухгалтерия не работает', value:{ id:13, label:'Бухгалтерия не загружается', text:'Бухгалтерия всё плохо'}},
                                                            { label:'Бухгалтерия накосячила', value:{ id:14, label:'Бухгалтерия не загружается', text:'Бухгалтерия всё плохо'}},
                                                            { label:'Бухгалтерия не отгружает', value:{ id:15, label:'Бухгалтерия не загружается', text:'Бухгалтерия всё плохо'}},
                                                            { label:'Бухгалтерия глючит', value:{ id:16, label:'Бухгалтерия не загружается', text:'Бухгалтерия всё плохо'}}
                                                          ]
                                                  }
                },
                {   label:'МТО', value:{  id:2,
                                          name: 'МТО',
                                          code: '2',
                                          topics: [
                                                    { label:'Select Topic', value:{ id:21, text:null}},
                                                    { label:'МТО не загружается', value:{ id:22, text:'МТО всё плохо'}},
                                                    { label:'МТО не работает', value:{ id:23, text:'МТО всё плохо'}},
                                                    { label:'МТО накосячила', value:{ id:24, text:'МТО всё плохо'}},
                                                    { label:'МТО не отгружает', value:{ id:25, text:'МТО всё плохо'}},
                                                    { label:'МТО глючит', value:{ id:26, text:'МТО всё плохо'}}
                                                  ]
                                          }
                },
                {   label:'ИТ', value:{ id:3,
                                        name: 'ИТ',
                                        code: '3',
                                        topics: [
                                                  { label:'Select Topic', value:{ id:31, text:null}},
                                                  { label:'ИТ не загружается', value:{ id:32, text:'ИТ всё плохо'}},
                                                  { label:'ИТ не работает', value:{ id:33, text:'ИТ всё плохо'}},
                                                  { label:'ИТ накосячила', value:{ id:34, text:'ИТ всё плохо'}},
                                                  { label:'ИТ не отгружает', value:{ id:35, text:'ИТ всё плохо'}},
                                                  { label:'ИТ глючит', value:{ id:36, text:'ИТ всё плохо'}}
                                                ]
                                        }
                      }
                ]
}

