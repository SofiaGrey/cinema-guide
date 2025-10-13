import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));

export const formatRuntime = (runtime: number): string => {
	const hours = Math.floor(runtime / 60);
	const minutes = runtime % 60;
	return `${hours}ч ${minutes}мин`;
};
