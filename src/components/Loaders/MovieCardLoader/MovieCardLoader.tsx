import { Skeleton } from '../Skeleton';

export const MovieCardLoader = () => {
	return (
		<>
			<Skeleton className=" mb-16 w-1/4 h-8 md:h-11.5" />
			<div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-10 gap-y-16 overflow-y-hidden overflow-x-scroll lg:overflow-visible">
				{Array.from({ length: 10 }).map((_, i) => (
					<Skeleton className="h-83.5 min-w-56 lg:min-w-50" />
				))}
			</div>
		</>
	);
};
