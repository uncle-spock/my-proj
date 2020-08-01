import { storageAuthName } from '../constants';

export const getItem = () => {
	return JSON.parse(localStorage.getItem(storageAuthName));
}

export const setItem = (payload) => {
	return localStorage.setItem(storageAuthName, JSON.stringify(payload));
}
