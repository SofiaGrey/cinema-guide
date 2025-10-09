import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
	isLoginFormOpen: boolean;
}

const initialState: InitialState = {
	isLoginFormOpen: false,
};

const loginFormSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setLoginFormOpen: (state, action: PayloadAction<boolean>) => {
			state.isLoginFormOpen = action.payload;
		},
	},
});

export const { setLoginFormOpen } = loginFormSlice.actions;
export const login = loginFormSlice.reducer;
