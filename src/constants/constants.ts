export const API_URL = 'https://cinemaguide.skillbox.cc/';

export const AUTH_PATHS = {
	LOGIN: `${API_URL}auth/login`,
	LOGOUT: `${API_URL}auth/logout`,
}

export const USER_PATHS = {
	REGISTER: `${API_URL}user`,
	PROFILE: `${API_URL}profile`,
}

export const FAVORITES_PATHS = {
	BASE: `${API_URL}favorites`,
	REMOVE: (movieId: number) => `${API_URL}favorites/${movieId}`,
}

export const MOVIE_PATHS = {
	BASE: `${API_URL}movie`,
	TOP10: `${API_URL}movie/top10`,
	GENRES: `${API_URL}movie/genres`,
	BY_ID: (movieId: number) => `${API_URL}movie/${movieId}`,
	RANDOM: `${API_URL}movie/random`,
}
