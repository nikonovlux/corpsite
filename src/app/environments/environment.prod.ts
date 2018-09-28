export const globals = {
    production: true,
    token: '11eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Imk2bEdrM0ZaenhSY1ViMkMzbkVRN3N5SEpsWSIsImtpZCI6Imk2bEdrM0ZaenhSY1ViMkMzbkVRN3N5SEpsWSJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLndpbmRvd3MubmV0IiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNDM1YTRmMDItZjZiMi00MjQ4LTlhNWMtMGYzNTUxNzljMGRmLyIsImlhdCI6MTUzODExODAyNiwibmJmIjoxNTM4MTE4MDI2LCJleHAiOjE1MzgxMjE5MjYsImFpbyI6IjQyQmdZRkJTdlZaZ29sZk5zNlZkMm5xR291NUtBQT09IiwiYXBwaWQiOiI5MzdhNDdlOC1iNmFkLTQyMjYtOGQyOC00OTQwZDk2NjJhYzkiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80MzVhNGYwMi1mNmIyLTQyNDgtOWE1Yy0wZjM1NTE3OWMwZGYvIiwib2lkIjoiYzcwNGQwMjQtNmRmMy00NTE5LWIyM2MtNjMxZWZmMDIwZWE5Iiwic3ViIjoiYzcwNGQwMjQtNmRmMy00NTE5LWIyM2MtNjMxZWZmMDIwZWE5IiwidGVuYW50X3JlZ2lvbl9zY29wZSI6IkVVIiwidGlkIjoiNDM1YTRmMDItZjZiMi00MjQ4LTlhNWMtMGYzNTUxNzljMGRmIiwidXRpIjoiNWRDNlRIV0U2VU9PUmhZWEZidk9BQSIsInZlciI6IjEuMCJ9.GAQYKgfhfAJz-kWGL5dB4g6p4Q3iU9Xi4ZGM569qZoq5m50UgktzCNBxRNXICK9xyGazfWdc97aygKt6OMgxRU1D3MvOp7nWOOLpIAcPn9In2eR70EsuCe86ShvauMh-ounNlK4DVDeLoShqbLk5H6Qcem6zZ8EdeXTyafRp6g2CmG8Mn2uKFajlRBa02uQucOa-3xP6bc8HT3sRWli5M7TZpKDD66NGcdjl4KCyYXCL7RWw5azVtTzAiuzFCrddEhJFvnQzJWbfjq3gUxZpSEktR3kDQZPuC0_e_-XnDjGgC2_WBHOoLPGRz_lLUsiIkFOFLi-xXgUSxrHd-Gov2Q'
}

export const graph_params = {
    "resource":"https://graph.windows.net",
    "client_id":"937a47e8-b6ad-4226-8d28-4940d9662ac9",
    "client_secret":"9/o/DYn+yzQsLqheMjWodnqUEBvgk7xykRNYONT/tXs=",
    "grant_type":"client_credentials"
  };

  export const graph_params_full = {
    "resource":"https://graph.windows.net",
    "client_id":"937a47e8-b6ad-4226-8d28-4940d9662ac9",
    "client_secret":"9/o/DYn+yzQsLqheMjWodnqUEBvgk7xykRNYONT/tXs=",    
    "redirect_uri":"https://corpsite.opticalhouse.com.ua:4200/mainpage",
    "grant_type":"authorization_code",
    "code":"",
  };  

  export const graph_params_cert = {
    "grant_type":"client_credentials",
    "resource":"https://graph.windows.net",
    "client_id":"937a47e8-b6ad-4226-8d28-4940d9662ac9",
    "client_assertion_type":"urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
    "client_assertion":"a JSON Web Token" // https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-certificate-credentials
  };
  
  export const login_windows_url = 'https://login.microsoftonline.com/435a4f02-f6b2-4248-9a5c-0f355179c0df'
  export const login_token_url = 'https://login.microsoftonline.com/interoko.onmicrosoft.com/oauth2/token'


// 'use strict';
// export const token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Imk2bEdrM0ZaenhSY1ViMkMzbkVRN3N5SEpsWSIsImtpZCI6Imk2bEdrM0ZaenhSY1ViMkMzbkVRN3N5SEpsWSJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLndpbmRvd3MubmV0IiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNDM1YTRmMDItZjZiMi00MjQ4LTlhNWMtMGYzNTUxNzljMGRmLyIsImlhdCI6MTUzNjg0MDU2OCwibmJmIjoxNTM2ODQwNTY4LCJleHAiOjE1MzY4NDQ0NjgsImFjciI6IjEiLCJhaW8iOiJBU1FBMi84SUFBQUFhQmNhL1N6bllGM1lSTS9hRmx4Y253djU2YUQ5Mkgrc3JLekJQZy9TWkFNPSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiI5MzdhNDdlOC1iNmFkLTQyMjYtOGQyOC00OTQwZDk2NjJhYzkiLCJhcHBpZGFjciI6IjEiLCJmYW1pbHlfbmFtZSI6ItCc0LjRhdCw0LjQuyDQkNC90LTRgNC10LXQstC40YciLCJnaXZlbl9uYW1lIjoi0J3QuNC60L7QvdC-0LIiLCJpcGFkZHIiOiIxOTMuMTUwLjg4LjEiLCJuYW1lIjoi0J3QuNC60L7QvdC-0LIg0JzQuNGF0LDQuNC7INCQ0L3QtNGA0LXQtdCy0LjRhyIsIm9pZCI6IjIxNDA3YjNjLWYyMzYtNDllNy05NTY5LTQ0ZmE0OTFhOGNjYiIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS00MjkwOTgwMDItMjEyNjk4OTQzNS00MDQ1NDg4MDAxLTQ3OTAiLCJwdWlkIjoiMTAwMzAwMDBBQzczMDBEMyIsInNjcCI6ImVtYWlsIEdyb3VwLlJlYWQuQWxsIG9wZW5pZCBwcm9maWxlIFRhc2tzLlJlYWQgVXNlci5SZWFkIFVzZXIuUmVhZEJhc2ljLkFsbCIsInN1YiI6InBFajIyMHVpTWtLNFI5YnhCN3o0SnVrcTc0MFNKQ1BYTEFrX3RiZk9oOFEiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiRVUiLCJ0aWQiOiI0MzVhNGYwMi1mNmIyLTQyNDgtOWE1Yy0wZjM1NTE3OWMwZGYiLCJ1bmlxdWVfbmFtZSI6Im5pa29ub3YubUBsdXhvcHRpY2EuY29tLnVhIiwidXBuIjoibmlrb25vdi5tQGx1eG9wdGljYS5jb20udWEiLCJ1dGkiOiJLcndDOU9pREEweVg2bWFaOE94QkFBIiwidmVyIjoiMS4wIn0.eN1egmTinQEw9lBblJP6x2RrmjUAlOstGyMY3MUfdA-n-SjiRs-tPnreR5263tEzhEyBzYf-aFo0u5smIKc9qzpubWOGnRNqMgyDNXHSztqbUQxTGq11F2LYBuUMelvpSHXpTlskAml9yJg2hBt08Klyu5KlV9liqPMCvCA3KL_YLN6oJckl1zGZ7CCNbbIMOBu4wpYDrU6uThBkdmakjDTxl-rtbSerCpbly_zjltT16g0yu13q82ZOVToHylcnV-YeLPdlfCmTphi_5NCmS-buuc6TKj3jp6o3OUWNQ7CLTBHNfdzTHwgdyYrYXiJw2PS65IoDz4R3T2mM_AVpOw';

// export const environment = {
//   production: true,
//   apiHost: 'https://',    
// }