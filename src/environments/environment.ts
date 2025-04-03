// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/*
DOMAIN: 'dev-lp5tpn2oofz1st7h.us.auth0.com',
    CLIENTID: 'GUguZUhHXFFqIH6BadnIEduFvqIBTsJe'
*/


//curl --request POST \
//  --url https://pruebaspj.us.auth0.com/oauth/token \
//  --header 'content-type: application/json' \
const data = {
  client_id:"xbDZ4dMQshkJALNUyOrboVrR6tTD0rig",
  client_secret:"7R_bHq41RUSCOZEQZ1-9qSx6W5dJLCPluPk3PfaNMeU2c7X70_6Ix01de5bvzbeS",
  audience:"https://pruebaspj.us.auth0.com/api/v2/",
  grant_type:"client_credentials"
}

let domain = 'pruebaspj.us.auth0.com';
let clientId = 'ttjoXcwRrbPG6vwAg4zjNtNevFcvrQwO'

//nuevos banbif
domain = 'login-pj.dev.banbif.com.pe'; //custom-domain
clientId = 'i1bJBawSjDl6ms9cLhmQ9kjXVOnhYU7v';


const audience = 'https://pruebaspj.us.auth0.com/api/v2/';
const client_secret = '6Bni-67fQKKNoWa4XlmgiZ27sF3DkYJImHV4oGzds5MoXAvlfyue1LyONIjervVt';
export const environment = {
  urlProducts: 'http://localhost:9000/api/products',
  urlReports: 'http://localhost:9000/api/reportings',
  urlCategories: 'http://localhost:9000/api/categories',
  production: false,
  urlUsers: 'http://localhost:9000/api/users',
  urlAccounts: 'http://localhost:9000/api/accounts',
  usarMocks: true,
  urlMenus: 'http://localhost:9000/api/menus',
  APIAUTH0:'https://pruebaspj.us.auth0.com/api/v2',
  APIAUTH0_USERS:'https://pruebaspj.us.auth0.com/api/v2/users',
  AUTH0API:{
    API_TOKEN: 'https://pruebaspj.us.auth0.com/oauth/token',
    DOMAIN: domain,
    CLIENTID: data.client_id,
    CLIENT_SECRET: data.client_secret,
    AUDIENCE: data.audience
  },
  AUTH0:{
    DOMAIN: domain,
    CLIENTID: clientId,
    CLIENT_SECRET: client_secret,
    AUDIENCE: audience
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
