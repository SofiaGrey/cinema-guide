import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import { Layout } from './components';
import {
	AboutMoviePage,
	GenrePage,
	GenresPage,
	MainPage,
	ProfileFavoritesPage,
	ProfilePage,
	ProfileSettingsPage,
} from './pages';

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Layout />}>
				<Route
					index
					element={<MainPage />}
				/>
				<Route
					path="genres"
					element={<GenresPage />}
				/>
				<Route
					path="genres/:genreName"
					element={<GenrePage />}
				/>
				<Route
					path="about-movie/:movieId"
					element={<AboutMoviePage />}
				/>
				<Route
					path="profile"
					element={<ProfilePage />}>
					<Route
						index
						element={
							<Navigate
								to="favorites"
								replace
							/>
						}
					/>
					<Route
						path="favorites"
						element={<ProfileFavoritesPage />}
					/>
					<Route
						path="settings"
						element={<ProfileSettingsPage />}
					/>
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
