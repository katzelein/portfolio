import React from 'react';

import Picture from './Picture'
import {bioIcons} from './bioIcons';

export default class Pictures extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      className: ''
    }
  }

  show = () => {
    this.setState({ open: true })
  }

  hide = () => {
    this.setState({ open: false })
  }

  render() {
    return (
      <div className='all-pictures'>
        <div className='circle-container'>
          { bioIcons.map((icon, idx) => {
            return (
              <Picture key={idx} icon={icon} show={this.show} hide={this.close}/>
            )
          })}
        </div>
      </div>
    );
  }
}

