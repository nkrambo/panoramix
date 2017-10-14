// @flow

import React from "react";
import Helmet from "react-helmet";
import { Grid, Header } from "semantic-ui-react";

export default class NotFound extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="comp">
        <Grid centered verticalAlign="middle" className="not-found">
          <Grid.Column textAlign="center">
            <Helmet
              title="404"
              meta={[{ name: "Page Not Found", content: "RACS" }]}
            />
            <Header as="h1">Oops!</Header>
            <p>We can&apos;t seem to find the page you&apos;re looking for.</p>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
