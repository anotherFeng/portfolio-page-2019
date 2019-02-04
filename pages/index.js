import React from 'react';
import { Button, Container } from 'reactstrap';

import BaseLayout from '../components/layouts/BaseLayout';

class Index extends React.Component {


  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BaseLayout>
        <Container>
          <Button color="danger">Danger</Button>
        </Container>
      </BaseLayout>
    )
  }
}

export default Index;