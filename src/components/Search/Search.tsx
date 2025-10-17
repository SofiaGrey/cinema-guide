import { useQuery } from '@tanstack/react-query';
import { forwardRef, useState, type HTMLProps } from 'react';
import { getSearchMovie } from '../../api/movie';
import { useDebounce } from '../../hooks';
import { cn } from '../../utils';
import { Icon } from '../Icon/Icon';
import { SearchMovies } from '../SearchMovies/SearchMovies';

interface Props extends HTMLProps<HTMLDivElement> {
	className?: string;
	setOpen?: () => void;
}

export const Search = forwardRef<HTMLDivElement, Props>(
	({ className, setOpen }, ref) => {
		const [value, setValue] = useState('');

		const debounceValue = useDebounce(value, 1000);

		const canSearch = debounceValue.trim().length > 2;

		const { data, isSuccess } = useQuery({
			queryKey: ['movies', 'search', debounceValue.trim()],
			queryFn: () => getSearchMovie({ title: debounceValue.trim() }),
			enabled: canSearch,
		});

		return (
			<div
				className={cn('relative flex w-full', className)}
				ref={ref}>
				<Icon
					name="search"
					className="absolute top-3 left-4 fill-dark"
				/>
				<input
					type="text"
					name="search"
					placeholder="Поиск"
					autoComplete="false"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					className="px-3 pl-13 pr-4 w-full min-h-12 text-lg/6 text-light bg-bg-default rounded-lg outline-none placeholder:text-dark"
				/>
				{value && (
					<button
						className="absolute top-3 right-4 cursor-pointer"
						onClick={() => setValue('')}>
						<Icon
							name="crossSmall"
							className="fill-dark"
						/>
					</button>
				)}
				{canSearch && isSuccess && (
					<SearchMovies
						data={data}
						setValue={setValue}
						setOpen={setOpen}
					/>
				)}
			</div>
		);
	},
);
