import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './reducer';

const rootReducer = combineReducers({
	auth: authReducer,
});

export const store = configureStore({
	reducer: rootReducer
});
