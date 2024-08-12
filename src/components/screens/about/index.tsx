'use client'

import Reviews from './Reviews';
import About from './AboutUs';
import * as Action from '@/src/reducer/store/testReducer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

interface Props {
    data: ABOUT_US_QUERYResult;
    reviews: REVIEWS_QUERYResult;
};

const Home = ({ data, reviews }: Readonly<Props>) => {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(Action.viewAnswerRemove());
    // },[])

    return (
        <>
            <About data={data} />
            <Reviews reviews={reviews}/>
        </>
    )
};

export default Home;