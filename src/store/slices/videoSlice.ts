import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


interface InitialState {
	isVideoOpen: boolean,
	video: string,
}

const initialState: InitialState = {
	isVideoOpen: false,
	video: '',
}

const videoSlice = createSlice({
	name: 'video',
	initialState,
	reducers: {
		setVideoOpen: (state, action:PayloadAction<boolean>) => {
			state.isVideoOpen = action.payload;
		},
		setVideo: (state, action:PayloadAction<string>) => {
			state.video = action.payload;
		}
	}
})

export const {setVideoOpen, setVideo} = videoSlice.actions;
export const video = videoSlice.reducer;
