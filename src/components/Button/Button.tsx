import type { ButtonHTMLAttributes, FC } from 'react';
import { cn } from '../../utils';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'default' | 'icon' | 'full' | 'text';
}
const base =
	'text-lg/6 font-bold rounded-full border border-border-dark bg-bg-default cursor-pointer outline-none hover:bg-btn-hover transition duration-300 ease-in-out';

const variants = {
	default: 'px-12 py-4',
	icon: 'px-5.5 py-4 ',
	full: 'w-full py-4 bg-btn-primary',
	text: 'w-full py-4 bg-inherit text-black border-none hover:text-white',
};

export const Button: FC<Props> = ({
	variant = 'default',
	className,
	children,
	...props
}) => {
	return (
		<button
			{...props}
			className={cn(base, variants[variant], className)}>
			{children}
		</button>
	);
};
