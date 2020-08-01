import * as Yup from 'yup';

export const SignUpValidFormScheme = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email')
		.required('Required'),
	password: Yup.string()
		.required('*Missing'),
	retypePassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
		.required('*Missing'),
});

export const SignInValidFormScheme = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email')
		.required('Required'),
	password: Yup.string()
		.required('*Missing'),
});
