import { combineReducers, configureStore } from '@reduxjs/toolkit';
import testReducer from './store/testReducer';


const rootReducer = combineReducers({
    questions : testReducer,
})

export default configureStore({ reducer : rootReducer});