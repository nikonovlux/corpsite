export const environment = {
    production: true,
    apiHost: 'https://',    
}

export const globals = {
    production: true,
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Imk2bEdrM0ZaenhSY1ViMkMzbkVRN3N5SEpsWSIsImtpZCI6Imk2bEdrM0ZaenhSY1ViMkMzbkVRN3N5SEpsWSJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLndpbmRvd3MubmV0IiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNDM1YTRmMDItZjZiMi00MjQ4LTlhNWMtMGYzNTUxNzljMGRmLyIsImlhdCI6MTUzNjg0MDU2OCwibmJmIjoxNTM2ODQwNTY4LCJleHAiOjE1MzY4NDQ0NjgsImFjciI6IjEiLCJhaW8iOiJBU1FBMi84SUFBQUFhQmNhL1N6bllGM1lSTS9hRmx4Y253djU2YUQ5Mkgrc3JLekJQZy9TWkFNPSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiI5MzdhNDdlOC1iNmFkLTQyMjYtOGQyOC00OTQwZDk2NjJhYzkiLCJhcHBpZGFjciI6IjEiLCJmYW1pbHlfbmFtZSI6ItCc0LjRhdCw0LjQuyDQkNC90LTRgNC10LXQstC40YciLCJnaXZlbl9uYW1lIjoi0J3QuNC60L7QvdC-0LIiLCJpcGFkZHIiOiIxOTMuMTUwLjg4LjEiLCJuYW1lIjoi0J3QuNC60L7QvdC-0LIg0JzQuNGF0LDQuNC7INCQ0L3QtNGA0LXQtdCy0LjRhyIsIm9pZCI6IjIxNDA3YjNjLWYyMzYtNDllNy05NTY5LTQ0ZmE0OTFhOGNjYiIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS00MjkwOTgwMDItMjEyNjk4OTQzNS00MDQ1NDg4MDAxLTQ3OTAiLCJwdWlkIjoiMTAwMzAwMDBBQzczMDBEMyIsInNjcCI6ImVtYWlsIEdyb3VwLlJlYWQuQWxsIG9wZW5pZCBwcm9maWxlIFRhc2tzLlJlYWQgVXNlci5SZWFkIFVzZXIuUmVhZEJhc2ljLkFsbCIsInN1YiI6InBFajIyMHVpTWtLNFI5YnhCN3o0SnVrcTc0MFNKQ1BYTEFrX3RiZk9oOFEiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiRVUiLCJ0aWQiOiI0MzVhNGYwMi1mNmIyLTQyNDgtOWE1Yy0wZjM1NTE3OWMwZGYiLCJ1bmlxdWVfbmFtZSI6Im5pa29ub3YubUBsdXhvcHRpY2EuY29tLnVhIiwidXBuIjoibmlrb25vdi5tQGx1eG9wdGljYS5jb20udWEiLCJ1dGkiOiJLcndDOU9pREEweVg2bWFaOE94QkFBIiwidmVyIjoiMS4wIn0.eN1egmTinQEw9lBblJP6x2RrmjUAlOstGyMY3MUfdA-n-SjiRs-tPnreR5263tEzhEyBzYf-aFo0u5smIKc9qzpubWOGnRNqMgyDNXHSztqbUQxTGq11F2LYBuUMelvpSHXpTlskAml9yJg2hBt08Klyu5KlV9liqPMCvCA3KL_YLN6oJckl1zGZ7CCNbbIMOBu4wpYDrU6uThBkdmakjDTxl-rtbSerCpbly_zjltT16g0yu13q82ZOVToHylcnV-YeLPdlfCmTphi_5NCmS-buuc6TKj3jp6o3OUWNQ7CLTBHNfdzTHwgdyYrYXiJw2PS65IoDz4R3T2mM_AVpOw'
}

// 'use strict';
// export const token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Imk2bEdrM0ZaenhSY1ViMkMzbkVRN3N5SEpsWSIsImtpZCI6Imk2bEdrM0ZaenhSY1ViMkMzbkVRN3N5SEpsWSJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLndpbmRvd3MubmV0IiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNDM1YTRmMDItZjZiMi00MjQ4LTlhNWMtMGYzNTUxNzljMGRmLyIsImlhdCI6MTUzNjg0MDU2OCwibmJmIjoxNTM2ODQwNTY4LCJleHAiOjE1MzY4NDQ0NjgsImFjciI6IjEiLCJhaW8iOiJBU1FBMi84SUFBQUFhQmNhL1N6bllGM1lSTS9hRmx4Y253djU2YUQ5Mkgrc3JLekJQZy9TWkFNPSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiI5MzdhNDdlOC1iNmFkLTQyMjYtOGQyOC00OTQwZDk2NjJhYzkiLCJhcHBpZGFjciI6IjEiLCJmYW1pbHlfbmFtZSI6ItCc0LjRhdCw0LjQuyDQkNC90LTRgNC10LXQstC40YciLCJnaXZlbl9uYW1lIjoi0J3QuNC60L7QvdC-0LIiLCJpcGFkZHIiOiIxOTMuMTUwLjg4LjEiLCJuYW1lIjoi0J3QuNC60L7QvdC-0LIg0JzQuNGF0LDQuNC7INCQ0L3QtNGA0LXQtdCy0LjRhyIsIm9pZCI6IjIxNDA3YjNjLWYyMzYtNDllNy05NTY5LTQ0ZmE0OTFhOGNjYiIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS00MjkwOTgwMDItMjEyNjk4OTQzNS00MDQ1NDg4MDAxLTQ3OTAiLCJwdWlkIjoiMTAwMzAwMDBBQzczMDBEMyIsInNjcCI6ImVtYWlsIEdyb3VwLlJlYWQuQWxsIG9wZW5pZCBwcm9maWxlIFRhc2tzLlJlYWQgVXNlci5SZWFkIFVzZXIuUmVhZEJhc2ljLkFsbCIsInN1YiI6InBFajIyMHVpTWtLNFI5YnhCN3o0SnVrcTc0MFNKQ1BYTEFrX3RiZk9oOFEiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiRVUiLCJ0aWQiOiI0MzVhNGYwMi1mNmIyLTQyNDgtOWE1Yy0wZjM1NTE3OWMwZGYiLCJ1bmlxdWVfbmFtZSI6Im5pa29ub3YubUBsdXhvcHRpY2EuY29tLnVhIiwidXBuIjoibmlrb25vdi5tQGx1eG9wdGljYS5jb20udWEiLCJ1dGkiOiJLcndDOU9pREEweVg2bWFaOE94QkFBIiwidmVyIjoiMS4wIn0.eN1egmTinQEw9lBblJP6x2RrmjUAlOstGyMY3MUfdA-n-SjiRs-tPnreR5263tEzhEyBzYf-aFo0u5smIKc9qzpubWOGnRNqMgyDNXHSztqbUQxTGq11F2LYBuUMelvpSHXpTlskAml9yJg2hBt08Klyu5KlV9liqPMCvCA3KL_YLN6oJckl1zGZ7CCNbbIMOBu4wpYDrU6uThBkdmakjDTxl-rtbSerCpbly_zjltT16g0yu13q82ZOVToHylcnV-YeLPdlfCmTphi_5NCmS-buuc6TKj3jp6o3OUWNQ7CLTBHNfdzTHwgdyYrYXiJw2PS65IoDz4R3T2mM_AVpOw';
