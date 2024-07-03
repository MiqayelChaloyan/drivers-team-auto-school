'use client'

import About from './AboutUs';
import Advantages from './Advantages';
import Pricing from './Pricing';
import OurTeam from './OurTeam';
import Parallax from './Parallax';
import Statistic from './Statistic';
import Fet from './Price';


const Home = () => {
    return (
        <>
            <About />
            {/* <Advantages/> */}
            <Parallax />
            <Fet />
            <Pricing />
            <OurTeam />
            <Statistic />
        </>
    )
};

export default Home;