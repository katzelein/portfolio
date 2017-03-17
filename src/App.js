import React from 'react';
import { Container, Menu, Header } from 'semantic-ui-react';
import { Link } from 'react-router'
// import Bio from './Bio'
// import Projects from './Projects'
// import Contact from './Contact'
// import Experience from './Experience'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { activeItem: 'bio' }
  }

  handleItemClick = (e, { name }) => { 
    this.setState({ activeItem: name }) }

  render() {
    return (
      <Container id="main" fluid>     
        <div style={{padding: 20}}>
        <Menu color="teal" inverted pointing secondary>
          <Menu.Item as={Link} to='/bio' name='bio' href="/bio" active={this.state.activeItem === 'bio'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to='/projects' name='projects' href="/projects" active={this.state.activeItem === 'projects'} onClick={this.handleItemClick} />
          {/*<Menu.Item as={Link} to='/experience' name='experience' href="/experience" active={this.state.activeItem === 'skills'} onClick={this.handleItemClick} />*/}
          <Menu.Item as={Link} to='/contact' name='contact' href="/contact" active={this.state.activeItem === 'contact'} onClick={this.handleItemClick} />
        </Menu>
        {/*<Image style={{padding: 30, width: '50%'}} src='assets/logo.png' centered/> */}

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
        
        {this.props.children}
        </div>
      </Container>
    );
  }
}