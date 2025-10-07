import { useQuery } from '@tanstack/react-query';
import { getRandomMovie } from '../../api/movie';
import { MovieSection } from '../MovieSection/MovieSection';

export const RandomMovie = () => {
	const { data, isLoading, isError, refetch } = useQuery({
		queryKey: ['randomMovie'],
		queryFn: () => getRandomMovie(),
		refetchOnWindowFocus: false,
	});

	return (
		<MovieSection
			movie={data}
			isLoading={isLoading}
			isError={isError}
			onRefetch={refetch}
			isRandomMovie
		/>
	);
};
