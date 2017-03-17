import React from 'react';
import { Container } from 'semantic-ui-react';

export default class Footer extends React.Component {
  render() {
    return (
      <Container fluid id="footer">
        Copyright by me :) Built with React!
      </Container>
    );
  }
}