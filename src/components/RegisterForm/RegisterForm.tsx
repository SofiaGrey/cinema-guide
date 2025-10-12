import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { createUser } from '../../api/user';
import { REGISTER_INPUTS } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
	setLoginFormOpen,
	setRegisterFormOpen,
	setSuccessModalOpen,
} from '../../store/slices';
import type { Inputs } from '../../types';
import { Button } from '../Button/Button';
import { FormField } from '../FormField/FormField';
import { Modal } from '../Modal/Modal';

export const RegisterForm = () => {
	const { isRegisterFormOpen } = useAppSelector((state) => state.register);
	const dispatch = useAppDispatch();
	const queryClient = useQueryClient();

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<Inputs>({ mode: 'onChange' });

	const { mutate } = useMutation(
		{
			mutationKey: ['registration', 'create'],
			mutationFn: (data: Inputs) => createUser(data),
			onSuccess() {
				reset();
				dispatch(setRegisterFormOpen(false));
				dispatch(setSuccessModalOpen(true));
			},
		},
		queryClient,
	);

	const password = watch('password');

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		mutate(data);
		console.log('Форма отправлена:', data);
	};

	const handleClick = () => {
		dispatch(setRegisterFormOpen(false));
	};

	const handleOpen = () => {
		dispatch(setRegisterFormOpen(false));
		dispatch(setLoginFormOpen(true));
	};

	return (
		<Modal
			isOpen={isRegisterFormOpen}
			cb={handleClick}>
			<img
				src="./logo.png"
				alt="Cinema Guide logo"
			/>
			<form
				className="w-full flex flex-col gap-5"
				onSubmit={handleSubmit(onSubmit)}>
				<h2 className="text-2xl/8 font-bold text-black self-center">
					Регистрация
				</h2>
				{REGISTER_INPUTS.map((input, i) => (
					<FormField
						key={i}
						iconName={input.iconName}
						type={input.type}
						placeholder={input.placeholder}
						{...register(input.name, {
							required: input.required ? 'Это поле обязательно' : false,
							...input.validation,
							...(input.name === 'repeatPassword' && {
								validate: (value) =>
									value === password || 'Пароли не совпадают',
							}),
						})}
						error={errors[input.name]}
					/>
				))}
				<Button variant="full">Создать аккаунт</Button>
				<Button
					variant="text"
					type="button"
					onClick={handleOpen}>
					У меня есть пароль
				</Button>
			</form>
		</Modal>
	);
};
