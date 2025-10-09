export type IconType =
	| 'back'
	| 'burger'
	| 'check'
	| 'copyright'
	| 'crossLarge'
	| 'crossSmall'
	| 'favoriteFill'
	| 'favorite'
	| 'genres'
	| 'key'
	| 'line'
	| 'mail'
	| 'ok'
	| 'reload'
	| 'search'
	| 'star'
	| 'tg'
	| 'userFill'
	| 'user'
	| 'vk'
	| 'yt';

export interface Movie {
	id: number;
	title: string;
	originalTitle: string;
	language: string;
	releaseYear: number;
	releaseDate: string;
	genres: [string];
	plot: string;
	runtime: number;
	budget: string;
	revenue: string;
	homepage: string;
	status: string;
	posterUrl: string;
	backdropUrl: string;
	trailerUrl: string;
	trailerYouTubeId: string;
	tmdbRating: number;
	searchL: string;
	keywords: [string];
	countriesOfOrigin: [string];
	languages: [string];
	cast: [string];
	director: string;
	production: string;
	awardsSummary: string;
}

export type SearchMovieParams = {
	genre?: string;
	title?: string;
	page?: number;
};

export interface Inputs {
	email: string;
	name: string;
	surname: string;
	password: string;
	repeatPassword: string;
}

export interface InputItem {
	type: string;
	iconName: IconType;
	name: keyof Inputs;
	required: boolean;
	placeholder: string;
	validation?: {
		minLength?: {
			value: number;
			message: string;
		};
		pattern?: {
			value: RegExp;
			message: string;
		};
	};
}
