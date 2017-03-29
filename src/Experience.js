import React from 'react';
import { Container,  Header } from 'semantic-ui-react';

export default class Experience extends React.Component {
  render() {
    return (
      <Container style={{padding: 20}} fluid id="experience">
        <h1 className='headings'>Experience</h1>
        <Header as='h3' color="teal" textAlign='center'>
          I have skills! Shiny.
        </Header>
      </Container>
    );
  }
}