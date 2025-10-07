import { Route, Routes } from 'react-router';
import './App.css';
import { Layout } from './components';
import { GenresPage, MainPage } from './pages';

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
				{/*<Route path='genres/:genreName' element={<GenrePage/>}/>
					<Route path='about-movie/:movieId' element={<AboutMovie/>}/>
					<Route path='profile' element={<ProfileLayout />}>
						<Route path='favorites' element={<Favorites/>}/>
						<Route path='settings' element={<Settings/>}/>
					</Route> */}
			</Route>
		</Routes>
	);
}

export default App;
