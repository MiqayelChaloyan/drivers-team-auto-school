import { createSlice } from'@reduxjs/toolkit';

export interface StateModal {
	isOpen: boolean;
	status: 'success' | 'error' | 'idle';
	isStatus: boolean;
}

const initialState: StateModal = {
	isOpen: false,
	status: 'idle',
	isStatus: false
};

const stateModalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openSuccessModal: (state) => {
			state.isOpen = false;
			state.status = 'success';
			state.isStatus = true;
		},
		openErrorModal: (state) => {
			state.isOpen = false;
			state.status = 'error';
			state.isStatus = true;
		},
		closeModal: (state) => {
			state.isOpen = false;
			state.status = 'idle';
			state.isStatus = false;
		},
		openeModal: (state) => {
			state.isOpen = true;
			state.status = 'idle';
			state.isStatus = false;
		},
	},
});

export const { openSuccessModal, openErrorModal, closeModal, openeModal } = stateModalSlice.actions;

export default stateModalSlice.reducer;
