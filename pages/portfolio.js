import React from 'react';
import axios from 'axios';
import { withRouter } from 'next/router';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';


class Portfolio extends React.Component {

  static async getInitialProps({query}) {
    let portfolio = {};
    const id = query.id
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      portfolio = res.data;
    } catch(err) {
      console.error(err);
    }

    return {portfolio};
  }

  render() {
    const { portfolio } = this.props;

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>Portfolio Page</h1>
          <h2>{portfolio.title}</h2>
          <p>{portfolio.body}</p>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withRouter(Portfolio);