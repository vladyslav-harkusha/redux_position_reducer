import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { positionReducer } from "./positionReducer";

const store = createStore(positionReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;