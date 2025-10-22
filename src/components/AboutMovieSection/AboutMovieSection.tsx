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
				<h2 className="mb-10 md:mb-16 text-2xl/8 md:text-[40px]/12 font-bold">О фильме</h2>
				<ul className="w-full flex flex-col gap-y-3 sm:gap-y-6">
					{infoItems.map((item, i) =>
						item.value ? (
							<li
								className="flex flex-col sm:flex-row sm:items-center gap-y-1 :gap-y-0 gap-x-2 max-w-[500px] w-full"
								key={i}>
								<p className="flex items-center gap-x-2 text-nowrap w-full sm:after:w-full sm:after:h-0.5 sm:after:border-b sm:after:border-[rgba(255,255,255,.5)] sm:after:border-dotted text-[rgba(255,255,255,.5)] sm:text-white">
									{item.title}
								</p>
								<p className="sm:text-nowrap">{item.value}</p>
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
