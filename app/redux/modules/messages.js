/** *************************
*          CONSTANTS
**************************** */

export const SHOW_MESSAGE = "SHOW_MESSAGE";
const RESET_MESSAGE = "RESET_MESSAGE";

/** *************************
*       ACTION CREATORS
**************************** */

export const showMessage = (title, content, style) => ({
  type: SHOW_MESSAGE,
  title,
  content,
  style,
});

export const resetMessage = () => ({
  type: RESET_MESSAGE,
});

/* **************************
*          REDUCERS
**************************** */

const initialState = {
  title: "",
  content: "",
  type: "",
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {
        ...state,
        title: action.title,
        content: action.content,
        type: action.style,
      };
    case RESET_MESSAGE:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
}
