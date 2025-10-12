import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getProfile, logout } from '../../api/user';
import { Button, Icon } from '../../components';

export const ProfileSettingsPage = () => {
	const { data } = useQuery({
		queryKey: ['user', 'profile'],
		queryFn: () => getProfile(),
		retry: 0,
	});

	const queryClient = useQueryClient();
	const { mutate } = useMutation(
		{
			mutationFn: logout,
			onSuccess() {
				queryClient.invalidateQueries({ queryKey: ['user', 'profile'] });
			},
		},
		queryClient,
	);

	const handleLogout = async () => {
		mutate()
		window.location.href = '/';
	}

	return (
		<>
			<ul className="flex flex-col items-start gap-10 mb-16">
				<li className="flex gap-4">
					<div className="p-3.5 bg-dark rounded-full text-2xl/8">
						{data?.name.charAt(0).toUpperCase()}
						{data?.surname.charAt(0).toUpperCase()}
					</div>
					<div>
						<span className="text-lg/6">Имя Фамилия</span>
						<h2 className="text-2xl/8 font-bold">
							{data?.name} {data?.surname}
						</h2>
					</div>
				</li>
				<li className="flex gap-4">
					<div className="flex items-center p-3.5 bg-dark rounded-full text-2xl/8">
						<Icon
							name="mail"
							className="fill-white"
							width={30}
							height={31}
						/>
					</div>
					<div>
						<span className="text-lg/6">Электронная почта</span>
						<h2 className="text-2xl/8 font-bold">{data?.email}</h2>
					</div>
				</li>
			</ul>
			<Button
				variant="default"
				className="bg-btn-primary"
				onClick={() => handleLogout()}>
				Выйти из аккаунта
			</Button>
		</>
	);
};
