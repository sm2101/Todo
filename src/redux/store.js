import {createStore, combineReducers} from 'redux';
import {reducer,themeReducer} from "./reducers";

export const store = createStore(combineReducers({
    todos:reducer,
    theme:themeReducer
}));