import type IconProps from './icon.props';

export const LineIcon = (props: IconProps) => {
	return (
		<svg
			width="177"
			height="2"
			viewBox="0 0 177 2"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				d="M177 1H0"
				stroke="white"
				strokeOpacity="0.5"
				strokeDasharray="2 2"
			/>
		</svg>
	);
};
