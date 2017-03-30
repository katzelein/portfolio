import React from 'react';
import Picture from './Picture';

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
      <a href='#' className={this.state.iconClassName} >   
        <Picture 
          icon={this.props.icon} 
          className={this.props.pictureClassName} />
      </a>    
    );
  }
}

// onClick={this.onPictureClick} --> put this back in to use animations