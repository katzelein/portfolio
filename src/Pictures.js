import React from 'react';

import PictureHolder from './PictureHolder';

const bioIcons = [
  {
    className: 'deg0',
    className2: 'deg0 deg0animate',
    name: 'home',
    position: 'right center',
    content: 'Brooklyn, NY',
    description: 'I\'ve lived in New York for five years; I belong in a city. Brooklyn has stolen my attention (if not my entire heart).'
  },
  {
    className: 'deg60',
    className2: 'deg60 deg60animate',
    name: 'music',
    position: 'bottom right',
    content: 'Opera and Musical Theater',
    description: 'In my previous life, I was a contemporary opera and musical theater performer. I got to do really amazing stuff like: travel the world with Rufus Wainwright, be part of the Tony Awards, receive praise from the New York Times. I was extremely lucky to have a great career. And then, I moved on!'
  },
  {
    className: 'deg120',
    className2: 'deg120 deg120animate',
    name: 'heartbeat',
    position: 'bottom left',
    content: 'Health Insurance',
    description: 'I\'ve worked on and off for a wonderful health insurance brokerage since I was 18. I crafted skills in customer service and client support, and also got to experiment with code: building a Microsoft Access database for organizing 15 years worth of client files, and writing an Excel VBA macro program to automate 500 hours of work, which saves our company $10K/year.'
  },
  {
    className: 'deg180',
    className2: 'deg180 deg180animate',
    name: 'paw',
    position: 'left center',
    content: 'Obi',
    description: 'I\'m a huge animal lover, and this little guy is the light of my life. The picture here is a small section of the catio I built for him so he could sun himself outside and get to know the feral cats of Bushwick. Call me a crazy cat lady. I\'m fine with it.'
  },
  {
    className: 'deg240',
    className2: 'deg240 deg240animate',
    name: 'computer',
    position: 'top right',
    content: 'Software Development',
    description: 'My whole family are developers -- my mother, father, brother, two aunts, and four cousins have all worked in tech. So I knew it was in the genes, but also that I would have big shoes to fill! I graduated from Fullstack Academy\'s Grace Hopper Program in 2016 and spent three months working there as a Teaching Fellow. I love coding because of the rush I get from the mental grind of unfettered creativity -- something I felt with music but wanted to feel all the time.'
  },
  {
    className: 'deg300',
    className2: 'deg300 deg300animate',
    name: 'world',
    position: 'top left',
    content: 'Third-Culture Kid',
    description: 'I grew up as an American diplobrat in Vienna, Austria, while my father had a position with the United Nations. I love Vienna; in many ways, it still feels like my home and the people I knew there still feel like my second family. But ask me sometime about the horror of growing up as a kid without Lucky Charms, or how much I love paprika salt.'
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

