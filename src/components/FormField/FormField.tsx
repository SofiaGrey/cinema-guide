import { forwardRef } from 'react';
import type { FieldError } from 'react-hook-form';
import type { IconType } from '../../types';
import { cn } from '../../utils';
import { Icon } from '../Icon/Icon';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	iconName: IconType;
	error?: FieldError;
};

export const FormField = forwardRef<HTMLInputElement, Props>(
	({ iconName, className, placeholder, error, ...props }, ref) => {
		return (
			<label
				className={cn('relative w-full flex items-center flex-col gap-x-3')}>
				<Icon
					name={iconName}
					className={cn(
						'absolute top-4 left-4 fill-[rgba(0,0,0,.4)] transition-colors',
						{
							['fill-error']: error,
						},
					)}
				/>
				<input
					ref={ref}
					placeholder={placeholder}
					className={cn(
						'outline-0 w-full p-4 pl-13 rounded-lg border border-[rgba(0,0,0,.4)] text-lg/6 text-black placeholder:text-[rgba(0,0,0,.4)] bg-transparent transition-colors',
						className,
						{
							['border-error']: error,
						},
					)}
					{...props}
				/>
				<span className="self-start text-error">{error?.message}</span>
			</label>
		);
	},
);

FormField.displayName = 'FormField';
