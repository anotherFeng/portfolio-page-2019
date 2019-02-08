import React from 'react';
import { withRouter } from 'next/router';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import auth0Client from '../services/auth0';


class Callback extends React.Component {

  componentDidMount() {
    auth0Client.handleAuthentication()
      .then(() => {
        this.props.router.push('/');
      })
      .catch((err) => {
        console.log("auth error")
      })
  }

  render() {
    return (
      <BaseLayout>
        <BasePage>
          <h1> Verifying Login Data ...</h1>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withRouter(Callback);