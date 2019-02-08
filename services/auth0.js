import auth0 from 'auth0-js';
import Cookies from 'js-cookie';

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

  handleAuthentication = () => {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          reject(err);
        }
      });
    })
  }

  setSession = (authResult) => {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());

    debugger;
    Cookies.set('user', authResult.idTokenPayload);
    Cookies.set('jwt', authResult.idToken);
    Cookies.set('expiresAt', expiresAt);
  }

  logout = () => {
    Cookies.remove('user');
    Cookies.remove('jwt');
    Cookies.remove('expiresAt');

    this.auth0.logout({
      returnTo: '',
      clientID: '9jHeVWFcQNgrsgw21WZUvYcWlZkwxJoC'
    });
  }

  login = () => {
    this.auth0.authorize();
  }

  isAuthenticated = () => {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = Cookies.getJSON('expiresAt');
    return new Date().getTime() < expiresAt;
  }
}

const auth0Client = new Auth0();

export default auth0Client;