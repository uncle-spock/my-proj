import { withRouter } from 'react-router-dom';

import * as actionsNames from './actions';
import * as api from '../../services/api/authClient';

export const getRegisteredProfiles = () => async (dispatch) => {
	try {
		const payload = await api.getProfiles();
		debugger;
		dispatch(actionsNames.setRegisteredProfiles(payload));
	} catch (error) {
		console.log(`Failed get registered users: ${error}`);
	}
};

export const signUp = (formData) => async (dispatch) => {
	console.log(4, withRouter);

	try {
		dispatch(actionsNames.signUpStart());

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

		dispatch(actionsNames.signUpSuccess());
	} catch (error) {
		dispatch(actionsNames.signUpFailed());
		console.log(`Failed sign up: ${error}`);
	}
};

export const login = (formData) => async (dispatch) => {
	try {
		dispatch(actionsNames.loginStart());

		const allProfiles = await api.getProfiles();
		// const test = await fetch('https://my-json-server.typicode.com/uncle-spock/api-placeholder/posts');
		// console.log(test.json());


		if (!allProfiles) {
			alert('You are not registered.');
		}

		allProfiles.forEach((profile) => {
			if (profile.email === formData.email && profile.password === formData.password) {
				dispatch(actionsNames.loginSuccess());
			} else {
				alert('You are not registered.');
			}
		});

	} catch (error) {
		dispatch(actionsNames.loginFailed());
		console.log(`Failed login: ${error}`);
	}
};
