// @flow

import React from "react";
import Helmet from "react-helmet";
import { Segment, Container, Button, Menu, Header, Divider } from "semantic-ui-react";

export default class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="comp">
        <Segment inverted vertical textAlign="center" className="masthead">
          <Container>
            <Menu secondary pointing inverted size="large">
              <Menu.Item name='home' link active />
              <Menu.Item name='messages' link />
              <Menu.Item name='friends' link />
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Button inverted>Logout</Button>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Container>
          <Container text>
            <Header as="h1" inverted>
              Imagine-a-Company
            </Header>
            <Header as="h2" inverted>
              Do whatever you want when you want to.
            </Header>
            <Button primary size="huge">Get Started</Button>
          </Container>
        </Segment>
        <Segment vertical className="stripe">
          <Container text>
            <Header as="h3">Breaking The Grid, Grabs Your Attention</Header>
            <p>Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.</p>
            <Divider />
          </Container>
        </Segment>
      </div>
    );
  }
}
