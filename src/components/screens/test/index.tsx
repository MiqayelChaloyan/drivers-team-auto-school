'use client'

import React from 'react';

import { useRouter } from 'next/navigation';

import { useDispatch } from "react-redux";
import * as Action from '@/src/reducer/store/testReducer';

import Quiz from './Quiz';
import NotificationDialogResult from './NotificationDialogResult';

import { Pages } from '@/src/constants/pages';


const Test = () => {
    const dispatch = useDispatch();
    const router = useRouter()

    const _onClose = () => {
        dispatch(Action.handleTestEnded(false));
        router.push(Pages.TESTS)
    }

    return (
        <section id='test' className='min-h-[90vh] flex items-center justify-center bg-[#dddfeb]'>
            <Quiz />
            <NotificationDialogResult onClose={_onClose} />
        </section>
    )
};

export default Test;