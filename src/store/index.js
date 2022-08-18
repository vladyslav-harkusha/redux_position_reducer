import { createStore, applyMiddleware } from 'redux';
import { positionReducer } from "./positionReducer";
import thunk from 'redux-thunk';

const store = createStore(positionReducer, applyMiddleware(thunk));

export default store;