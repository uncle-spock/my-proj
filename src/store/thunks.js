import * as actionsNames from '../store/actions';

export const login = () => async (dispatch) => {
	try {
		dispatch(actionsNames.loginStart());

		console.log('login');

	} catch (error) {
		console.log(error);
	}
};