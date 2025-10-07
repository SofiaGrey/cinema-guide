import { Skeleton } from '../Skeleton';

export const GenresLoader = () => {
	return (
		<>
			<Skeleton className="mb-16 w-1/4 h-14" />
			<div className="grid grid-cols-4 gap-x-10 gap-y-16">
				{Array.from({ length: 12 }).map((_, i) => (
					<Skeleton className="h-66.5 rounded-3xl" />
				))}
			</div>
		</>
	);
};
