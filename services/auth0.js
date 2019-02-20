import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

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

  verifyToken = (token) => {
    if(token) {
      const decodedToken = jwt.decode(token);
      const expiresAt = decodedToken.exp = 1000;

      return (decodedToken && new Date().getTime() < expiresAt) ? decodedToken : undefined;
    }

    return undefined;
  }

  clientAuth() {
    const token = Cookies.getJSON('jwt');
    const verifiedToken = this.verifyToken(token)
    return verifiedToken;
  }

  serverAuth(req) {
    if(req.headers.cookie) {
      const jwtCookies = req.headers.cookie;
      console.log(jwtCookies) // 'this returns the token string as above'
      const splittedCookies = jwtCookies.split(';');
      const expiresAtCookie = splittedCookies.find(c => c.trim().startsWith('jwt='));
      
      if(expiresAtCookie) {
        return undefined;
      }

      console.log('token info ----->', expiresAtCookie) // undefined
      const token = expiresAtCookie.split('=')[1];
      const verifiedToken = this.verifyToken(token);

      return verifiedToken;
    }
  }
}

const auth0Client = new Auth0();

export default auth0Client;