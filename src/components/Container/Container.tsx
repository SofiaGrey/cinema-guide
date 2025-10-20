import type { FC, HTMLProps, PropsWithChildren } from 'react';
import { cn } from '../../utils';

interface Props extends PropsWithChildren<HTMLProps<HTMLDivElement>> {
	className?: string;
}

export const Container: FC<Props> = ({ children, className, ...props }) => {
	return (
		<div
			className={cn(
				'container mx-auto max-w-[1440px] w-full px-5 md:px-20',
				`${className}`,
			)}
			{...props}>
			{children}
		</div>
	);
};
