import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './configureReducer';

export const store = configureStore({
	reducer: rootReducer
});
