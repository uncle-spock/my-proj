import { createReducer } from '@reduxjs/toolkit';
import * as actionsNames from './authActions';

const initialState = {
	userEmail: null,
	isLoading: false,
	isAuth: false,
};

export const authReducer = createReducer(initialState, {
	[actionsNames.signUpStart]: state => {
		state.isLoading = true;
	},
	[actionsNames.signUpSuccess]: state => {
		state.isLoading = false;
	},
	[actionsNames.signUpFailed]: state => {
		state.isLoading = false;
	},
	[actionsNames.loginStart]: state => {
		state.isLoading = true;
	},
	[actionsNames.loginSuccess]: (state, action) => {
		state.isLoading = false;
		state.isAuth = true;
		state.userEmail = action.payload;
	},
	[actionsNames.loginFailed]: state => {
		state.isLoading = false;
	},
	[actionsNames.logOut]: state => {
		state.userEmail = null;
		state.isLoading = false;
		state.isAuth = false;
	},
});
