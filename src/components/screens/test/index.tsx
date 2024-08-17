'use client'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'next/navigation';
import * as Action from '@/src/reducer/store/testReducer';
import { generateQuestionnaires } from '@/src/utils/generateQuestionnaires';
import QuestionsViewer from "@/src/components/components/QuestionsViewer";
import Image from 'next/image';

import img from '@/src/driving_theory/group_1/images/image_1.jpg'

const Test: React.FC = () => {
    const params = useParams();
    const dispatch = useDispatch();

    const tests = useSelector((state: any) => state.questions?.tests);
    const selectedTest = useSelector((state: any) => state.questions?.selectedTest);
    const isLoading = useSelector((state: any) => state.questions?.isLoading);
    const trace = useSelector((state: any) => state.questions?.trace);
    const answers = useSelector((state: any) => state.questions?.answers);
    const isViewAnswer = useSelector((state: any) => state.questions?.isViewAnswer);

    const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
    const currentQuestionData = selectedTest[trace];

    console.log(currentQuestionData)

    const imagePath = currentQuestionData?.image && require(`@/src/driving_theory/group_${currentQuestionData?.group}/${currentQuestionData?.image}`);

    const startExam = () => {
        if (tests.length !== 0) {
            dispatch(Action.startTest(params.slug[0]));
            dispatch(Action.updateLoader(false));
        } else {
            const data: any = generateQuestionnaires();
            dispatch(Action.startExamAction(data));
        }
    };

    useEffect(() => {
        startExam();
    }, [tests.length, params.slug, !selectedTest.length]);

    // // 30 minutes in seconds
    // const [timeLeft, setTimeLeft] = useState<number>(30 * 60);
    // const [isActive, setIsActive] = useState<boolean>(false);

    // // Timer management
    // const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

    // const startTimer = () => {
    //     if (isActive) return; // Prevent multiple intervals

    //     setIsActive(true);
    //     intervalRef.current = setInterval(() => {
    //         setTimeLeft(prevTime => {
    //             if (prevTime <= 1) {
    //                 clearInterval(intervalRef.current!);
    //                 setIsActive(false);
    //                 return 0;
    //             }
    //             return prevTime - 1;
    //         });
    //     }, 1000);
    // };

    // const stopTimer = () => {
    //     setIsActive(false);
    //     if (intervalRef.current) {
    //         clearInterval(intervalRef.current);
    //     }
    // };

    // const resetTimer = () => {
    //     setIsActive(false);
    //     setTimeLeft(30 * 60);
    //     if (intervalRef.current) {
    //         clearInterval(intervalRef.current);
    //     }
    // };

    // const formatTime = (seconds: number): string => {
    //     const minutes = Math.floor(seconds / 60);
    //     const secs = seconds % 60;
    //     return `${minutes < 10 ? `0${minutes}` : minutes}:${secs < 10 ? `0${secs}` : secs}`;
    // };


    const _handleNext = () => {
        if (selectedOptions[trace] === undefined) return;
        if (trace < selectedTest?.length - 1) {
            dispatch(Action.moveNextAction());
        } else {
            dispatch(Action.viewAnswer());
            // stopTimer();
            // resetTimer();
        }
    };

    const _handlePrevious = () => {
        if (trace > 0) {
            dispatch(Action.movePrevAction());
        }
    };

    const _handleAnswerOption = (answer: string) => {
        const existingAnswer = answers.find((el: any) => el.question === currentQuestionData.question);

        const updatedOptions = [...selectedOptions];
        updatedOptions[trace] = answer;
        setSelectedOptions(updatedOptions);

        if (!existingAnswer) {
            if (currentQuestionData.correct_answer === answer) {
                dispatch(Action.addScore());
                dispatch(Action.addedAnswer({
                    question: currentQuestionData.question,
                    wrongAnswer: false,
                    correctAnswer: answer
                }));
            } else {
                dispatch(Action.addedAnswer({
                    question: currentQuestionData.question,
                    wrongAnswer: answer,
                    correctAnswer: currentQuestionData.correct_answer
                }));
            }
        } else {
            dispatch(Action.updateAnswer({
                question: currentQuestionData.question,
                correctAnswer: currentQuestionData.correct_answer,
                selectedAnswer: answer,
            }));
        }
    };

    if (isLoading) {
        return <div className="text-center text-black">Loading...</div>;
    };

    if (isViewAnswer) {
        return <QuestionsViewer />;
    };


    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md mt-10">
            <div className="flex flex-col items-start mb-6">
                <h4 className="text-xl text-gray-800">
                    Հարց {trace + 1}/{selectedTest?.length}
                </h4>
                <div className="mt-4 text-lg text-gray-700">
                    {currentQuestionData?.question}
                </div>
                {/* <div>{formatTime(timeLeft)}</div> */}
            </div>
            {currentQuestionData?.image && imagePath &&
                <Image
                    src={imagePath}
                    alt={`Question ${currentQuestionData?.id} image`}
                    width={500}
                    height={500}
                />}

            <div className="flex flex-col mb-6">
                {currentQuestionData?.answers.map((answer: string, index: number) => (
                    <div
                        key={index}
                        className={`flex items-center py-3 px-4 mb-2 rounded-lg cursor-pointer border-2 ${selectedOptions[trace] === answer ? 'bg-[#EC3237]' : 'bg-white'}`}
                        onClick={() => _handleAnswerOption(answer)}
                    >
                        <input
                            type="radio"
                            name={`question-${trace}`}
                            value={answer}
                            checked={selectedOptions[trace] === answer}
                            onChange={() => _handleAnswerOption(answer)}

                            className="w-5 h-5 bg-gray-800 text-indigo-500"
                            readOnly
                        />
                        <label htmlFor={`value-${trace}`} className="ml-4 text-black text-md">{answer}</label>
                    </div>
                ))}
            </div>

            <div className="flex justify-between">
                <button
                    onClick={_handlePrevious}
                    className="w-32 py-2 bg-indigo-600 rounded-lg text-white hover:bg-indigo-700"
                >
                    Նախորդ
                </button>
                <button
                    onClick={_handleNext}
                    className="w-32 py-2 bg-indigo-600 rounded-lg text-white hover:bg-indigo-700"
                    disabled={selectedOptions[trace] === undefined} // Disable if no answer selected
                >
                    {trace === selectedTest.length - 1 ? "Վերջ" : "Հաջորդ"}
                </button>
            </div>
        </div>
    );
};

export default Test;
