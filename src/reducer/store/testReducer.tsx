import { createSlice } from '@reduxjs/toolkit';

export interface TEST {
    tests: any
    selectedTest: any
    trace: number
    score: number
    answers: any
    isLoading: boolean
    isViewAnswer: boolean

}

const initialState: TEST = {
    tests: [],
    selectedTest: [],
    trace: 0,
    score: 0,
    answers: [],
    isLoading: true,
    isViewAnswer: false,
};

export const testReducer = createSlice({
    name: 'tests',
    initialState,
    reducers: {
        startExamAction: (state, action) => {
            let tests = action.payload

            return {
                ...state,
                tests: tests,
            }
        },
        startTest: (state, action) => {
            let selected = state.tests[action.payload]

            return {
                ...state,
                selectedTest: selected,
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
            return initialState;
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
        viewAnswerRemove: (state) => {
            return {
                ...state,
                isViewAnswer: false
            }
        },
        addedAnswer: (state, action) => {
            state.answers.push(action.payload)
        },
        updateAnswer: (state, action) => {
            const { question, correctAnswer, selectedAnswer } = action.payload;
            const existingAnswerIndex = state.answers.findIndex(
                (answer: any) => answer.question === question
            );

            if (existingAnswerIndex !== -1) {
                state.answers[existingAnswerIndex] = {
                    ...state.answers[existingAnswerIndex],
                    selectedAnswer: selectedAnswer,
                    correctAnswer: correctAnswer,
                    wrongAnswer: selectedAnswer !== correctAnswer ? selectedAnswer : null,
                };
            }
        },
        // addedDuration: (state, action) => {
        //     return {
        //         ...state,
        //         duration: action.payload
        //     }
        // },
    }
})

export const {
    startExamAction,
    startTest,
    moveNextAction,
    movePrevAction,
    addScore,
    resetAllAction,
    updateLoader,
    viewAnswerRemove,
    viewAnswer,
    addedAnswer,
    updateAnswer
} = testReducer.actions;

export default testReducer.reducer;