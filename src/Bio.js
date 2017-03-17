import React from 'react';
import { Container } from 'semantic-ui-react';
import Pictures from './Pictures'

export default class Bio extends React.Component {
  render() {
    return (
      <Container style={{padding: 20}} fluid id="bio" textAlign='center'>
        <h1 className='headings'>About Me</h1>
        {/*<Image src='assets/aboutMe.png' centered />*/}
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