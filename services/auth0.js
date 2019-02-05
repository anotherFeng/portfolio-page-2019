import auth0 from 'auth0-js';

class Auth0{

  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'anotherfeng.auth0.com',
      clientID: '9jHeVWFcQNgrsgw21WZUvYcWlZkwxJoC',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid'
    });
  }

  login = () => {
    this.auth0.authorize();
  }
}

const auth0Client = new Auth0();

export default auth0Client;