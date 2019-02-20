import React from 'react';
import axios from 'axios';
import { Link } from '../routes'

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Portfolio extends React.Component {
  static async getInitialProps() {
    let posts = [];

    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      posts = res.data
    } catch(err) {
      console.log(err);
    }

    return {posts: posts.slice(0,10)}
  }

  renderPosts = (posts) => {
    return posts.map((post, index) => {
      return (
        <li key={index}>
          <Link route={`/portfolio/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      )
    })
  }

  render() {
    const { posts } = this.props;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>Portfolio Page</h1>
          <ul>
            {this.renderPosts(posts)}
          </ul>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Portfolio