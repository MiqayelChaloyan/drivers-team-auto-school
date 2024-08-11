'use server'

import { notFound } from 'next/navigation';

import { getCarTypeDetalis, getCompetitiveAdvantages, getFeatures, getMainData, getPricing, getStudents, getTrainingMethods } from '@/src/utils/data';
import Home from '@/src/components/screens/home';



export default async function Page() {
  const mainData = await getMainData();
  const carTypeDetalisData = await getCarTypeDetalis();
  const students = await getStudents();
  const features = await getFeatures();
  const pricing = await getPricing();
  const trainingMethods = await getTrainingMethods();
  const advantages = await getCompetitiveAdvantages();


  if (!mainData || !carTypeDetalisData || !students || !features || !pricing || !trainingMethods || !advantages) return notFound();

  return (
    <Home
      data={mainData}
      carTypeDetalisData={carTypeDetalisData}
      students={students}
      features={features}
      pricing={pricing}
      trainingMethods={trainingMethods}
      advantages={advantages}
    />);
}





