import {getItem, setItem} from '../storage';

export const getProfiles = () => {
	return new Promise(
		resolve => setTimeout(() => resolve(getItem()), 1000)
	);
};

export const signUp = (payload) => {
	return new Promise(
		resolve => setTimeout(() => {
			setItem(payload);
			resolve(201);
		}, 1000)
	);
};
