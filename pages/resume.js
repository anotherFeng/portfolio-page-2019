import React from 'react';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Resume extends React.Component {
  render() {
    return (
      <BaseLayout>
        <BasePage {...this.props.auth}>
          <h1>Resume Page</h1>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Resume