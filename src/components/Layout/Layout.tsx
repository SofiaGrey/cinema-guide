import { Outlet } from 'react-router';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { LoginForm } from '../LoginForm/LoginForm';
import { Main } from '../Main/Main';
import { RegisterForm } from '../RegisterForm/RegisterForm';
import { RegistrationSuccessModal } from '../RegistrationSuccessModal/RegistrationSuccessModal';
import { VideoModal } from '../VideoModal/VideoModal';

export const Layout = () => {
	return (
		<>
			<Header />
			<Main>
				<Outlet />
				<RegisterForm />
				<LoginForm />
				<RegistrationSuccessModal />
				<VideoModal />
			</Main>
			<Footer />
		</>
	);
};
