import React from 'react';
import { Icon, Dropdown, Menu} from 'semantic-ui-react';
import Bio from './Bio'
import Projects from './Projects'
import Contact from './Contact'
import Experience from './Experience'

export default class Navbar extends React.Component {
  constructor() {
      super();
      this.state = { activeItem: 'home'}
    }
  render() {
    return (
      <Menu pointing secondary>
        <Menu.Item name='home' active={this.state.activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='messages' active={this.state.activeItem === 'messages'} onClick={this.handleItemClick} />
        <Menu.Item name='friends' active={this.state.activeItem === 'friends'} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item name='logout' active={this.state.activeItem === 'logout'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    );
  }
}