import type { MouseEvent, PropsWithChildren } from 'react';
import { cn } from '../../utils';
import { Icon } from '../Icon/Icon';

interface Props {
	className?: string;
	wrapperClassName?: string;
	isOpen: boolean;
	cb: () => void;
}

export const Modal = ({
	children,
	isOpen,
	className,
	wrapperClassName,
	cb,
}: PropsWithChildren<Props>) => {
	const handleClick = (event: MouseEvent<HTMLDivElement>) => {
		if (event.target === event.currentTarget) {
			cb();
		}
	};
	return (
		<div
			onClick={handleClick}
			className={cn(
				'bg-[rgba(0,0,0,.5)] fixed inset-0 flex items-center justify-center z-10 opacity-0 transition-all pointer-events-none',
				{
					['pointer-events-auto opacity-100']: isOpen,
				},
				className,
			)}>
			<div
				className={cn(
					'relative flex flex-col justify-center items-center gap-10 py-16 px-10 min-w-[335px] max-w-[420px] w-full bg-white rounded-3xl',
					wrapperClassName,
				)}>
				{children}
				<button
					className="absolute top-0 -right-18 rounded-full bg-white p-3 cursor-pointer"
					onClick={cb}>
					<Icon
						name="crossLarge"
						className="fill-black"
					/>
				</button>
			</div>
		</div>
	);
};
