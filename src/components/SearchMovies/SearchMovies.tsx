import type { Dispatch, FC, SetStateAction } from 'react';
import { NavLink } from 'react-router';
import type { Movie } from '../../types';
import { formatRuntime } from '../../utils';
import { Rating } from '../Rating/Rating';

interface Props {
	data: Movie[];
	setValue: Dispatch<SetStateAction<string>>;
}
export const SearchMovies: FC<Props> = ({ data, setValue }) => {
	const filteredMovies = data.slice(0, 5);

	return (
		<ul className="absolute p-2 w-full bg-bg-default rounded-lg top-15 z-10">
			{data &&
				filteredMovies.map((movie) => (
					<li key={movie.id}>
						<NavLink
							to={`/about-movie/${movie.id}`}
							onClick={() => setValue('')}
							className="flex gap-4 py-5 px-2 rounded-lg hover:bg-[#444748] transition duration-300 ease-in-out">
							<img
								src={movie.posterUrl}
								alt={movie.title}
								className="w-10 h-13 object-cover"
							/>
							<div className="flex flex-col gap-2">
								<div className="flex gap-3 text-sm/5 text-dark">
									<Rating
										rating={movie.tmdbRating}
										variant="small"
									/>
									<span>{movie.releaseYear}</span>
									{movie.genres.map((genre) => (
										<span key={genre}>{genre}</span>
									))}
									<span>{formatRuntime(movie.runtime)}</span>
								</div>
								<h2 className="text-lg/6 font-bold">{movie.title}</h2>
							</div>
						</NavLink>
					</li>
				))}
		</ul>
	);
};
