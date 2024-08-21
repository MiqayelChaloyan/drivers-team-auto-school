import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Import your question data
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

import { Answer, Question, TestState } from '@/src/types';

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
            const selected = state.tests[action.payload] || [];
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
        handleSaveAnswer: (state, action: PayloadAction<{ question: string; selectedAnswer: string }>) => {
            const { question, selectedAnswer } = action.payload;
            const existingAnswer = state.answers.find((answer: Answer) => answer.question === question);

            if (existingAnswer) {
                existingAnswer.selectedAnswer = selectedAnswer;
            } else {
                state.answers.push({ question, selectedAnswer });
            }
        },
        handleTestEnded: (state, action: PayloadAction<boolean>) => {
            state.isTestEnded = action.payload;
        },
        loadProgress: (state, action: PayloadAction<Partial<TestState>>) => {
            return {
                ...state,
                ...action.payload,
                isLoading: false,
            };
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
    loadProgress,
    resetAllAction,
} = testReducer.actions;

export default testReducer.reducer;
