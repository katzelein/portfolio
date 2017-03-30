import React from 'react';
import { Container, Icon } from 'semantic-ui-react';

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
          {/*<svg version="1.1" id="Layer_1" x="0px" y="0px"
	         width="340px" height="333px" viewBox="0 0 340 333" enableBackground="new 0 0 340 333" >
            <rect className="path" x="10" y="10" width="30" height="30" stroke="black" fill="transparent" strokeWidth="5"/>
          </svg>*/}
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


