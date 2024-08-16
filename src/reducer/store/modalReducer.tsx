import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface StateModal {
	isOpen: boolean;
}

const initialState: StateModal = {
	isOpen: false,
};

const stateModalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openModal: (state) => {
			state.isOpen = true;
		},
		closeModal: (state) => {
			state.isOpen = false;
		},
		toggleModal: (state) => {
			state.isOpen = !state.isOpen;
		},
	},
});

export const { openModal, closeModal, toggleModal } = stateModalSlice.actions;

export default stateModalSlice.reducer;
