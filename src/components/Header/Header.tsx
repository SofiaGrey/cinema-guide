import { useQuery } from '@tanstack/react-query';
import { useRef, useState, type MouseEvent } from 'react';
import { Link, NavLink } from 'react-router';
import { getProfile } from '../../api/user';
import { useAppDispatch } from '../../hooks';
import { setLoginFormOpen } from '../../store/slices';
import { cn } from '../../utils';
import { Container } from '../Container/Container';
import { Icon } from '../Icon/Icon';
import { Search } from '../Search/Search';
import './Header.css';

export const Header = () => {
	const dispatch = useAppDispatch();
	const searchRef = useRef<HTMLDivElement>(null);
	const [isSearchOpen, setSearchOpen] = useState(false);

	const handleClick = (e: MouseEvent<HTMLDivElement>) => {
		if (
			searchRef &&
			e.target instanceof Node &&
			!searchRef.current?.contains(e.target)
		) {
			setSearchOpen(false);
		}
	};

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
			<Container className="flex items-center justify-between gap-x-20">
				<Link
					to="/"
					className="block w-30 flex-shrink-0 md:w-[180px]">
					<img
						src="/logo.png"
						alt="Cinema-guide логотип"
					/>
				</Link>

				<div className="w-full gap-x-10 xl:gap-x-10 hidden lg:flex">
					<nav className="flex gap-x-10 text-2xl/8 text-light ">
						<ul className="flex gap-x-10 items-center justify-center">
							<li>
								<NavLink
									to="/"
									className="relative">
									Главная
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/genres"
									className="relative">
									Жанры
								</NavLink>
							</li>
						</ul>
					</nav>
					<Search ref={searchRef} />
				</div>
				{isSuccess && user && (
					<NavLink
						to={'/profile/favorites'}
						className="profile relative text-2xl/8 hidden lg:flex"
						end={false}>
						{user.name}
					</NavLink>
				)}
				{!isPending && !isSuccess && (
					<button
						className="text-2xl/8 text-light cursor-pointer hidden lg:flex"
						onClick={() => dispatch(setLoginFormOpen(true))}>
						Войти
					</button>
				)}
				<Container
					onClick={handleClick}
					className={cn(
						'fixed hidden w-full inset-0 py-4 bg-[rgba(0,0,0,.5)] z-10',
						{
							['block']: isSearchOpen,
						},
					)}>
					<Search
						ref={searchRef}
						setOpen={() => setSearchOpen(false)}
					/>
				</Container>

				<nav className="flex items-center lg:hidden">
					<ul className="flex items-center gap-5">
						<li>
							<NavLink
								to="/genres"
								className="relative">
								<Icon
									name="genres"
									className="fill-white"
								/>
							</NavLink>
						</li>
						<li>
							<button
								className="p-0 flex items-center"
								onClick={() => setSearchOpen(true)}>
								<Icon
									name="search"
									className="fill-white"
								/>
							</button>
						</li>
						<li>
							{!isPending && !isSuccess && (
								<button
									className="flex items-center p-0 cursor-pointer"
									onClick={() => dispatch(setLoginFormOpen(true))}>
									<Icon
										name="user"
										className="fill-white"
									/>
								</button>
							)}
							{isSuccess && (
								<Link
									to="/profile/favorites"
									className="profile relative">
									<Icon
										name="user"
										className="fill-white"
									/>
								</Link>
							)}
						</li>
					</ul>
				</nav>
			</Container>
		</header>
	);
};
