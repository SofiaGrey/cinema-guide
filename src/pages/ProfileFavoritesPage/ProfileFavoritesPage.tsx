import { useQuery } from '@tanstack/react-query';
import { getFavorites } from '../../api/user';
import { Container, Frame } from '../../components';
import { MovieCardLoader } from '../../components/Loaders';

export const ProfileFavoritesPage = () => {
	const { data, status } = useQuery({
		queryKey: ['favorites'],
		queryFn: () => getFavorites(),
		retry: 0,
	});

	switch (status) {
		case 'error':
			return <div>Не удалось получить избранные фильмы</div>;
		case 'pending':
			return <MovieCardLoader />;
		case 'success':
			return data.length ? (
				<Container className="pt-10 pb-8 overflow-y-hidden overflow-x-scroll lg:overflow-visible mb-38">
					<ul className="flex w-full lg:grid lg:grid-cols-4 xl:grid-cols-5 gap-y-6 gap-x-10 md:gap-y-16 ">
						<Frame
							data={data}
							showBtn
						/>
					</ul>
				</Container>
			) : (
				<p className="text-2xl/8">У вас нет избранных фильмов</p>
			);
	}
};
