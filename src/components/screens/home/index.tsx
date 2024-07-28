'use client'

import Header from './Header';

import Advantages from './Advantages';
import Parallax from "./Parallax";
import Fet from "./Price";
import Pricing from "./Pricing";
import OurTeam from "./OurTeam";
import Statistic from "./Statistic";
import { Car } from "./Car/Car";
import TypesOfTraining from './TypesOfTraining';



const Home = () => {
    return (
        <>
            <Header />
            <Car/>
            <Advantages />
            <Parallax />
            <Fet />
            <Pricing />
            <TypesOfTraining/>

            <OurTeam />
            <Statistic />
        </>
    )
};

export default Home;