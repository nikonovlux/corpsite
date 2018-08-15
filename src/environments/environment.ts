// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

          // export const environment = {
          //   production: false
          // };

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.



export const environment = {
  production: false,
  adalConfig: {
    tenant: '435a4f02-f6b2-4248-9a5c-0f355179c0df', 
    clientId: '937a47e8-b6ad-4226-8d28-4940d9662ac9', 
    postLogoutRedirectUri: 'http://192.168.220.146:4200'
  },
};