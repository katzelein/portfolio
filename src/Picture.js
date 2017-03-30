import React from 'react';
import { Container, Icon, Modal, Header, Button, Popup } from 'semantic-ui-react';

export default class Picture extends React.Component {
  constructor() {
    super();
    this.state = {
      className: ''
    }
  }
  
  render() {
    console.log(this.props)
    return (
      
      <Container fluid onClick={() => { this.setState({ open: true, className: 'open'})}}>

      <Popup
        trigger={
          <Icon 
            size='big' 
            inverted 
            circular 
            name={this.props.icon.name} 
            color='teal' >
          </Icon>
        }
        inverted
        position='top-center' >
        <Popup.Header>
          {this.props.icon.content}
        </Popup.Header>
        <Popup.Content>
          {this.props.icon.description}
        </Popup.Content>
      </Popup>



        

      </Container>
    );
  }
}


