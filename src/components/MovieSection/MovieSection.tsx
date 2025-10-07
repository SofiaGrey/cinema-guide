import type { FC } from 'react';
import { NavLink } from 'react-router';
import type { Movie } from '../../types';
import { Button } from '../Button/Button';
import { Container } from '../Container/Container';
import { Icon } from '../Icon/Icon';
import { MovieLoader } from '../Loaders';
import { Rating } from '../Rating/Rating';

interface Props {
	movie?: Movie; // если есть — отрисовываем фильм
	isLoading?: boolean; // если true — показываем загрузку
	isError?: boolean; // если true — показываем ошибку
	onRefetch?: () => void; // кнопка "повторить" при ошибке
	isRandomMovie?: boolean;
}

export const MovieSection: FC<Props> = ({
	isRandomMovie,
	movie,
	isLoading,
	isError,
	onRefetch,
}) => {
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

	const runtimeHours = Math.round(movie && movie?.runtime / 60);
	const runtimeMinutes = movie && movie.runtime % 60;

	return (
		<section>
			<Container className="flex pt-16">
				<div className="shrink-0 pt-26.5 pb-30.5 max-w-150">
					<div className="flex items-center gap-4 flex-wrap mb-4 text-lg/6 text-dark">
						<Rating rating={movie.tmdbRating} />
						<span>{movie.releaseYear}</span>
						<ul className="flex gap-4">
							{movie.genres.map((genre) => (
								<li key={genre}>{genre}</li>
							))}
						</ul>
						<span>
							{runtimeHours} ч {runtimeMinutes} мин
						</span>
					</div>
					<h1 className="mb-4 text-5xl/14 font-bold">{movie.title}</h1>
					<p className="mb-15 text-2xl/8 text-dark">
						{movie.plot.length > 150
							? `${movie.plot.slice(0, 200)}...`
							: movie.plot}
					</p>
					<div className="flex gap-4">
						<Button
							variant="default"
							className="bg-btn-primary">
							Трейлер
						</Button>
						{isRandomMovie && (
							<NavLink
								to={`/about-movie/${movie.id}`}
								className="px-12 py-4 text-lg/6 font-bold rounded-full border border-border-dark bg-bg-default cursor-pointer outline-none hover:bg-btn-hover transition duration-300 ease-in-out">
								О фильме
							</NavLink>
						)}
						<Button variant="icon">
							<Icon
								name="favorite"
								className="fill-white"></Icon>
						</Button>
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
