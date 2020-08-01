import { createAction } from '@reduxjs/toolkit';

export const setRegisteredProfiles = createAction('auth/setRegisteredProfiles');

//sign up
export const signUpStart = createAction('auth/signUpStart');

export const signUpSuccess = createAction('auth/signUpSuccess');

export const signUpFailed = createAction('auth/signUpFailed');

//login
export const loginStart = createAction('auth/loginStart');

export const loginSuccess = createAction('auth/loginSuccess');

export const loginFailed = createAction('auth/loginFailed');

//log out
export const logOut = createAction('auth/logOut');