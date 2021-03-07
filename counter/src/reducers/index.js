import { combineReducers } from 'redux';
import './counter';
import countReducer from './counter';
import './isLogged';
import loggedReducer from './isLogged';

export default combineReducers({

    counter : countReducer,
    isLogged: loggedReducer
})

