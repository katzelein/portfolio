import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import Pictures from './Pictures'

export default class Bio extends React.Component {
  render() {
    return (
      <Container style={{padding: 20}} fluid id="bio" textAlign='center'>
        <Header as='h1' style={{textAlign: 'center', padding: 60}}>
          <Header.Content className='block-heading'>
            KAT  
          </Header.Content>
          <Header.Content className='cursive-heading'>
            Guthrie
          </Header.Content>
        </Header>

        <Header as='h3' color="teal" textAlign='center'>
            Full stack JS developer. Former soprano contemporaire. Emotional intelligentsia. Fervent lover of paprika salt.
        </Header>
        <Pictures style={{padding: 40}} />
      </Container>
    );
  }
}

// Image Bubbles
// 1. Developer
// 2. Vienna
// 3. NYC
// 4. Music
// 5. Health insurance
// 6. Obi
// 7. Emotional intelligence