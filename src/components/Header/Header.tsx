import { Link, NavLink } from 'react-router';
import { useAppDispatch } from '../../hooks';
import { setLoginFormOpen } from '../../store/slices';
import { Container } from '../Container/Container';
import { Icon } from '../Icon/Icon';
import './Header.css';

export const Header = () => {
	const dispatch = useAppDispatch();

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
				<div className="relative w-full">
					<Icon
						name="search"
						className="absolute top-3 left-4 fill-dark"
					/>
					<input
						type="text"
						name="search"
						placeholder="Поиск"
						className="px-3 pl-13 pr-4 w-full min-h-12 text-lg/6 text-light bg-bg-default rounded-lg outline-none placeholder:text-dark"
					/>
					<button className="absolute top-3 right-4 cursor-pointer">
						<Icon
							name="crossSmall"
							className="fill-dark"
						/>
					</button>
				</div>
				<button
					className="text-2xl/8 text-light cursor-pointer"
					onClick={() => dispatch(setLoginFormOpen(true))}>
					Войти
				</button>
			</Container>
		</header>
	);
};
