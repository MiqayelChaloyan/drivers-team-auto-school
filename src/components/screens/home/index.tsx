'use client'

import Header from './Header';
import VehicleTypes from "./VehicleTypes";
import AboutUs from './AboutUs';
import Parallax from "./Parallax";
import Advantages from "./Advantages";
import Pricing from "./Pricing";
import TypesOfTraining from './TypesOfTraining';

import OurTeam from "./OurTeam";

import OurCompetitiveAdvantages from "./OurCompetitiveAdvantages";



const Home = () => {
    return (
        <>
            <Header />
            <VehicleTypes />
            <AboutUs />
            <Parallax />
            <Advantages />
            <Pricing />
            <TypesOfTraining />
            <OurTeam />
            <OurCompetitiveAdvantages />
        </>
    )
};

export default Home;

