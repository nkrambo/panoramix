
// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App);

// HRM
if (module.hot) {
  module.hot.accept('./containers/App', () => { render(App) })
}
