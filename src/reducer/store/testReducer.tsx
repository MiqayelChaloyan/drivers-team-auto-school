import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DRIVING_THEORY_EXAM as group1 } from '@/src/driving_theory/group_1';
import { DRIVING_THEORY_EXAM as group2 } from '@/src/driving_theory/group_2';
import { DRIVING_THEORY_EXAM as group3 } from '@/src/driving_theory/group_3';
import { DRIVING_THEORY_EXAM as group4 } from '@/src/driving_theory/group_4';
import { DRIVING_THEORY_EXAM as group5 } from '@/src/driving_theory/group_5';
import { DRIVING_THEORY_EXAM as group6 } from '@/src/driving_theory/group_6';
import { DRIVING_THEORY_EXAM as group7 } from '@/src/driving_theory/group_7';
import { DRIVING_THEORY_EXAM as group8 } from '@/src/driving_theory/group_8';
import { DRIVING_THEORY_EXAM as group9 } from '@/src/driving_theory/group_9';
import { DRIVING_THEORY_EXAM as group10 } from '@/src/driving_theory/group_10';

import { Answer, Question, Step, TestEnd, TestState } from '@/src/types';


const tests: Question[][] = [
    group1,
    group2,
    group3,
    group4,
    group5,
    group6,
    group7,
    group8,
    group9,
    group10,
];

const initialState: TestState = {
    tests: [],
    selectedTest: [],
    trace: 0,
    score: 0,
    answers: [],
    isLoading: true,
    isTestEnded: false,
    isOpenModal: false,
};

const loadFromLocalStorage = () => {
    try {
        const savedState = localStorage.getItem('testState');
        return savedState ? JSON.parse(savedState) : [];
    } catch (_) {
        return [];
    }
};

const saveToLocalStorage = (state: Step) => {
    localStorage.setItem('testState', JSON.stringify(state));
};

const testReducer = createSlice({
    name: 'tests',
    initialState,
    reducers: {
        startExamAction: (state) => {
            state.isLoading = false;
            state.tests = tests;
        },
        startTest: (state, action: PayloadAction<number>) => {
            const data = loadFromLocalStorage();
            const existingTest = data.filter((item: Step) => item.test === action.payload);

            if (existingTest.length) {
                state.isOpenModal = true;
            }

            const selected = state.tests[action.payload];
            state.selectedTest = selected;
        },
        handleAddScore: (state) => {
            state.score += 1;
        },
        handleNext: (state) => {
            state.trace += 1;
        },
        handlePrevious: (state) => {
            state.trace -= 1;
        },
        handleSaveAnswer: (state, action: PayloadAction<{ question: string; step: number; selectedAnswer: string }>) => {
            const { question, step, selectedAnswer } = action.payload;
            const existingAnswer = state.answers.find((answer: Answer) => answer.question === question);

            if (existingAnswer) {
                existingAnswer.selectedAnswer = selectedAnswer;
            } else {
                state.answers.push({ question, step, selectedAnswer });
            }

        },
        handleTestEnded: (state, action: PayloadAction<TestEnd>) => {
            const data = loadFromLocalStorage();
            const updatedData = data.filter((item: Step) => item.test !== action.payload.test);

            if (updatedData.length !== data.length) {
                saveToLocalStorage(updatedData);
            }

            state.isTestEnded = action.payload.isClose;
        },
        handleSaveTest: (_, action: PayloadAction<Step>) => {
            const data = loadFromLocalStorage();
            const existingTestIndex = data.findIndex((item: Step) => item.test === action.payload.test);

            if (existingTestIndex !== -1) {
                data[existingTestIndex].steps.push({
                    step: action.payload.step,
                    selectedAnswer: action.payload.selectedAnswer,
                });
            } else {
                data.push({
                    test: action.payload.test,
                    steps: [{
                        step: action.payload.step,
                        selectedAnswer: action.payload.selectedAnswer,
                    }],
                });
            }

            saveToLocalStorage(data);
        },
        handleStartOver: (state, action: PayloadAction<number>) => {
            const data = loadFromLocalStorage();
            const updatedData = data.filter((item: Step) => item.test !== action.payload);

            if (updatedData.length !== data.length) {
                saveToLocalStorage(updatedData);
            }

            state.isOpenModal = false;
        },
        handleContinue: (state, action: PayloadAction<number>) => {
            const data = loadFromLocalStorage();
            const existingTest = data.filter((item: Step) => item.test === action.payload);

            if (existingTest.length) {
                const result = existingTest[0].steps;

                if (state.selectedTest.length >= result[result.length - 1].step) {
                    state.trace = result[result.length - 1].step;
                } else {
                    state.trace = result[result.length - 1].step + 1;
                }

                result.map(({ step, selectedAnswer }: Answer) => {
                    const question = state.selectedTest[step].question
                    state.answers.push({ question, step, selectedAnswer });
                });

                state.isOpenModal = false;
            }
        },
        resetAllAction: () => initialState,
    },
});

export const {
    startExamAction,
    startTest,
    handleNext,
    handlePrevious,
    handleAddScore,
    handleSaveAnswer,
    handleTestEnded,
    handleSaveTest,
    handleStartOver,
    handleContinue,
    resetAllAction,
} = testReducer.actions;

export default testReducer.reducer;





























