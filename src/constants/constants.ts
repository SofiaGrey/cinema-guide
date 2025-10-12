import type { InputItem } from '../types';

export const API_URL = 'https://cinemaguide.skillbox.cc/';

export const AUTH_PATHS = {
	LOGIN: `${API_URL}auth/login`,
	LOGOUT: `${API_URL}auth/logout`,
};

export const USER_PATHS = {
	REGISTER: `${API_URL}user`,
	PROFILE: `${API_URL}profile`,
};

export const FAVORITES_PATHS = {
	BASE: `${API_URL}favorites`,
	REMOVE: (movieId: string) => `${API_URL}favorites/${movieId}`,
};

export const MOVIE_PATHS = {
	BASE: `${API_URL}movie`,
	TOP10: `${API_URL}movie/top10`,
	GENRES: `${API_URL}movie/genres`,
	BY_ID: (movieId: number) => `${API_URL}movie/${movieId}`,
	RANDOM: `${API_URL}movie/random`,
};

export const REGISTER_INPUTS: InputItem[] = [
	{
		type: 'email',
		iconName: 'mail',
		name: 'email',
		required: true,
		placeholder: 'Электронная почта',
		validation: {
			pattern: {
				value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
				message: 'Некорректный email',
			},
		},
	},
	{
		type: 'text',
		iconName: 'user',
		name: 'name',
		required: false,
		placeholder: 'Имя',
		validation: {
			minLength: {
				value: 2,
				message: 'Минимальная длина имени - 2 символа',
			},
		},
	},
	{
		type: 'text',
		iconName: 'user',
		name: 'surname',
		required: false,
		placeholder: 'Фамилия',
		validation: {
			minLength: {
				value: 2,
				message: 'Минимальная длина фамилии - 2 символа',
			},
		},
	},
	{
		type: 'password',
		iconName: 'key',
		name: 'password',
		required: true,
		placeholder: 'Пароль',
		validation: {
			minLength: {
				value: 6,
				message: 'Пароль должен быть не менее 6 символов',
			},
		},
	},
	{
		type: 'password',
		iconName: 'key',
		name: 'repeatPassword',
		required: true,
		placeholder: 'Подтвердите пароль',
	},
];

export const LOGIN_INPUTS: InputItem[] = [
	{
		type: 'email',
		iconName: 'mail',
		name: 'email',
		required: true,
		placeholder: 'Электронная почта',
	},
	{
		type: 'password',
		iconName: 'key',
		name: 'password',
		required: true,
		placeholder: 'Пароль',
	},
];
