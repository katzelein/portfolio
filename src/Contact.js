import React from 'react';
import { Container, Icon, Grid, Button, Form, Message, Segment } from 'semantic-ui-react';

const contactButtons = [
  { name: 'linkedin', color: 'linkedin', text: 'LinkedIn' },
  { name: 'github', color: 'grey', text: 'Github' },
  { name: 'twitter', color: 'twitter', text: 'Twitter' }
]

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange (event) {
    this.setState(
      [event.target.name] = event.target.value
    )
  }

  onSubmit () {
    // email a message to me
  }
  
  render() {
    return (
      <Container style={{padding: 20}} fluid id="contact">
        <h1 className='headings'>Contact</h1>
        {/*<Image src='assets/contact.png' centered />*/}
        <Grid centered style={{padding: 20}}>
          <Grid.Row>
            {contactButtons.map((btn, idx) => {
              return (
                <Button color={btn.color} animated key={idx}>
                  <Button.Content visible>
                    <Icon name={btn.name} size='big'/>
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name='arrow right'/>
                  </Button.Content>
                </Button>
              )
            })}
          </Grid.Row>
          <Grid.Row>
            <a href='/assets/Kat-Guthrie-resume.pdf' download>Download resume as PDF</a>
          </Grid.Row>
          <Grid.Row>
            <Segment color="teal" inverted>
              <Form style={{padding: 20}} onSubmit={this.onSubmit} onChange={this.handleChange} inverted>
                <Form.Group widths='equal'>
                  <Form.Input label='Name' placeholder='Joe Schmoe' />
                  <Form.Input label='Email' placeholder='joe@schmoe.com' />
                </Form.Group>
                <Form.TextArea label='Message' placeholder='I like chia seeds'/>
                <Message
                  success
                  header='Form Completed'
                  content="Thanks! I'll get back to you ASAP"
                />
                <Form.Button>Submit</Form.Button>             
              </Form> 
            </Segment>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}