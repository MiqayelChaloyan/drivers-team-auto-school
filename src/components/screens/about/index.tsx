'use client'

import Reviews from './Reviews';
import About from './AboutUs';


interface Props {
    data: ABOUT_US_QUERYResult;
    reviews: REVIEWS_QUERYResult;
};

const Home = ({ data, reviews }: Readonly<Props>) => {
    return (
        <>
            <About data={data} />
            <Reviews reviews={reviews}/>
        </>
    )
};

export default Home;