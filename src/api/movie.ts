import axios from 'axios';
import { API_URL, MOVIE_PATHS } from '../constants/constants';
import type { Movie } from '../types';

const instance = axios.create({
	baseURL: API_URL,
	headers: { 'Content-Type': 'application/json' },
});

export const getRandomMovie = async (): Promise<Movie> => {
	const res = await instance.get(MOVIE_PATHS.RANDOM);
	return res.data;
};
