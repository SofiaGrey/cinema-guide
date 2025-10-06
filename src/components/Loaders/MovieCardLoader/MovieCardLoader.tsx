import { Skeleton } from '../Skeleton';

export const MovieCardLoader = () => {
	return (
		<>
			<Skeleton className=" mb-16 w-1/4 h-11.5" />
			<div className="grid grid-cols-5 gap-x-10 gap-y-16">
				{Array.from({ length: 10 }).map((_, i) => (
					<Skeleton className="h-83.5" />
				))}
			</div>
		</>
	);
};
