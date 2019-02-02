import React from 'react';

import BaseLayout from '../components/layouts/BaseLayout';

class SuperComponent extends React.Component {

  constructor() {
    super();

    
  }

  render() {
    return (
      <BaseLayout>
        <h1>SuperComponent Page</h1>
      </BaseLayout>
    )
  }
}

export default SuperComponent