import { type FC } from 'react';
import { cn } from '../../utils';
import { Icon } from '../Icon/Icon';

interface Props {
	rating: number;
	className?: string;
	variant?: 'default' | 'small';
}

export const Rating: FC<Props> = ({ rating, className, variant }) => {
	const isSmall = variant === 'small';

	const BgColor =
		rating >= 8
			? '#A3942E'
			: rating >= 7
			? '#468C33'
			: rating >= 5
			? '#777777'
			: '#BC342B';

	const formatRating = (Math.floor(rating * 100) / 100).toFixed(1);

	return (
		<p
			className={cn(
				'flex items-center gap-1 px-3 py-1 text-lg/6 font-bold text-light rounded-2xl',
				className,
				{ ['text-xs/4 py-0.5 px-2']: isSmall },
			)}
			style={{ backgroundColor: BgColor }}>
			<Icon
				name="star"
				className={cn('fill-white', { ['w-2.5 h-2.5']: isSmall })}
			/>
			{formatRating}
		</p>
	);
};
