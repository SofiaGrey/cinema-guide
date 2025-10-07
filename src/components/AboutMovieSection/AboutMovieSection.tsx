import type { FC } from 'react';
import type { Movie } from '../../types';
import { Container } from '../Container/Container';

interface Props {
	data: Movie;
}

function getInfoItems(data: Movie) {
	return [
		{
			title: 'Язык оригинала',
			value: data.language,
		},
		{
			title: 'Бюджет',
			value: data.budget ? `${data.budget} руб.` : null,
		},
		{
			title: 'Выручка',
			value: data.revenue ? `${data.revenue} руб.` : null,
		},
		{
			title: 'Режиссёр',
			value: data.director,
		},
		{
			title: 'Продакшен',
			value: data.production,
		},
		{
			title: 'Награды',
			value: data.awardsSummary,
		},
	];
}

export const AboutMovieSection: FC<Props> = ({ data }) => {
	const infoItems = getInfoItems(data);

	return (
		<section>
			<Container className="pt-10 pb-40">
				<h2 className="mb-16 text-[40px]/12 font-bold">О фильме</h2>
				<ul className="w-full flex flex-col gap-y-3">
					{infoItems.map((item, i) =>
						item.value ? (
							<li
								className="flex flex-row items-center gap-y-1 gap-x-2 max-w-[500px] w-full"
								key={i}>
								<p className="flex items-center gap-x-2 text-nowrap w-full after:w-full after:h-0.5 after:border-b after:border-[rgba(255,255,255,.5)] after:border-dotted text-white">
									{item.title}
								</p>
								<p className="text-nowrap">{item.value}</p>
							</li>
						) : (
							''
						),
					)}
				</ul>
			</Container>
		</section>
	);
};
