import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import Bio from './Bio'
import Projects from './Projects'
import Contact from './Contact'
// import Experience from './Experience'

import Scroll from 'react-scroll';
const Link       = Scroll.Link;
// const DirectLink = Scroll.DirectLink;
const Element    = Scroll.Element;
const Events     = Scroll.Events;
const scroll     = Scroll.animateScroll;
const scrollSpy  = Scroll.scrollSpy;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { activeItem: 'test1' }
  }

  componentDidMount () {
    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });
    scrollSpy.update();
  }

  componentWillUnmount () {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  handleItemClick = (e, { name }) => { 
    this.setState({ activeItem: name }) 
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  }

  render() {
    return (
      <Container id="main" fluid>     
        <div style={{padding: 20}}>

          <Menu borderless={true} color="blue" inverted fixed="top" style={{marginBottom: 50, height: 40}}>
            <Menu.Item
              name='bio'
              active={this.state.activeItem === 'bio'}
              onClick={this.handleItemClick} >
              <Link activeClass="active" to="bio" spy={true} smooth={true} duration={500} >About Me</Link>
            </Menu.Item>

            <Menu.Item
              name='projects'
              active={this.state.activeItem === 'projects'}
              onClick={this.handleItemClick} >
              <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} >Projects</Link>
            </Menu.Item>

            {/*<Menu.Item
              name='experience'
              active={this.state.activeItem === 'experience'}
              onClick={this.handleItemClick} >
              <Link activeClass="active" to="experience" spy={true} smooth={true} duration={500} >Experience</Link>
            </Menu.Item>*/}

            <Menu.Item
              name='contact'
              active={this.state.activeItem === 'contact'}
              onClick={this.handleItemClick} >
              <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} >Contact</Link>
            </Menu.Item>
          </Menu>
          
          <div style={{paddingTop: 40}}>
          <Element name="bio" style={{paddingTop: 40}}>
            <Bio />
          </Element>
          <Element name="projects" style={{paddingTop: 40}}>
            <Projects />
          </Element>
          {/*<Element name="experience" style={{paddingTop: 40}}>
            <Experience />
          </Element>*/}
          <Element name="contact" style={{paddingTop: 40}}>
            <Contact />
          </Element>
          </div>

        </div>
      </Container>
    );
  }
}