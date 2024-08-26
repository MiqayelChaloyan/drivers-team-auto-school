'use client';

import React from 'react';
import { Carousel } from './Carousel';
import { Card } from './Card';

import { Titles } from '@/src/constants';


interface Props {
    students: STUDENTS_QUERYResult;
};

const OurStudents = ({
    students
}: Readonly<Props>) => {
    const cards = students?.map((student: any) => (
        <Card key={student?._key} card={student} />
    ));

    return (
        <section id='our-students'>
            <div className="w-full h-full py-2">
                <div className="max-w-7xl pl-6 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">
                    <h1 className="mb-0 text-2xl font-bold md:text-4xl text-[#040240]">
                        {Titles.ourStudents}
                    </h1>
                    <div className="mt-0">
                        <span className="inline-block w-40 h-1 bg-[#040240] rounded-full"></span>
                        <span className="inline-block w-3 h-1 ml-1 bg-[#040240] rounded-full"></span>
                        <span className="inline-block w-1 h-1 ml-1 bg-[#040240] rounded-full"></span>
                    </div>
                </div>
                <Carousel items={cards} />
            </div>
        </section>
    );
};

export default OurStudents;

