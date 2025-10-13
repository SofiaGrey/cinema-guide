import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getSearchMovie } from '../../api/movie';
import { useDebounce } from '../../hooks';
import { Icon } from '../Icon/Icon';
import { SearchMovies } from '../SearchMovies/SearchMovies';

export const Search = () => {
	const [value, setValue] = useState('');

	const debounceValue = useDebounce(value, 1000);

	const { data, isSuccess } = useQuery({
		queryKey: ['movies', 'search', debounceValue.trim()],
		queryFn: () => getSearchMovie({ title: debounceValue.trim() }),
		enabled: debounceValue.trim().length > 2,
	});

	return (
		<div className="relative w-full">
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
			<button
				className="absolute top-3 right-4 cursor-pointer"
				onClick={() => setValue('')}>
				<Icon
					name="crossSmall"
					className="fill-dark"
				/>
			</button>
			{value.length > 2 && isSuccess && debounceValue.length > 2 && (
				<SearchMovies
					data={data}
					setValue={setValue}
				/>
			)}
		</div>
	);
};
