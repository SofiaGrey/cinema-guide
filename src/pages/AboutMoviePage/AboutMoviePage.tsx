import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { getMovieById } from '../../api/movie';
import { AboutMovieSection, MovieSection } from '../../components';

export const AboutMoviePage = () => {
	const { movieId } = useParams();

	const { data, isLoading, isError, refetch } = useQuery({
		queryKey: ['movieById', movieId],
		queryFn: () => getMovieById(Number(movieId)),
	});

	return (
		<>
			<MovieSection
				movie={data}
				isLoading={isLoading}
				isError={isError}
				onRefetch={refetch}
			/>
			{data && <AboutMovieSection data={data} />}
		</>
	);
};
