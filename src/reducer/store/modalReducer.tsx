import { createSlice } from'@reduxjs/toolkit';

export interface StateModal {
	isOpen: boolean;
	status: 'success' | 'error' | 'idle';
}

const initialState: StateModal = {
	isOpen: false,
	status: 'idle',
};

const stateModalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openSuccessModal: (state) => {
			state.isOpen = false;
			state.status = 'success';
		},
		openErrorModal: (state) => {
			state.isOpen = false;
			state.status = 'error';
		},
		closeModal: (state) => {
			state.isOpen = false;
			state.status = 'idle';
		},
		toggleModal: (state) => {
			state.isOpen = !state.isOpen;
			if (!state.isOpen) {
				state.status = 'idle';
			}
		},
	},
});

export const { openSuccessModal, openErrorModal, closeModal, toggleModal } = stateModalSlice.actions;

export default stateModalSlice.reducer;
