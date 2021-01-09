import counterReducer from './counter.js';
import loggedReducer from './isLogged.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    counterReducer,
    loggedReducer
});

export default rootReducer;