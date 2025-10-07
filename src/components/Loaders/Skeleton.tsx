import { type FC } from 'react';
import { cn } from '../../utils';

interface Props {
	className?: string;
}

export const Skeleton: FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				' relative overflow-hidden bg-neutral-800 rounded-2xl after:content-[""] after:absolute after:top-0 after:left-[-100%] after:h-full after:w-full after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent after:animate-shimmer ',
				className,
			)}></div>
	);
};
