import { type FC } from 'react';
import { Icon } from '../Icon/Icon';

interface Props {
	rating: number;
}

export const Rating: FC<Props> = ({ rating }) => {
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
			className="flex items-center gap-1 px-3 py-1 text-lg/6 font-bold text-light rounded-2xl"
			style={{ backgroundColor: BgColor }}>
			<Icon
				name="star"
				className="fill-white"
			/>
			{formatRating}
		</p>
	);
};
