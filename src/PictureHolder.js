import React from 'react';
import Picture from './Picture';
import { Popup, Icon } from 'semantic-ui-react';

export default class PictureHolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconClassName: this.props.icon.className
    }
  }

  onPictureClick = () => {
    this.setState({ iconClassName: this.props.icon.className2});
  }

  render() {
    return (
      <a href='#' className={this.state.iconClassName} onClick={this.onPictureClick}>   
        <Picture 
          icon={this.props.icon} 
          className={this.props.pictureClassName} />
      </a>    
    );
  }
}