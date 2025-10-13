import { useQuery } from '@tanstack/react-query';
import { Link, NavLink } from 'react-router';
import { getProfile } from '../../api/user';
import { useAppDispatch } from '../../hooks';
import { setLoginFormOpen } from '../../store/slices';
import { Container } from '../Container/Container';
import { Search } from '../Search/Search';
import './Header.css';

export const Header = () => {
	const dispatch = useAppDispatch();

	const {
		data: user,
		isSuccess,
		isPending,
	} = useQuery({
		queryKey: ['user', 'profile'],
		queryFn: () => getProfile(),
		retry: 0,
	});

	return (
		<header className="py-6">
			<Container className="flex items-center gap-x-20">
				<Link
					to="/"
					className="block w-[180px] flex-shrink-0">
					<img
						src="/logo.png"
						alt="Cinema-guide логотип"
					/>
				</Link>
				<nav className="flex gap-x-10 text-2xl/8 text-light">
					<NavLink
						to="/"
						className="relative">
						Главная
					</NavLink>
					<NavLink
						to="/genres"
						className="relative">
						Жанры
					</NavLink>
				</nav>
				<Search />
				{isSuccess && user && (
					<NavLink
						to={'/profile/favorites'}
						className="profile relative text-2xl/8"
						end={false}>
						{user.name}
					</NavLink>
				)}
				{!isPending && !isSuccess && (
					<button
						className="text-2xl/8 text-light cursor-pointer"
						onClick={() => dispatch(setLoginFormOpen(true))}>
						Войти
					</button>
				)}
			</Container>
		</header>
	);
};
