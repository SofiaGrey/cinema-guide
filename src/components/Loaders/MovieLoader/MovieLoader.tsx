import { Skeleton } from '../Skeleton';

export const MovieLoader = () => {
	return (
		<div className="flex flex-col lg:pt-16 lg:flex-row">
			<div className="py-6 w-full order-1 lg:order-0 lg:pt-26.5 lg:pb-30.5 lg:max-w-150">
				<div className="grid grid-cols-7 gap-4 mb-4">
					<Skeleton className="h-8" />
					<Skeleton className="h-8" />
					<Skeleton className="h-8" />
					<Skeleton className="h-8" />
				</div>
				<Skeleton className="h-16 lg:h-28 w-full mb-4" />
				<Skeleton className="h-16 w-full mb-4 lg:mb-15" />
				<div className="grid grid-cols-4 lg:flex gap-4">
					<Skeleton className="h-14 col-span-full" />
					<Skeleton className="h-14 col-span-2" />
					<Skeleton className="h-14" />
					<Skeleton className="h-14" />
				</div>
			</div>
			<Skeleton className="w-full max-w-160 h-80 lg:h-auto" />
		</div>
	);
};
