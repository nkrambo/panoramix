import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import messages from "./messages";
import { wrapEpics } from "../../common/epicHelpers";

// wrap epics for error handling, see epicHelpers
export const rootEpic = wrapEpics({
  // accountEpics,
});

// combine all module reducers
export const rootReducer = combineReducers({
  form,
  messages,
});
