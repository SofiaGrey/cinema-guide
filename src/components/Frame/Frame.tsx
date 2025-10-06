import type { FC } from 'react';
import { Link } from 'react-router';
import type { Movie } from '../../types';
import { cn } from '../../utils';
import { Icon } from '../Icon/Icon';

interface Props {
	data: Movie[];
	showIndex?: boolean;
	showBtn?: boolean;
}

const base =
	'relative border border-[#FFFFFF40] rounded-2xl shadow-[0_0_80px_0_#FFFFFF54] group';
const beforeProp =
	'before:content-[attr(data-index)] before:absolute before:-top-3 before:-left-3 before:py-2 before:px-6 before:text-2xl/8 before:font-bold before:text-[#6A5DC2] before:bg-white before:rounded-[3.125rem]';

export const Frame: FC<Props> = ({ data, showIndex, showBtn }) => {
	return data.map((movie, i) => (
		<li
			className={cn(base, showIndex && beforeProp)}
			data-index={i + 1}
			key={movie.id}>
			<Link
				to={'/about-movie/${movie.id}'}
				className={cn('block w-full h-full')}>
				{movie.posterUrl ? (
					<img
						className="w-full h-full object-cover rounded-2xl"
						src={movie.posterUrl}
						alt={movie.title}
					/>
				) : (
					<div className="flex items-center justify-center w-full h-full">
						<p className="text-center text-4xl font-bold">{movie.title}</p>
					</div>
				)}
			</Link>
			{showBtn && (
				<button className="absolute -top-5 -right-5 p-2 bg-white rounded-full opacity-0 cursor-pointer group-hover:opacity-100 transition duration-300 ease-in-out">
					<Icon
						name="crossSmall"
						className="fill-black"
					/>
				</button>
			)}
		</li>
	));
};
