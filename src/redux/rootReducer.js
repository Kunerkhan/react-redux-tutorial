import { combineReducers } from 'redux';

import postsReducer from './PostReducer';
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers( {
    posts: postsReducer,
    app: appReducer
});