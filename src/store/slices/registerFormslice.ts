import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
	isRegisterFormOpen: boolean;
}

const initialState: InitialState = {
	isRegisterFormOpen: false,
};

const registerFormSlice = createSlice({
	name: 'register',
	initialState,
	reducers: {
		setRegisterFormOpen: (state, action: PayloadAction<boolean>) => {
			state.isRegisterFormOpen = action.payload;
		},
	},
});

export const { setRegisterFormOpen } = registerFormSlice.actions;
export const register = registerFormSlice.reducer;
