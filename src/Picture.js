import React from 'react';
import { Modal, Container, Header, Button, Icon, Image } from 'semantic-ui-react';

export default class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      className: ''
    }
  }

  close = () => this.setState({ open: false })
  show = (dimmer) => () => this.setState({ dimmer, open: true })
  
  render() {
    return (
      <Container fluid onClick={() => { this.setState({ className: 'open'})}}>
        <Icon size='big' inverted circular name={this.props.icon.name} color='teal' >
          <div className="line"></div>
        </Icon>
        {/*<Icon size='big' inverted circular name={this.props.icon.name} color='teal' onClick={this.show(true)} >
          <div className="line"></div>
        </Icon>
        <Modal dimmer={this.props.dimmer} open={this.state.open} onClose={this.close}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='http://semantic-ui.com/images/avatar2/large/rachel.png' />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>We've found the following gravatar image associated with your e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Nope
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.close} />
          </Modal.Actions>
        </Modal>*/}
      </Container>
    );
  }
}


