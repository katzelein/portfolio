import React from 'react';

import PictureHolder from './PictureHolder';

const bioIcons = [
  {
    className: 'deg0',
    className2: 'deg0 deg0animate',
    name: 'home',
    position: 'right center',
    content: 'Brooklyn, NY'
  },
  {
    className: 'deg60',
    className2: 'deg60 deg60animate',
    name: 'music',
    position: 'bottom right',
    content: 'Opera and Musical Theater'
  },
  {
    className: 'deg120',
    className2: 'deg120 deg120animate',
    name: 'heartbeat',
    position: 'bottom left',
    content: 'Health Insurance'
  },
  {
    className: 'deg180',
    className2: 'deg180 deg180animate',
    name: 'paw',
    position: 'left center',
    content: 'Obelix the Gray'
  },
  {
    className: 'deg240',
    className2: 'deg240 deg240animate',
    name: 'computer',
    position: 'top right',
    content: 'Software Development'
  },
  {
    className: 'deg300',
    className2: 'deg300 deg300animate',
    name: 'world',
    position: 'top left',
    content: 'Third-Culture Kid'
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
              <PictureHolder key={idx} icon={icon} />
            )
          })}
        </div>
      </div>
    );
  }
}

