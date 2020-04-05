import { createAction } from '@reduxjs/toolkit';

export const loginStart = createAction('loginStart');

export const loginSuccess = createAction('loginSuccess');

export const loginFailed = createAction('loginFailed');