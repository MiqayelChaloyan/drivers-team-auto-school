'use client'

import Header from './Header';
import VehicleTypes from './VehicleTypes';
import OurStudents from './OurStudents';
import Features from './Features';
import Pricing from './Pricing';
import TrainingMethods from './TrainingMethods';
import OurCompetitiveAdvantages from './OurCompetitiveAdvantages';


interface Props {
    data?: MAIN_QUERYResult | any
    carTypeDetalisData?: CAR_TYPE_DETALIS_QUERYResult | any
    students?: STUDENTS_QUERYResult | any
    features?: FETAURES_QUERYResult | any
    pricing?: PRICING_QUERYResult | any
    trainingMethods?: TRAINING_TYPE_DETALIS_QUERYResult | any
    advantages?: COMPETITIVE_ADVANTAGES_QUERYResult | any
}

const Home = ({
    data,
    carTypeDetalisData,
    students,
    features,
    pricing,
    trainingMethods,
    advantages
}: Readonly<Props>) => {
    return (
        <>
            <Header data={data[0]} />
            <VehicleTypes data={carTypeDetalisData[0]} />
            <Features data={features[0]?.features} />
            <Pricing data={pricing[0]} />
            <TrainingMethods data={trainingMethods[0].trainingTypeDetalis} />
            <OurStudents students={students[0]?.images} />
            <OurCompetitiveAdvantages data={advantages[0]?.competitiveAdvantages} />
        </>
    )
};

export default Home;

