import { Skeleton } from '../Skeleton';

export const GenresLoader = () => {
	return (
		<>
			<Skeleton className="mb-16 w-1/4 h-14 md:h-8" />
			<div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-6 md:gap-y-16">
				{Array.from({ length: 12 }).map((_, i) => (
					<Skeleton className="h-66.5 rounded-3xl" />
				))}
			</div>
		</>
	);
};
