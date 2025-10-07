import axios from 'axios';
import { API_URL, MOVIE_PATHS } from '../constants/constants';
import type { Movie, SearchMovieParams } from '../types';

const instance = axios.create({
	baseURL: API_URL,
	headers: { 'Content-Type': 'application/json' },
});

export const getRandomMovie = async (): Promise<Movie> => {
	const res = await instance.get(MOVIE_PATHS.RANDOM);
	return res.data;
};

export const getTopMovies = async (): Promise<Movie[]> => {
	const res = await instance.get(MOVIE_PATHS.TOP10);
	return res.data;
};

export const getGenres = async (): Promise<string[]> => {
	const res = await instance.get(MOVIE_PATHS.GENRES);
	return res.data;
};

export const getSearchMovie = async ({
	genre,
	title,
	page = 0,
}: SearchMovieParams): Promise<Movie[]> => {
	const res = await instance.get(MOVIE_PATHS.BASE, {
		params: {
			count: 10,
			page,
			...(genre ? { genre } : {}),
			...(title ? { title } : {}),
		},
	});
	return res.data;
};
