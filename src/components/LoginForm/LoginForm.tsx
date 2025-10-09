import { LOGIN_INPUTS } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setLoginFormOpen, setRegisterFormOpen } from '../../store/slices';
import { Button } from '../Button/Button';
import { FormField } from '../FormField/FormField';
import { Modal } from '../Modal/Modal';

export const LoginForm = () => {
	const { isLoginFormOpen } = useAppSelector((state) => state.login);
	const dispatch = useAppDispatch();

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
			<form className="w-full flex flex-col gap-5">
				{LOGIN_INPUTS.map((input, i) => (
					<FormField
						key={i}
						iconName={input.iconName}
						type={input.type}
						name={input.name}
						placeholder={input.placeholder}
						required={input.required}
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
