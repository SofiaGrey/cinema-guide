import type { IconType } from '../../types';
import { Container } from '../Container/Container';
import { Icon } from '../Icon/Icon';

const icons: IconType[] = ['vk', 'yt', 'ok', 'tg'];

export const Footer = () => {
	return (
		<footer className="mt-auto py-10.5">
			<Container>
				<ul className="flex items-center justify-start lg:justify-end gap-6">
					{icons.map((icon) => (
						<li
							className="cursor-pointer"
							key={icon}>
							<a
								href="#"
								target="_blank"
								rel="noopener">
								<Icon name={`${icon}`} />
							</a>
						</li>
					))}
				</ul>
			</Container>
		</footer>
	);
};
