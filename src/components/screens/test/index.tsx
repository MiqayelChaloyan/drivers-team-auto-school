'use client'

import React from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { useDispatch, useSelector } from 'react-redux';
import * as Action from '@/src/reducer/store/testReducer';

import Quiz from './Quiz';
import NotificationDialogResult from './NotificationDialogResult';
import Loader from '@/src/lib/ui/Loader';
import ContinueTest from './ContinueTest';

import { Pages } from '@/src/constants/pages';

import { RootState } from '@/src/types';


const Test = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const {isLoading} = useSelector((state: RootState) => state.questions);


    const params = useSearchParams();
    const query = params.get('test');

    const _onClose = () => {
        dispatch(Action.handleTestEnded({
            isClose: false,
            test: Number(query) - 1
        }));
        router.push(Pages.TESTS)
    };


    if (isLoading) {
        return <Loader />;
    };

    return (
        <section id='test' className='min-h-[90vh] flex items-center justify-center bg-[#374151]'>
            <Quiz />
            <ContinueTest />
            <NotificationDialogResult onClose={_onClose} />
        </section>
    )
};

export default Test;