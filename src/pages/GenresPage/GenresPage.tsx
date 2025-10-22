import { useQuery } from '@tanstack/react-query';
import { getGenres } from '../../api/movie';
import { Container, GenreCard } from '../../components';
import { GenresLoader } from '../../components/Loaders';

export const GenresPage = () => {
	const { data, status } = useQuery({
		queryKey: ['genres'],
		queryFn: () => getGenres(),
	});

	switch (status) {
		case 'error':
			return (
				<Container>
					<div>Ошибка</div>
				</Container>
			);
		case 'pending':
			return (
				<Container className="pt-16">
					<GenresLoader />
				</Container>
			);
		case 'success':
			return (
				<section>
					<Container className="pt-16 pb-40">
						<h1 className="mb-10 lg:mb-16 text-2xl/8 md:text-5xl/14 font-bold">
							Жанры фильмов
						</h1>
						<ul className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-6 md:gap-y-16">
							{data.map((genre) => (
								<GenreCard
									genre={genre}
									key={genre}
								/>
							))}
						</ul>
					</Container>
				</section>
			);
	}
};
