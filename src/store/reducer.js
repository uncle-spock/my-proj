import { createReducer } from '@reduxjs/toolkit';
import * as actionsNames from './actions';

const initialState = {
	isLoading: false,
	isAuth: false
};

export const authReducer = createReducer(initialState, {
	[actionsNames.loginStart]: state => {
		state.isLoading = true;
	},

	[actionsNames.loginSuccess]: state => {
		state.isLoading = false;
		state.isAuth = true;
	},

	[actionsNames.loginFailed]: state => {
		state.isLoading = false;
	},
});
