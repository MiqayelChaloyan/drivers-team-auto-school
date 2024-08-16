import { combineReducers, configureStore } from '@reduxjs/toolkit';

import testReducer from './store/testReducer';
import modalReducer from './store/modalReducer';


const rootReducer = combineReducers({
    questions : testReducer,
    modal : modalReducer,
});

export default configureStore({ reducer : rootReducer});