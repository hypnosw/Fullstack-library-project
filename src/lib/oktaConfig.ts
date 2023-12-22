export const oktaConfig = {
    clientId:'0oae1dij6rIVODiEW5d7',
    issuer:'https://dev-06330716.okta.com/oauth2/default',
    redirectUri:'http://localhost:3000/login/callback',
    scopes:['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}