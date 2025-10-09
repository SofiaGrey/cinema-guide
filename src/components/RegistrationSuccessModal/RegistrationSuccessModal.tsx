import { useAppDispatch, useAppSelector } from '../../hooks';
import { setLoginFormOpen, setSuccessModalOpen } from '../../store/slices';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';

export const RegistrationSuccessModal = () => {
	const { isSuccessModalOpen } = useAppSelector((state) => state.success);
	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(setSuccessModalOpen(false));
	};

	const handleOpen = () => {
		dispatch(setSuccessModalOpen(false));
		dispatch(setLoginFormOpen(true));
	};

	return (
		<Modal
			isOpen={isSuccessModalOpen}
			cb={handleClick}>
			<h2 className="text-2xl/8 font-bold text-black ">
				Регистрация завершена
			</h2>
			<p className="text-center text-lg/6 text-black">
				Используйте вашу электронную почту для входа
			</p>
			<Button
				variant="full"
				onClick={() => handleOpen()}>
				Войти
			</Button>
		</Modal>
	);
};
