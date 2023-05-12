import { combineReducers, configureStore } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';
import logger from'redux-logger';
import Reducer from './UserReducer';



const rootReducer = combineReducers({user:Reducer})
export const Store = configureStore({
    reducer:rootReducer,
    middleware:[thunk,logger]
})
