import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";

// We'll soon revisit the initial state of this application.
const INITIAL_STATE = {
  grid: [Array(20).fill("pink")],
};

// ACTION TYPES
/* we'll add some action types soon */

// ACTION CREATORS
/* we'll also add the corresponding action creators */

// And we'll revisit this reducer.
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store;
