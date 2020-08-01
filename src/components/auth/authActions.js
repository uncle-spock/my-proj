import { createAction } from '@reduxjs/toolkit';

import * as api from '../../services/api/authClient';

//sign up
export const signUpStart = createAction('auth/signUpStart');
export const signUpSuccess = createAction('auth/signUpSuccess');
export const signUpFailed = createAction('auth/signUpFailed');
export const signUp = (formData) => async (dispatch) => {
	try {
		dispatch(signUpStart());

		const allProfiles = await api.getProfiles();

		const payload = allProfiles ? [
			...allProfiles,
			{
				token: Date.now(),
				...formData,
			}
		] : [{
			token: Date.now(),
			...formData,
		}];

		const response = await api.signUp(payload);

		if (response === 201) {
			alert('Success');
		}

		dispatch(signUpSuccess());
	} catch (error) {
		dispatch(signUpFailed());
		alert(`Failed sign up: ${error}`);
	}
};

//login
export const loginStart = createAction('auth/loginStart');
export const loginSuccess = createAction('auth/loginSuccess');
export const loginFailed = createAction('auth/loginFailed');
export const login = (formData) => async (dispatch) => {
	try {
		dispatch(loginStart());

		const allProfiles = await api.getProfiles();

		allProfiles.forEach((profile) => {
			if (profile.email === formData.email && profile.password === formData.password) {
				dispatch(loginSuccess(profile.email));
			} else {
				alert('You are not registered.');
			}
		});

	} catch (error) {
		dispatch(loginFailed());
		console.log(`Failed login: ${error}`);
	}
};

//log out
export const logOutAction = createAction('auth/logOut');
export const logOut = () => dispatch => {
	dispatch(logOutAction());
}