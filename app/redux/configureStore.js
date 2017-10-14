import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic, rootReducer } from "./modules/root";

const epicMiddleware = createEpicMiddleware(rootEpic);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

// HMR
if (module.hot) {
  module.hot.accept("./modules/root", () => {
    const rootEpic = require("./modules/root").default; // eslint-disable-line no-shadow, global-require
    epicMiddleware.replaceEpic(rootEpic);
  });
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  return store;
}
