import React from 'react';
import { Container, Image, Header } from 'semantic-ui-react';

export default class Experience extends React.Component {
  render() {
    return (
      <Container style={{padding: 20}} fluid id="experience">
        <Image src='assets/experience.png' centered />
        <Header as='h3' color="teal" textAlign='center'>
          I have skills! Shiny.
        </Header>
      </Container>
    );
  }
}

// href="%PUBLIC_URL%/favicon.ico"