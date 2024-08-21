'use client'

import React from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { useDispatch } from "react-redux";
import * as Action from '@/src/reducer/store/testReducer';

import Quiz from './Quiz';
import NotificationDialogResult from './NotificationDialogResult';

import { Pages } from '@/src/constants/pages';
import ContinueTest from './ContinueTest';


const Test = () => {
    const dispatch = useDispatch();
    const router = useRouter()
    const params = useSearchParams();
    const query = params.get('test');

    const _onClose = () => {
        dispatch(Action.handleTestEnded({
            isClose: false,
            test: Number(query) - 1
        }));
        router.push(Pages.TESTS)
    }

    return (
        <section id='test' className='min-h-[90vh] flex items-center justify-center bg-[#dddfeb]'>
            <Quiz />
            <ContinueTest />
            <NotificationDialogResult onClose={_onClose} />
        </section>
    )
};

export default Test;