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
					<Container className="pt-8">
						<h2 className=" text-2xl/8 md:text-[2.5rem]/11.5 font-bold lg:mb-16">
							Топ 10 фильмов
						</h2>
					</Container>
					<Container className="pt-10 pb-8 overflow-y-hidden overflow-x-scroll lg:overflow-visible">
						<ul className="flex w-full lg:grid lg:grid-cols-4 xl:grid-cols-5 gap-y-6 gap-x-10 md:gap-y-16">
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
