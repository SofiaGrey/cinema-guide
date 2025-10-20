import type { FC } from 'react';
import { NavLink } from 'react-router';
import { useAppDispatch } from '../../hooks';
import { setVideoOpen } from '../../store/slices';
import { setVideo } from '../../store/slices/videoSlice';
import type { Movie } from '../../types';
import { formatRuntime } from '../../utils';
import { Button } from '../Button/Button';
import { Container } from '../Container/Container';
import { Icon } from '../Icon/Icon';
import { MovieLoader } from '../Loaders';
import { Rating } from '../Rating/Rating';
import { ToggleFavoriteBtn } from '../ToggleFavoriteBtn/ToggleFavoriteBtn';

interface Props {
	movie?: Movie;
	isLoading?: boolean;
	isError?: boolean;
	onRefetch?: () => void;
	isRandomMovie?: boolean;
}

export const MovieSection: FC<Props> = ({
	isRandomMovie,
	movie,
	isLoading,
	isError,
	onRefetch,
}) => {
	const dispatch = useAppDispatch();

	if (isError) {
		return (
			<div className="text-center py-10">
				<p className="mb-4 text-lg">Не удалось загрузить фильм</p>
				{onRefetch && (
					<Button
						variant="default"
						onClick={onRefetch}>
						Повторить
					</Button>
				)}
			</div>
		);
	}

	if (isLoading) {
		return (
			<Container>
				<MovieLoader />
			</Container>
		);
	}

	if (!movie) return null;

	const handleClick = () => {
		dispatch(setVideoOpen(true));
		dispatch(setVideo(movie.trailerYouTubeId));
	};

	return (
		<section>
			<Container className="flex flex-col lg:pt-16 lg:flex-row">
				<div className="shrink-0 py-6 w-full order-1 lg:order-0 lg:pt-26.5 lg:pb-30.5 lg:max-w-150">
					<div className="flex items-center gap-4 flex-wrap mb-4 text-lg/6 text-dark">
						<Rating rating={movie.tmdbRating} />
						<span>{movie.releaseYear}</span>
						<ul className="flex gap-4">
							{movie.genres.map((genre) => (
								<li key={genre}>{genre}</li>
							))}
						</ul>
						<span>{formatRuntime(movie.runtime)}</span>
					</div>
					<h1 className="text-2xl/8 mb-4 md:text-5xl/14 font-bold">
						{movie.title}
					</h1>
					<p className="text-lg/6 mb-8 md:mb-15 md:text-2xl/8 text-dark">
						{isRandomMovie
							? movie.plot.length > 150
								? `${movie.plot.slice(0, 200)}...`
								: movie.plot
							: movie.plot}
					</p>
					<div className=" grid grid-cols-4 lg:flex gap-4 ">
						<Button
							variant="default"
							className="bg-btn-primary col-span-full"
							onClick={() => handleClick()}>
							Трейлер
						</Button>
						{isRandomMovie && (
							<NavLink
								to={`/about-movie/${movie.id}`}
								className="flex items-center justify-center col-span-2 px-12 py-4 text-lg/6 font-bold text-nowrap rounded-full border border-border-dark bg-bg-default cursor-pointer outline-none hover:bg-btn-hover transition duration-300 ease-in-out">
								О фильме
							</NavLink>
						)}
						<ToggleFavoriteBtn id={movie.id.toString()} />
						{isRandomMovie && (
							<Button
								variant="icon"
								onClick={onRefetch}>
								<Icon
									name="reload"
									className="fill-white"></Icon>
							</Button>
						)}
					</div>
				</div>
				<div>
					<img
						src={movie.backdropUrl}
						alt={movie.title}
						className="w-full h-full object-cover rounded-2xl"
					/>
				</div>
			</Container>
		</section>
	);
};
