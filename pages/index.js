import React from 'react';
import axios from 'axios';

import BaseLayout from '../components/layouts/BaseLayout';

class Index extends React.Component {

  static async getInitialProps() {
    let userData;

    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      userData = res.data
    } catch(err) {
      console.log(err);
    }

    return {title: "Title Here", userData: userData}
  }

  // static getInitialProps() {
  //   axios.get('https://jsonplaceholder.typicode.com/todos/1')
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     })

  //   return {initialData: [1,2,3,4]}
  // }

  constructor(props) {
    super()

  }

  render() {
    const { userData, title } = this.props;
    console.log(userData, title)
    return (
      <div>
        <BaseLayout>
          <h1>Index Page Here</h1>
          {title}
          {userData.title}
        </BaseLayout>
      </div>

    )
  }
}

export default Index;