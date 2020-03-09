import {combineReducers} from 'redux';

import movieReducer from './movie';
import userReducer from './user';
import userEdit from './userEdit';

const rootReducer = combineReducers({
    movieReducer,
    userReducer
})

export default rootReducer;