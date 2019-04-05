import { createStore, compose, applyMiddleware } from "redux";

import combineReducers from "./reducers/index";

const createAppropriateStore =
  process.env.NODE_ENV === "development"
    ? console.tron.createStore
    : createStore;

const store = createAppropriateStore(
  combineReducers,
  compose(applyMiddleware(...[]))
);

export default store;
