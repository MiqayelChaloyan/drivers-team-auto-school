'use client'

import SVG from 'react-inlinesvg';

import { Palette } from '@/src/themes';
import { Icon } from '@/src/types';

import './styles.css';


interface Props {
    icon: Icon;
    headline: string;
    content: string;
};

const Feature = ({
    icon,
    headline,
    content
}: Readonly<Props>) => {
    return (
        <div className="relative">
            <dt>
                <div className="absolute flex items-start justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <SVG
                        src={icon.svg}
                        title={icon.title}
                        color={Palette.blue}
                        className='icon'
                    />
                </div>
                <p className="font-heading ml-16 text-lg leading-6 font-bold text-[#040240]">
                    {headline}
                </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-[#1c1917]">
                {content}
            </dd>
        </div>
    );
};

export default Feature;