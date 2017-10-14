// @flow

import React from "react";
import { Container, Segment, Grid, Header, List } from "semantic-ui-react";

export default function Footer() {
  return (
    <Segment inverted vertical className="footer">
      <Container>
        <Grid stackable inverted divided>
          <Grid.Column width={3}>
            <Header as="h4" inverted>
              About
            </Header>
            <List link inverted>
              <List.Item as="a">Sitemap</List.Item>
              <List.Item as="a">Contact Us</List.Item>
              <List.Item as="a">Religious Ceremonies</List.Item>
              <List.Item as="a">Gazebo Plans</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header as="h4" inverted>
              Services
            </Header>
            <List link inverted>
              <List.Item as="a">Banana Pre-Order</List.Item>
              <List.Item as="a">DNA FAQ</List.Item>
              <List.Item as="a">How To Access</List.Item>
              <List.Item as="a">Favorite X-Men</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted>
              Footer Header
            </Header>
            <p>
              Extra space for a call to action inside the footer that could help
              re-engage users.
            </p>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
}
