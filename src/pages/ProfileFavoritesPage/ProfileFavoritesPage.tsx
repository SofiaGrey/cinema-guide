import { useQuery } from '@tanstack/react-query';
import { getFavorites } from '../../api/user';
import { Frame } from '../../components';
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
				<ul className="grid grid-cols-5 gap-x-10 gap-y-16">
					<Frame
						data={data}
						showBtn
					/>
				</ul>
			) : (
				<p className='text-2xl/8'>У вас нет избранных фильмов</p>
			);
	}
};
