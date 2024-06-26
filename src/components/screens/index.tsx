'use client'

import About from './AboutUs';
import Advantages from './Advantages';
import Pricing from './Pricing';
import OurTeam from './OurTeam';
import Parallax from './Parallax';
import Statistic from './Statistic';
import Fet from './Price';
import { HeroHighlight } from './AboutUs/hero-highlight';


const Home = () => {
    return (
        <>
{/* <MultiLayerParallax /> */}
{/* <Statistic /> */}
{/* <HeroHighlight> */}
            <About />
            {/* <Advantages /> */}
            <Parallax />
            <Fet />

            <Pricing />
            <OurTeam />
            <Statistic />
            {/* 
            <Advantages />
            <OurTeam />
            <Parallax />
          
            <Statistic /> */}
            {/* <Pricing />  */}
            {/* <div style={{ backgroundColor: 'green', height: '500px' }} /> */}
            {/* <Statistic /> */}
            {/* <Pricing />
            <OurTeam />
            <Statistic /> */}

            {/* <Advantages /> */}
            {/* </HeroHighlight> */}

        </>
    )
};

export default Home;