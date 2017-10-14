// @flow

import React from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Switch, withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { CSSTransition } from "react-transition-group";
import { Icon } from "semantic-ui-react";
// import ScrollToTop from '../../components/ScrollToTop';
import * as messageActionCreators from "../../redux/modules/messages";
import Message from "../../components/Message";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Home from "../../containers/Home";
import NotFound from "../../containers/NotFound";

class App extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps(nextProps) {
    const { title, content, type } = nextProps.messages;
    if (content.length) {
      toast[type](<Message title={title} content={content} type={type} />);
      this.props.resetMessage();
    }
  }

  props: {
    resetMessage: Function,
    messages: Object,
    location: Object
  };

  render() {
    const { location } = this.props;

    const CustomeClose = ({ closeToast }) => (
      <button className="toastify__close" onClick={closeToast}>
        <Icon className="icon-cancel" />
      </button>
    );

    return (
      <div>
        <Helmet
          titleTemplate="%s - RACS"
          defaultTitle="RACS"
          meta={[{ name: "RACS", content: "RACS" }]}
        />
        <ToastContainer
          position="top-right"
          closeButton={<CustomeClose />}
          autoClose={6000}
        />
        {/* <Header /> */}
        <div className="content">
          <CSSTransition
            transitionName="fadeInOut"
            transitionEnterTimeout={250}
            transitionLeaveTimeout={250}
          >
            <Switch key={location.pathname} location={location}>
              <Route path="/" exact component={Home} />
              <Route component={NotFound} />
            </Switch>
          </CSSTransition>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(
  connect(
    (state) => ({
      messages: state.messages,
    }),
    (dispatch) =>
      bindActionCreators(
        {
          ...messageActionCreators,
        },
        dispatch
      )
  )(App)
);
