import { createStore } from 'redux';
import { positionReducer } from "./positionReducer";

export const store = createStore(positionReducer);