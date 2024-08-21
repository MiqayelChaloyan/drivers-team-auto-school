'use client'

import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import * as Action from '@/src/reducer/store/testReducer';


const TimerCountdown = () => {
    const [timeLeft, setTimeLeft] = useState<number>(30 * 60);
    const isLastFiveMinutes = timeLeft <= 5 * 60;

    const dispatch = useDispatch();

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
            return () => clearInterval(timerId);
        } else {
            dispatch(Action.handleTestEnded(true));
            setTimeLeft(0);
        }
    }, [timeLeft]);

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