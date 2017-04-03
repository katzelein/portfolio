import React from 'react';
import { Container, Icon, Modal, Header, Button, Popup, Image } from 'semantic-ui-react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

export default class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  show = () => {
    this.setState({ visible: true });
  }

  hide = () => {
    this.setState({ visible: false });
  }

  
  render() {

    return (
      <a href='#' className={this.props.icon.className} >
        <Container fluid>
          {/*<Popup
            trigger={
              <Icon 
                size='big' 
                inverted 
                circular 
                name={this.props.icon.name} 
                color='teal' 
                onClick={this.props.show}>
              </Icon>
              } >
            <Popup.Header>
              {this.props.icon.content}
            </Popup.Header>
          </Popup>

          <Rodal 
            visible={this.state.visible} 
            onClose={this.props.hide} 
            animation={this.props.icon.direction}
            duration={1000}>
              <div>Content</div>
          </Rodal>*/}

          <Modal 
            trigger={
              <Icon 
                size='big' 
                inverted 
                circular 
                name={this.props.icon.name} 
                color='teal' 
                onClick={this.props.show}>
              </Icon>
            } 
            size='small'>
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src='/assets/bambam.png' />
              <Modal.Description>
                <Header>{this.props.icon.content}</Header>
                <p>{this.props.icon.description}</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>

        </Container>
      </a> 
    );
  }
}


