import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { login } from '../../api/user';
import { LOGIN_INPUTS } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setLoginFormOpen, setRegisterFormOpen } from '../../store/slices';
import type { Inputs } from '../../types';
import { Button } from '../Button/Button';
import { FormField } from '../FormField/FormField';
import { Modal } from '../Modal/Modal';

export const LoginForm = () => {
	const { isLoginFormOpen } = useAppSelector((state) => state.login);
	const dispatch = useAppDispatch();
	const queryClient = useQueryClient();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Inputs>({ mode: 'onChange' });

	const { mutate } = useMutation(
		{
			mutationKey: ['login', 'auth'],
			mutationFn: (data: Inputs) =>
				login({ email: data.email, password: data.password }),
			onSuccess() {
				reset();
				dispatch(setLoginFormOpen(false));
				queryClient.invalidateQueries({ queryKey: ['user', 'profile'] });
			},
		},
		queryClient,
	);

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		mutate(data);
		console.log('Пользователь вошел', data);
	};

	const handleClick = () => {
		dispatch(setLoginFormOpen(false));
	};

	const handleOpen = () => {
		dispatch(setLoginFormOpen(false));
		dispatch(setRegisterFormOpen(true));
	};

	return (
		<Modal
			cb={handleClick}
			isOpen={isLoginFormOpen}>
			<img
				src="./logo.png"
				alt="Cinema Guide logo"
			/>
			<form
				className="w-full flex flex-col gap-5"
				onSubmit={handleSubmit(onSubmit)}>
				{LOGIN_INPUTS.map((input, i) => (
					<FormField
						key={i}
						iconName={input.iconName}
						type={input.type}
						// name={input.name}
						placeholder={input.placeholder}
						// required={input.required}
						{...register(input.name, {
							required: input.required ? 'Это поле обязательно' : false,
							...input.validation,
						})}
						error={errors[input.name]}
					/>
				))}
				<Button variant="full">Войти</Button>
				<Button
					variant="text"
					type="button"
					onClick={handleOpen}>
					Регистрация
				</Button>
			</form>
		</Modal>
	);
};
