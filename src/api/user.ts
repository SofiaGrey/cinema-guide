import axios from 'axios';
import { API_URL, AUTH_PATHS, FAVORITES_PATHS, USER_PATHS } from '../constants/constants';
import type {
	ErrorResponse,
	LoginData,
	Movie,
	RegisterData,
	SuccessfulResponse,
	UserData,
} from '../types';

const instance = axios.create({
	baseURL: API_URL,
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true,
});

export const createUser = async (
	data: RegisterData,
): Promise<SuccessfulResponse | ErrorResponse> => {
	const res = await instance.post(USER_PATHS.REGISTER, data);
	return res.data;
};

export const login = async (
	data: LoginData,
): Promise<SuccessfulResponse | ErrorResponse> => {
	const res = await instance.post(AUTH_PATHS.LOGIN, data);
	return res.data;
};

export const getProfile = async (): Promise<UserData> => {
	const res = await instance.get(USER_PATHS.PROFILE);
	return res.data;
};

export const getFavorites = async (): Promise<Movie[]> => {
	const res = await instance.get(FAVORITES_PATHS.BASE);
	return res.data;
}

export const addToFavorites = async (id: string): Promise<SuccessfulResponse | ErrorResponse> => {
	const res = await instance.post(FAVORITES_PATHS.BASE, { id: id.toString() });
	return res.data;
}

export const removeFromFavorites = async (movieId: string): Promise<SuccessfulResponse | ErrorResponse> => {
	const res = await instance.delete(FAVORITES_PATHS.REMOVE(movieId));
	return res.data;
}
