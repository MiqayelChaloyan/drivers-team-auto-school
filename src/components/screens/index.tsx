'use client'

import AboutUs from './AboutUs';
import Features from './Features';
import Packages from './Packages';
import OurTeam from './OurTeam';
import Parallax from './Parallax';
import Statistic from './Statistic';
import {StickyScrollRevealDemo} from './Framer';


const Home = () => {
    return (
        <>
            <AboutUs />
            <Features />
            <Packages />
            <OurTeam />
            {/* <StickyScrollRevealDemo/> */}
            <Parallax />
            <Statistic />
        </>
    )
};

export default Home;