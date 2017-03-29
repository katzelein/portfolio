import React from 'react';
import { Container, Grid, Image, Header, Label } from 'semantic-ui-react';

const projects = [
  {
    image: 'assets/theagency.png',
    header: 'The Agency',
    description: 'An SMS-based game that turns a user into an Agent, sent on covert missions to gather intelligence data, meet other agents, and get to know New York City.',
    tech: ['Twilio', 'Clarifai', 'Watson Speech-To-Text', 'NERDS stack'],
    links: [
      { Screencast: 'https://www.youtube.com/watch?v=fIEpi-DPxHw'}, 
      { Heroku: 'https://theagencygame.herokuapp.com'}, 
      { Github: 'https://github.com/katzelein/theagencygame'}
    ]
  },
  {
    image: 'assets/sonicpi.png',
    header: 'Tech Talk: Sonic Pi',
    description: 'This tech talk, given at Fullstack Academy\'s Grace Hopper Program, 2016, discusses Sonic Pi: a music composition program that makes writing music accessible for everyone. Topics discussed: the basics of writing notes with either note names or Hz, rests, chords, controlling duration through the use of envelopes, using synths and samples, and looping.',
    tech: ['Sonic Pi', 'Ruby', 'Music', 'Video'],
    links: [ {YouTube: 'https://www.youtube.com/watch?v=ZlIKqWiWJa8' }]
  },
  {
    image: 'assets/woofstack.png',
    header: 'Woofstack',
    description: 'Facebook for dogs @ Fullstack Academy; owners can log dogs in and out of the building, sending a notification to the school Slack channel so that people are aware of who\'s visiting, what foods they can eat, and where they most want to be pet',
    tech: ['Slack', 'Material-UI', 'React', 'React-Redux', 'Hackathon'],
    links: [{Github: 'https://github.com/thebeff/woofstack'}]
  },
  // {
  //   image: 'assets/rainyDays.jpg',
  //   header: 'Rainy Days',
  //   description: 'A self-care app built in the wake of the 2016 US election',
  //   tech: ['Firebase', 'React', 'Redux', 'Sequelize', 'Express'],
  //   extra: 'My Stackathon',
  //   href: 'https://github.com/katzelein/rainydays'
  // }
]

export default class Projects extends React.Component {
  render() {
    return (
      <Container style={{padding: 20}} fluid id="projects">
        <h1 className='headings'>Projects</h1>

        <Grid container >
          
          { projects.map((project, idx) => {  
            return (
              <Grid.Row key={idx}>
                <Grid.Column floated="right" width="4">               
                  <Image src={project.image} style={{width: 300, float: 'right'}} />
                </Grid.Column>
                <Grid.Column floated="left" width="8">
                  <Header color="blue">{project.header}</Header>
                  <p style={{color: '#cce6ff'}}>{project.description}</p>

                  { project.tech.map((tech, idx) => {
                    return (
                      <Label key={idx} color="teal" >
                        {tech}
                      </Label>
                    )                  
                  })}

                </Grid.Column>
              </Grid.Row>
            )
          })}

        </Grid>
      </Container>
    );
  }
}