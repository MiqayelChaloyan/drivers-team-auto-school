'use client';

import React from 'react';

import Image, { ImageProps } from 'next/image';

import { cn } from '@/src/utils/cn';


export const BlurImage = ({
    height,
    width,
    src,
    className,
    alt,
    ...rest
}: ImageProps) => {
    return (
        <Image
            className={cn(
                "transition duration-300",
                className
            )}
            src={src}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            alt={alt ? alt : "Background of a beautiful view"}
            {...rest}
        />
    );
};
