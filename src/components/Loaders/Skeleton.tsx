import { type FC } from 'react';
import { cn } from '../../utils';

interface Props {
	className?: string;
}

export const Skeleton: FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				'animate-pulse bg-neutral-900 rounded-2xl',
				className,
			)}></div>
	);
};
