import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
	isSuccessModalOpen: boolean;
}

const initialState: InitialState = {
	isSuccessModalOpen: false,
};

const registerSuccessSlice = createSlice({
	name: 'success',
	initialState,
	reducers: {
		setSuccessModalOpen: (state, action: PayloadAction<boolean>) => {
			state.isSuccessModalOpen = action.payload;
		},
	},
});

export const { setSuccessModalOpen } = registerSuccessSlice.actions;
export const success = registerSuccessSlice.reducer;
