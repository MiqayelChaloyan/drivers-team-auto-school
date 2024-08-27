'use client'

import Header from './Header';
import VehicleTypes from './VehicleTypes';
import OurStudents from './OurStudents';
import Features from './Features';
import Pricing from './Pricing';
import TrainingMethods from './TrainingMethods';
import OurCompetitiveAdvantages from './OurCompetitiveAdvantages';


interface Props {
    data?: MAIN_QUERYResult;
    carTypeDetalisData?: CAR_TYPE_DETALIS_QUERYResult;
    students?: STUDENTS_QUERYResult;
    features?: FETAURES_QUERYResult;
    pricing?: PRICING_QUERYResult;
    trainingMethods?: TRAINING_TYPE_DETALIS_QUERYResult;
    advantages?: COMPETITIVE_ADVANTAGES_QUERYResult | any;
    contact?: CONTACT_US_QUERYResult;
};

const Home = ({
    data,
    carTypeDetalisData,
    students,
    features,
    pricing,
    trainingMethods,
    advantages,
    contact
}: Readonly<Props>) => {
    return (
        <>
            <Header data={data} />
            <VehicleTypes data={carTypeDetalisData} />
            <Features data={features} />
            <Pricing data={pricing} contact={contact}/>
            <TrainingMethods data={trainingMethods} />
            <OurStudents students={students} />
            <OurCompetitiveAdvantages data={advantages} />
        </>
    )
};

export default Home;

