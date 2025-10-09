import { configureStore } from '@reduxjs/toolkit';
import { login, register, success } from './slices';

export const store = configureStore({
	reducer: {
		register,
		login,
		success,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
