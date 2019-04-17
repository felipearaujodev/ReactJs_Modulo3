import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import combineReducers from "./ducks/index";
import sagas from "./sagas/index";

const middleWares = [];

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleWare = createSagaMiddleware({ sagaMonitor });

middleWares.push(sagaMiddleWare);

const createAppropriateStore =
  process.env.NODE_ENV === "development"
    ? console.tron.createEnhancer
    : () => {};

const store = createStore(
  combineReducers,
  compose(applyMiddleware(...middleWares))
);

sagaMiddleWare.run(sagas);

export default store;
