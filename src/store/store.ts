// store/store.ts
import { createStore, combineReducers } from "redux";
import rootReducer from "../reducers/reducers";

const store = createStore(rootReducer);

export default store;
