import React from 'react';
import axios from 'axios';

import BaseLayout from '../components/layouts/BaseLayout';

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
        <li>{post.title}</li>
      )
    })
  }

  render() {
    const { posts } = this.props;
    return (
      <BaseLayout>
        <h1>Portfolio Page</h1>
        <ul>
          {this.renderPosts(posts)}
        </ul>
      </BaseLayout>
    )
  }
}

export default Portfolio