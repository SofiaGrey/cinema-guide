import { type FC } from 'react';
import { Link } from 'react-router';

interface Props {
	genre: string;
}

export const GenreCard: FC<Props> = ({ genre }) => {
	return (
		<li className="rounded-3xl border border-[#FFFFFF40] overflow-hidden shadow-[0_0_80px_0_#FFFFFF54]">
			<Link
				to={`/genres/${genre}`}
				className="flex flex-col w-full h-full">
				<img
					className="object-cover h-full"
					src={`./genres/${genre}.jpg`}
					alt={genre}
				/>
				<div className="flex items-center justify-center bg-black">
					<p className="py-5.5 text-2xl/8 font-bold">{`${genre
						.charAt(0)
						.toUpperCase()}${genre.slice(1)}`}</p>
				</div>
			</Link>
		</li>
	);
};
