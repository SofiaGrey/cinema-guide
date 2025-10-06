import { useQuery } from '@tanstack/react-query';
import { getTopMovies } from '../../api/movie';
import { Container } from '../Container/Container';
import { Frame } from '../Frame/Frame';
import { MovieCardLoader } from '../Loaders';

export const TopMovies = () => {
	const { data, status } = useQuery({
		queryKey: ['top10'],
		queryFn: () => getTopMovies(),
	});

	switch (status) {
		case 'error':
			return <div>Ошибка</div>;
		case 'pending':
			return (
				<Container>
					<MovieCardLoader />
				</Container>
			);
		case 'success':
			return (
				<section>
					<Container className="pt-10 pb-30">
						<h2 className="text-[2.5rem]/11.5 font-bold mb-16">
							Топ 10 фильмов
						</h2>
						<ul className="grid grid-cols-5 gap-x-10 gap-y-16">
							<Frame
								data={data}
								showIndex
							/>
						</ul>
					</Container>
				</section>
			);
	}
};
