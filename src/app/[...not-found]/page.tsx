'use client';

import Image from 'next/image';

import { ImagePaths } from '@/src/constants';

import './styles.css';


export default function NotFound() {
    return (
        <html lang='en'>
            <head>
                <title>Page Not found</title>
            </head>
            <body>
                <div className="container">
                    <Image
                        src={ImagePaths.notFoundURL}
                        alt='404'
                        width={500}
                        height={500}
                        priority
                    />
                    <h1>
                        <span>404</span> <br />
                        Էջը չի գտնվել
                    </h1>
                </div>
            </body>
        </html>
    );
};

