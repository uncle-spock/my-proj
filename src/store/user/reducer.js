import { createReducer } from '@reduxjs/toolkit';
import * as actionsNames from './actions';

const initialUser = { email: 'alex@email.com', password: 'Qwerty1!' };

const initialState = {
	registeredUsers: [initialUser],
};

export default createReducer(initialState, {
	[actionsNames.signUpStart]: state => {
		console.log(state);
	},
});
