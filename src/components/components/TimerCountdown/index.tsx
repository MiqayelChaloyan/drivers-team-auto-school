'use client'

import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import * as Action from '@/src/reducer/store/testReducer';

import { useSearchParams } from 'next/navigation';
import { Step } from '@/src/types';


const TimerCountdown = () => {
    const params = useSearchParams();
    const query = params.get('test');
    const testId = Number(query) - 1;

    const savedTests = Action.loadFromLocalStorage();
    const currentTest = savedTests.find((savedTest: Step) => savedTest.test === testId);

    let time = currentTest ? currentTest.timeLeft : 30 * 60;

    const [timeLeft, setTimeLeft] = useState<number>(time);

    const isLastFiveMinutes = timeLeft <= 5 * 60;
    const dispatch = useDispatch();

    const handleSaveTimeTest = () => {
        const savedTests = Action.loadFromLocalStorage();

        if (savedTests.length) {
            const updatedTests = savedTests.map((savedTest: Step) => {
                if (savedTest.test === testId) {
                    return {
                        ...savedTest,
                        timeLeft,
                    };
                }
                return savedTest;
            });

            Action.saveToLocalStorage(updatedTests);
        }
    };

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft((prev) => {
                    const newTime = prev - 1;
                    handleSaveTimeTest();
                    return newTime;
                });
            }, 1000);

            return () => clearInterval(timerId);
        } else {
            dispatch(Action.handleTestEnded({
                isClose: true,
                test: testId
            }));
            setTimeLeft(0);
        }
    }, [timeLeft, testId]);

    useEffect(() => {
        if (!currentTest) {
            setTimeLeft(30 * 60);
        }
    }, [testId, currentTest]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className={`ml-2 font-bold text-[${isLastFiveMinutes ? '#ec3237' : '#1f2847'}] ${isLastFiveMinutes ? 'animate-pulse' : ''}`}>
            {formatTime(timeLeft)}
        </div>
    )
};

export default React.memo(TimerCountdown);
