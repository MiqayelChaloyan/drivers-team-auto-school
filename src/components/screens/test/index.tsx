'use client'

import React from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { useDispatch } from 'react-redux';
import * as Action from '@/src/reducer/store/testReducer';

import Quiz from './Quiz';
import NotificationDialogResult from './NotificationDialogResult';
import ContinueTest from './ContinueTest';

import { Pages } from '@/src/constants/pages';


const Test = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const params = useSearchParams();
    const testId = params.get('test');

    const _onClose = () => {
        dispatch(Action.handleTestEnded({
            isClose: false,
            test: Number(testId) - 1
        }));
        router.push(Pages.TESTS)
    };


    return (
        <section id='test' className='min-h-[90vh] flex items-center justify-center bg-[#404040]'>
            <Quiz />
            <ContinueTest />
            <NotificationDialogResult onClose={_onClose} />
        </section>
    )
};

export default Test;