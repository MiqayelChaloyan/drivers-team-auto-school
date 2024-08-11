'use server'

import { notFound } from 'next/navigation';

import Home from '@/src/components/screens/about';

import { getContent, getReviews } from '@/src/utils/data';


export default async function Page() {
  const data = await getContent();
  const reviews = await getReviews();

  if (!data || !reviews) return notFound();

  return (<Home data={data} reviews={reviews} />);
};





