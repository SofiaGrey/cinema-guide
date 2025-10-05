import { useQuery } from '@tanstack/react-query';
import type { FC } from 'react';
import { NavLink } from 'react-router';
import { getRandomMovie } from '../../api/movie';
import { Button } from '../Button/Button';
import { Container } from '../Container/Container';
import { Icon } from '../Icon/Icon';
import { RandomMovieLoader } from '../Loaders';
import { Rating } from '../Rating/Rating';

interface Props {
	randomMovie?: boolean;
}

export const RandomMovie: FC<Props> = ({ randomMovie }) => {
	const {
		data: movie,
		status,
		refetch,
	} = useQuery({
		queryKey: ['randomMovie'],
		queryFn: () => getRandomMovie(),
		refetchOnWindowFocus: false,
	});

	switch (status) {
		case 'error':
			return <div>Не удалось загрузить фильм</div>;
		case 'pending':
			return (
				<Container>
					<RandomMovieLoader />
				</Container>
			);
		case 'success':
			const runtimeHours = Math.round(movie && movie?.runtime / 60);
			const runtimeMinutes = movie && movie.runtime % 60;

			return (
				<section>
					<Container className="flex">
						<div className="shrink-0 pt-26.5 pb-30.5 max-w-150">
							<div className="flex items-center gap-4 mb-4 text-lg/6 text-dark">
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
								{randomMovie && (
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
								{randomMovie && (
									<Button
										variant="icon"
										onClick={() => refetch()}>
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
	}
};
