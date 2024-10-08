import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DRIVING_THEORY_EXAM as test1 } from '@/src/tests/test_1';
import { DRIVING_THEORY_EXAM as test2 } from '@/src/tests/test_2';
import { DRIVING_THEORY_EXAM as test3 } from '@/src/tests/test_3';
import { DRIVING_THEORY_EXAM as test4 } from '@/src/tests/test_4';
import { DRIVING_THEORY_EXAM as test5 } from '@/src/tests/test_5';
import { DRIVING_THEORY_EXAM as test6 } from '@/src/tests/test_6';
import { DRIVING_THEORY_EXAM as test7 } from '@/src/tests/test_7';
import { DRIVING_THEORY_EXAM as test8 } from '@/src/tests/test_8';
import { DRIVING_THEORY_EXAM as test9 } from '@/src/tests/test_9';
import { DRIVING_THEORY_EXAM as test10 } from '@/src/tests/test_10';
import { DRIVING_THEORY_EXAM as test11 } from '@/src/tests/test_11';
import { DRIVING_THEORY_EXAM as test12 } from '@/src/tests/test_12';
import { DRIVING_THEORY_EXAM as test13 } from '@/src/tests/test_13';
import { DRIVING_THEORY_EXAM as test14 } from '@/src/tests/test_14';
import { DRIVING_THEORY_EXAM as test15 } from '@/src/tests/test_15';
import { DRIVING_THEORY_EXAM as test16 } from '@/src/tests/test_16';
import { DRIVING_THEORY_EXAM as test17 } from '@/src/tests/test_17';
import { DRIVING_THEORY_EXAM as test18 } from '@/src/tests/test_18';
import { DRIVING_THEORY_EXAM as test19 } from '@/src/tests/test_19';
import { DRIVING_THEORY_EXAM as test20 } from '@/src/tests/test_20';
import { DRIVING_THEORY_EXAM as test21 } from '@/src/tests/test_21';
import { DRIVING_THEORY_EXAM as test22 } from '@/src/tests/test_22';
import { DRIVING_THEORY_EXAM as test23 } from '@/src/tests/test_23';
import { DRIVING_THEORY_EXAM as test24 } from '@/src/tests/test_24';
import { DRIVING_THEORY_EXAM as test25 } from '@/src/tests/test_25';
import { DRIVING_THEORY_EXAM as test26 } from '@/src/tests/test_26';
import { DRIVING_THEORY_EXAM as test27 } from '@/src/tests/test_27';
import { DRIVING_THEORY_EXAM as test28 } from '@/src/tests/test_28';
import { DRIVING_THEORY_EXAM as test29 } from '@/src/tests/test_29';
import { DRIVING_THEORY_EXAM as test30 } from '@/src/tests/test_30';
import { DRIVING_THEORY_EXAM as test31 } from '@/src/tests/test_31';
import { DRIVING_THEORY_EXAM as test32 } from '@/src/tests/test_32';
import { DRIVING_THEORY_EXAM as test33 } from '@/src/tests/test_33';
import { DRIVING_THEORY_EXAM as test34 } from '@/src/tests/test_34';
import { DRIVING_THEORY_EXAM as test35 } from '@/src/tests/test_35';
import { DRIVING_THEORY_EXAM as test36 } from '@/src/tests/test_36';
import { DRIVING_THEORY_EXAM as test37 } from '@/src/tests/test_37';
import { DRIVING_THEORY_EXAM as test38 } from '@/src/tests/test_38';
import { DRIVING_THEORY_EXAM as test39 } from '@/src/tests/test_39';
import { DRIVING_THEORY_EXAM as test40 } from '@/src/tests/test_40';
import { DRIVING_THEORY_EXAM as test41 } from '@/src/tests/test_41';
import { DRIVING_THEORY_EXAM as test42 } from '@/src/tests/test_42';
import { DRIVING_THEORY_EXAM as test43 } from '@/src/tests/test_43';
import { DRIVING_THEORY_EXAM as test44 } from '@/src/tests/test_44';
import { DRIVING_THEORY_EXAM as test45 } from '@/src/tests/test_45';
import { DRIVING_THEORY_EXAM as test46 } from '@/src/tests/test_46';
import { DRIVING_THEORY_EXAM as test47 } from '@/src/tests/test_47';
import { DRIVING_THEORY_EXAM as test48 } from '@/src/tests/test_48';
import { DRIVING_THEORY_EXAM as test49 } from '@/src/tests/test_49';
import { DRIVING_THEORY_EXAM as test50 } from '@/src/tests/test_50';
import { DRIVING_THEORY_EXAM as test51 } from '@/src/tests/test_51';
import { DRIVING_THEORY_EXAM as test52 } from '@/src/tests/test_52';
import { DRIVING_THEORY_EXAM as test53 } from '@/src/tests/test_53';
import { DRIVING_THEORY_EXAM as test54 } from '@/src/tests/test_54';
import { DRIVING_THEORY_EXAM as test55 } from '@/src/tests/test_55';
import { DRIVING_THEORY_EXAM as test56 } from '@/src/tests/test_56';
import { DRIVING_THEORY_EXAM as test57 } from '@/src/tests/test_57';
import { DRIVING_THEORY_EXAM as test58 } from '@/src/tests/test_58';
import { DRIVING_THEORY_EXAM as test59 } from '@/src/tests/test_59';
import { DRIVING_THEORY_EXAM as test60 } from '@/src/tests/test_60';

import { Answer, Question, Step, TestEnd, TestState } from '@/src/types';


const tests: Question[][] = [
    test1,
    test2,
    test3,
    test4,
    test5,
    test6,
    test7,
    test8,
    test9,
    test10,
    test11,
    test12,
    test13,
    test14,
    test15,
    test16,
    test17,
    test18,
    test19,
    test20,
    test21,
    test22,
    test23,
    test24,
    test25,
    test26,
    test27,
    test28,
    test29,
    test30,
    test31,
    test32,
    test33,
    test34,
    test35,
    test36,
    test37,
    test38,
    test39,
    test40,
    test41,
    test42,
    test43,
    test44,
    test45,
    test46,
    test47,
    test48,
    test49,
    test50,
    test51,
    test52,
    test53,
    test54,
    test55,
    test56,
    test57,
    test58,
    test59,
    test60
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

export const loadFromLocalStorage = () => {
    try {
        const savedState = localStorage.getItem('testState');
        return savedState ? JSON.parse(savedState) : [];
    } catch (_) {
        return [];
    }
};

export const saveToLocalStorage = (state: Step) => {
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
        handleSaveAnswer: (_, action: PayloadAction<Step>) => {
            const data = loadFromLocalStorage();
            const existingTestIndex = data.findIndex((item: Step) => item.test === action.payload.test);

            const { step, selectedAnswer, test } = action.payload;

            if (existingTestIndex !== -1) {
                data[existingTestIndex].steps.push({
                    step,
                    selectedAnswer,
                });
            } else {
                data.push({
                    test: test,
                    steps: [{
                        step,
                        selectedAnswer,
                    }],
                });
            }

            saveToLocalStorage(data);
        },
        handleTestEnded: (state, action: PayloadAction<TestEnd>) => {
            const data = loadFromLocalStorage();
            const updatedData = data.filter((item: Step) => item.test !== action.payload.test);

            if (updatedData.length !== data.length) {
                saveToLocalStorage(updatedData);
            }

            state.isTestEnded = action.payload.isClose;
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

                if (19 === result[result.length - 1].step) {
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
    handleStartOver,
    handleContinue,
    resetAllAction,
} = testReducer.actions;

export default testReducer.reducer;
