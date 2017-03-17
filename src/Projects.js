import React from 'react';
import { Container, Item } from 'semantic-ui-react';

const projects = [
  {
    image: 'assets/theAgency.png',
    meta: 'Heroku',
    header: 'The Agency',
    description: 'An SMS-based game that turns a user into an Agent, sent on covert missions to gather intelligence data, meet other agents, and get to know New York City.',
    extra: 'Built with Twilio, Clarifai, Watson Speech-To-Text, React-Redux, Express, Sequelize, and Node.js.',
    href: 'https://www.youtube.com/watch?v=fIEpi-DPxHw',
    secondHref: "https://theagencygame.herokuapp.com"
  },
  {
    image: 'assets/sonicPi.png',
    header: 'Tech Talk: Sonic Pi',
    description: 'How to Composer Music with Code: Intro to Sonic Pi',
    extra: 'A tech talk given at Grace Hopper Academy, 2016', 
    href: 'https://www.youtube.com/watch?v=ZlIKqWiWJa8'
  },
  {
    image: 'assets/bambam.png',
    header: 'Woofstack',
    description: 'Facebook for dogs @ Fullstack Academy; owners can log dogs in and out of the building, sending a notification to the school Slack channel so that people are aware of who\'s visiting, what foods they can eat, and where they most want to be pet',
    extra: 'Built during a one-day hackathon to improve the student life; responsible for models, routes, and Slack integration',
    href: 'https://github.com/thebeff/woofstack'
  },
]

export default class Projects extends React.Component {
  render() {
    return (
      <Container style={{padding: 20, width: '60%'}} fluid id="projects">
        {/*<Image src='assets/projects.png' centered />*/}
        <h1 className='headings'>Portfolio</h1>
        <Item.Group style={{backgroundColor: '#4594DD'}}> 
          { projects.map((project, idx) => {
            return (
              <Item style={{padding: 10}} key={idx}>
                <Item.Image size='small' src={project.image} />
                <Item.Content>
                  <Item.Header as='a' href={project.href} className='item-header'>{project.header}</Item.Header>
                  <Item.Meta as='a' href={project.secondHref}>{project.meta}</Item.Meta>
                  <Item.Description className='item-description'>{project.description}</Item.Description>
                  <Item.Extra className='item-extra'>{project.extra}</Item.Extra>
                </Item.Content>
              </Item>
            )
          })}
        </Item.Group>
      </Container>
    );
  }
}

// href="%PUBLIC_URL%/favicon.ico"