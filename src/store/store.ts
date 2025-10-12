import { configureStore } from '@reduxjs/toolkit';
import { login, register, success, video } from './slices';

export const store = configureStore({
	reducer: {
		register,
		login,
		success,
		video,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
