import React from 'react';
import Picture from './Picture';

const bioIcons = [
  {
    className: 'deg0',
    name: 'home'
  },
  {
    className: 'deg60',
    name: 'music'
  },
  {
    className: 'deg120',
    name: 'heartbeat'
  },
  {
    className: 'deg180',
    name: 'paw'
  },
  {
    className: 'deg240',
    name: 'computer'
  },
  {
    className: 'deg300',
    name: 'world'
  },
]

export default class Pictures extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      className: ''
    }
  }

  render() {

    return (
      <div className='all-pictures'>
        <div className='circle-container'>
          { bioIcons.map((icon, idx) => {
            return (
              <div key={idx}>
                <a href='#' className={icon.className} >   
                  <Picture onClick={() => { this.setState({ className: 'open'})}} dimmer={this.state.dimmer} icon={icon} className={this.state.className}/>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

