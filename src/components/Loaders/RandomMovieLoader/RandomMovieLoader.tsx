import { Skeleton } from '../Skeleton';

export const RandomMovieLoader = () => {
	return (
		<div className="grid grid-cols-2 pt-26.5 pb-30.5 w-full h-150">
			<div className="max-w-150">
				<div className="grid grid-cols-7 gap-4 mb-4">
					<Skeleton className="h-8" />
					<Skeleton className="h-8" />
					<Skeleton className="h-8" />
					<Skeleton className="h-8" />
				</div>
				<Skeleton className="h-28 w-full mb-4" />
				<Skeleton className="h-16 w-full mb-15" />
				<div className="grid grid-cols-4 gap-4">
					<Skeleton className="h-14" />
					<Skeleton className="h-14" />
					<Skeleton className="h-14" />
					<Skeleton className="h-14" />
				</div>
			</div>
			<Skeleton className="w-full max-w-160" />
		</div>
	);
};
