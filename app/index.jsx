// @flow

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { AppContainer } from "react-hot-loader";
import "react-toastify/dist/ReactToastify.min.css";
import "rxjs";
import App from "./containers/App/";
import configureStore from "./redux/configureStore";
import "../semantic/dist/semantic.min.css";

const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <Component />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  );
};

render(App);

// HRM
if (module.hot) {
  module.hot.accept("./containers/App", () => {
    render(App);
  });
}

// scroll to top
// transitions
// react router
// 404
// semantic
// husky and lint staged
// webpack prod config
// jest testing
// immutable
// prettier
// readme
// redux
// side effects
// github it...
