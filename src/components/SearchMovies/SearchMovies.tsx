import type { Dispatch, FC, SetStateAction } from 'react';
import { NavLink } from 'react-router';
import type { Movie } from '../../types';
import { formatRuntime } from '../../utils';
import { Rating } from '../Rating/Rating';

interface Props {
	data: Movie[];
	setValue: Dispatch<SetStateAction<string>>;
	setOpen?: () => void;
}
export const SearchMovies: FC<Props> = ({ data, setValue, setOpen }) => {
	const filteredMovies = data.slice(0, 5);

	const handleClick = () => {
		setValue('');
		setOpen && setOpen();
	};
	return (
		<ul className="absolute flex gap-x-4 p-2 w-full bg-bg-default rounded-lg top-15 overflow-x-scroll scroll z-10 lg:flex-col">
			{data &&
				filteredMovies.map((movie) => (
					<li
						key={movie.id}
						className="min-w-55 lg:max-w-full">
						<NavLink
							to={`/about-movie/${movie.id}`}
							onClick={() => handleClick()}
							className="flex flex-col gap-4 py-5 px-2 rounded-lg hover:bg-[#444748] transition duration-300 ease-in-out lg:flex-row">
							<img
								src={movie.posterUrl}
								alt={movie.title}
								className=" w-39.5 h-51.5 lg:w-10 lg:h-13 object-cover"
							/>
							<div className="flex flex-col gap-2">
								<div className="flex gap-3 text-sm/5 text-dark items-center flex-wrap">
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
