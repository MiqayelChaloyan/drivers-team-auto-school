'use client'

import React, { useState, useEffect } from 'react';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

import { useDispatch, useSelector } from 'react-redux';
import * as Action from '@/src/reducer/store/testReducer';

import TimerCountdown from '@/src/components/components/TimerCountdown';

import { WiTime2 } from 'react-icons/wi';

import { Buttons, Texts } from '@/src/constants';
import { Answer, RootState } from '@/src/types';

import './styles.css';


const Quiz = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState<boolean>(false);

    const dispatch = useDispatch();
    const params = useSearchParams();
    const testId = params.get('test');

    const {
        selectedTest, trace, answers
    } = useSelector((state: RootState) => state.questions);

    const currentQuestionData = selectedTest?.[trace];

    useEffect(() => {
        if (testId && !selectedTest.length) {
            dispatch(Action.startExamAction());
            dispatch(Action.startTest(Number(testId) - 1));
        }
    }, [testId, !selectedTest.length]);

    const handleAnswerOption = (answer: string) => {
        if (isAnswered) return;

        setSelectedOption(answer);
        setIsAnswered(true);

        if (answer === currentQuestionData?.correct_answer) {
            dispatch(Action.handleAddScore());
        }

        dispatch(Action.handleSaveAnswer({
            question: currentQuestionData?.question,
            step: trace,
            selectedAnswer: answer,
        }));

        dispatch(Action.handleSaveTest({
            test: Number(testId) - 1,
            step: trace,
            selectedAnswer: answer,
        }));
    };

    const handleNext = () => {
        if (trace < selectedTest.length - 1) {
            setSelectedOption(null);
            setIsAnswered(false);
            dispatch(Action.handleNext());

        } else {
            dispatch(Action.handleTestEnded({
                isClose: true,
                test: Number(testId) - 1,
            }));
        }
    };

    const handlePrevious = () => {
        if (trace > 0) {
            dispatch(Action.handlePrevious());
        }
    };

    useEffect(() => {
        const existingAnswer = answers.find(
            (answer: Answer) => answer.question === currentQuestionData?.question
        );

        if (existingAnswer) {
            setSelectedOption(existingAnswer.selectedAnswer);
            setIsAnswered(true);
        } else {
            setSelectedOption(null);
            setIsAnswered(false);
        }
    }, [trace, answers, currentQuestionData]);

    const imagePath = currentQuestionData?.image
        ? require(`@/src/tests/test_${testId}/${currentQuestionData?.image}`)
        : null;


    return (
        <div className="test">
            <div className="quiz">
                <div className="question-wrapper">
                    <div className="flex justify-between items-center">
                        <div className="number text-[#a2aace] text-[25px] font-medium">
                            {Texts.question} <span className="current">{trace + 1}</span>
                            <span className="total text-[#576081] text-[18px]">/{selectedTest.length}</span>
                        </div>
                        <div className="flex justify-center items-center">
                            <WiTime2 size={20} color="#1f2847" />
                            <TimerCountdown />
                        </div>
                    </div>
                    <div className="text-[#1f2847] text-[15px] lg:text-[20px] font-medium mb-5 max-w-full">
                        {currentQuestionData?.question}
                    </div>
                </div>
                {imagePath && (
                    <div className="w-full flex justify-center mb-6">
                        <img
                            src={imagePath.default.src}
                            alt={`Question ${currentQuestionData?.id} image`}
                            width={500}
                            height={500}
                            className="max-w-full h-auto"
                        />
                    </div>
                )}
                <div className="answer-wrapper">
                    <div className="flex flex-col mb-6">
                        {currentQuestionData?.answers.map((answer: string, index: number) => (
                            <div
                                key={index}
                                className={`py-3 px-4 mb-2 rounded-lg cursor-pointer border-2 ${isAnswered
                                    ? answer === currentQuestionData.correct_answer
                                        ? 'bg-green-100 border-green-500'
                                        : selectedOption === answer
                                            ? 'bg-red-100 border-red-500'
                                            : 'bg-white border-gray-200'
                                    : 'bg-white border-gray-400'
                                    }`}
                                onClick={() => handleAnswerOption(answer)}
                            >
                                {answer}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between">
                        <button
                            onClick={handlePrevious}
                            className="cursor-pointer w-32 py-2 bg-[#a8a29e] rounded-lg text-white hover:bg-gray-400"
                            disabled={trace === 0}
                        >
                            {Buttons.back}
                        </button>
                        <button
                            onClick={handleNext}
                            className={`cursor-pointer w-32 py-2 rounded-lg text-white hover:bg-[#991b1b] ${!isAnswered ? 'bg-[#f87171] cursor-not-allowed' : 'bg-[#ec3237]'
                                }`}
                            disabled={!isAnswered}
                        >
                            {trace === selectedTest.length - 1 ? Buttons.end : Buttons.next}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;