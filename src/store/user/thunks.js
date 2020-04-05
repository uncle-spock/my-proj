import * as actionsNames from '../store/user/actions';

export const signUpStart = () => async (dispatch) => {
	try {
		dispatch(actionsNames.signUpStart());

		console.log('signUpStart');

	} catch (error) {
		console.log(`user sign up: ${error}`);
	}
};