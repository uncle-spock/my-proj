import { createReducer } from '@reduxjs/toolkit';
import * as actionsNames from './actions';

const initialState = {
	registeredProfiles: [],
	isLoading: false,
	isAuth: false,
	profileToken: null,
};

export const authReducer = createReducer(initialState, {
	[actionsNames.setRegisteredProfiles]: (state, { payload }) => {
		state.registeredProfiles = payload;
	},
	[actionsNames.signUpStart]: state => {
		state.isLoading = true;
	},
	[actionsNames.signUpSuccess]: (state) => {
		state.isLoading = false;
	},
	[actionsNames.signUpFailed]: state => {
		state.isLoading = false;
	},
	[actionsNames.loginStart]: state => {
		state.isLoading = true;
	},
	[actionsNames.loginSuccess]: (state) => {
		state.isLoading = false;
		state.isAuth = true;
	},
	[actionsNames.loginFailed]: state => {
		state.isLoading = false;
	},
	[actionsNames.logOut]: state => {
		state.isLoading = false;
		state.isAuth = false;
		state.profileToken = null;
	},
});
