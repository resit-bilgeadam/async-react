import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { SET_TODOS } from "./types";

const INITIAL_STATE = {
  todos: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, todos: action.payload };

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
