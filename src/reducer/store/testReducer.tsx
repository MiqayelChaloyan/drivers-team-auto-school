import { createSlice } from '@reduxjs/toolkit';

export interface TEST {
    test: any
    trace: number
    score: number
    answer: any
    isLoading: boolean
    isViewAnswer: boolean

}

const initialState: TEST = {
    test: [],
    trace: 0,
    score: 0,
    answer: [],
    isLoading: true,
    isViewAnswer: false,
};

export const testReducer = createSlice({
    name: 'test',
    initialState,
    reducers: {
        startExamAction: (state, action) => {
            let test = action.payload

            return {
                ...state,
                test: test,
            }
        },
        addScore: (state) => {
            return {
                ...state,
                score: state.score + 1,
            }
        },
        moveNextAction: (state) => {
            return {
                ...state,
                trace: state.trace + 1
            }
        },
        movePrevAction: (state) => {
            return {
                ...state,
                trace: state.trace - 1
            }
        },
        resetAllAction: () => {
            return {
                test: [],
                trace: 0,
                score: 0,
                answer: [],
                isLoading: true,
                isViewAnswer: false,
            }
        },
        updateLoader: (state, action) => {
            return {
                ...state,
                isLoading: action.payload
            }
        },
        viewAnswer: (state) => {
            return {
                ...state,
                isViewAnswer: !state.isViewAnswer
            }
        },
        addedAnswer: (state, action) => {
            state.answer.push(action.payload)
        },
        addedDuration: (state, action) => {
            return {
                ...state,
                duration: action.payload
            }
        },
    }
})

export const {
    startExamAction,
    moveNextAction,
    movePrevAction,
    addScore,
    resetAllAction,
    updateLoader,
    viewAnswer,
    addedAnswer
} = testReducer.actions;

export default testReducer.reducer;