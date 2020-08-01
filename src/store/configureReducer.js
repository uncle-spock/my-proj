import { combineReducers } from 'redux';
import { authReducer } from '../components/auth';

export const rootReducer = combineReducers({
	auth: authReducer,
});
