import { NavLink, Outlet } from 'react-router';
import { Container, Icon } from '../../components';

export const ProfilePage = () => {
	return (
		<section>
			<Container className='mb-16 pt-16'>
				<h1 className="mb-16 text-5xl/14 font-bold">Мой аккаунт</h1>
				<nav className='flex gap-16 mb-16'>
					<NavLink
						className="relative flex gap-2 items-center text-2xl/8"
						to={'/profile/favorites'}>
						<Icon
							name="favorite"
							className="fill-white"
						/>
						Избранные фильмы
					</NavLink>
					<NavLink
						className="relative flex gap-2 items-center text-2xl/8"
						to={'/profile/settings'}>
						<Icon
							name="user"
							className="fill-white"
						/>
						Настройка аккаунта
					</NavLink>
				</nav>
				<Outlet/>
			</Container>
		</section>
	);
};
