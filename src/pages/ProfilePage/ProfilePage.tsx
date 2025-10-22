import { NavLink, Outlet } from 'react-router';
import { Container, Icon } from '../../components';

export const ProfilePage = () => {
	return (
		<section>
			<Container className="pt-4 mb-16 lg:pt-16">
				<h1 className=" mb-10 lg:mb-16 text-2xl/8 lg:text-5xl/14 font-bold">
					Мой аккаунт
				</h1>
				<nav className="flex gap-4 lg:gap-16 mb-16">
					<NavLink
						className="relative flex gap-2 items-center text-2xl/8"
						to={'/profile/favorites'}>
						<Icon
							name="favorite"
							className="fill-white"
						/>
						<span className="hidden sm:inline">Избранные фильмы</span>
						<span className="inline sm:hidden">Избранное</span>
					</NavLink>
					<NavLink
						className="relative flex gap-2 items-center text-2xl/8"
						to={'/profile/settings'}>
						<Icon
							name="user"
							className="fill-white"
						/>
						<span className="hidden sm:inline">Настройки аккаунта</span>
						<span className="inline sm:hidden">Настройки</span>
					</NavLink>
				</nav>
			</Container>
			<Outlet />
		</section>
	);
};
