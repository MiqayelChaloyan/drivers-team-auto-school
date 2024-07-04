'use client'

import Test from "./Test";
import About from './AboutUs';
import Advantages from './Advantages';
import Parallax from "./Parallax";
import Fet from "./Price";
import Pricing from "./Pricing";
import OurTeam from "./OurTeam";
import Statistic from "./Statistic";
import { Car } from "./Car/Car";



const Home = () => {
    return (
        <>
            {/* <About />     */}
            <Test />
            <Car/>
            <Advantages />
        {/* <Price/> */}
            <Parallax />
            <Fet />
            <Pricing />
            <OurTeam />
            <Statistic />
        </>
    )
};

export default Home;