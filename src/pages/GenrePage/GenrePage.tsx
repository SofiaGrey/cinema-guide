import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router';
import { getSearchMovie } from '../../api/movie';
import { Button, Container, Frame, Icon } from '../../components';
import { MovieCardLoader } from '../../components/Loaders';
import type { Movie } from '../../types';

export const GenrePage = () => {
	const { genreName } = useParams();

	const [movies, setMovies] = useState<Movie[]>([]);
	const [page, setPage] = useState(0);
	const [hasMore, setHasMore] = useState(true);

	const { data, status, isPending } = useQuery({
		queryKey: ['movieByGenre', genreName, page],
		queryFn: () => getSearchMovie({ genre: genreName, page }),
	});

	useEffect(() => {
		setPage(0);
		setMovies([]);
		setHasMore(true);
	}, [genreName]);

	useEffect(() => {
		if (data) {
			setMovies((prev) => [...prev, ...data]);
			if (data.length < 10) {
				setHasMore(false);
			}
		}
	}, [data]);

	switch (status) {
		case 'error':
			return (
				<Container>
					<div>Ошибка</div>
				</Container>
			);
		case 'pending':
			return (
				<Container>
					<MovieCardLoader />
				</Container>
			);
		case 'success':
			return (
				<section>
					<Container className="flex flex-col pt-16 pb-40">
						<h1 className="text-2xl/8 mb-10 md:mb-16 md:text-5xl/14 font-bold">
							<NavLink
								to={'/genres'}
								className="flex items-center gap-4 capitalize">
								<Icon
									name="back"
									className="fill-white w-8 h-8 md:w-10 md:h-10"
								/>
								{genreName}
							</NavLink>
						</h1>
						<ul className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-10 gap-y-6 md:gap-y-16 mb-16">
							<Frame data={movies} />
						</ul>
						{hasMore && (
							<Button
								variant="default"
								className="bg-btn-primary self-center"
								onClick={() => setPage((prev) => prev + 1)}
								disabled={isPending}>
								Показать ещё
							</Button>
						)}
					</Container>
				</section>
			);
	}
};
