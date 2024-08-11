"use client";
import React from "react";
import { motion } from "framer-motion";
import { BlurImage } from "../BlurImage";
import { ImagePath } from "@/src/types";
import { urlForImage } from "@/sanity/lib/imageUrlBuilder";

type Card = {
  alt: string;
  _key: string;
  src: string;
};


export const Card = ({
    card,
    layout = false,
  }: {
    card: Card;
    layout?: boolean;
  }) => {
    const path: ImagePath = urlForImage(card);

    return (
      <>
        <motion.div
          layoutId={layout ? `card-${card._key}` : undefined}
          className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[30rem] md:w-80 overflow-hidden flex flex-col items-start justify-start relative z-10"
        >
          <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/80 via-transparent to-transparent z-30 pointer-events-none" />
          <div className="relative z-40 p-8">
          </div>
          <BlurImage
            src={path?.src}
            alt={card.alt}
            fill
            className="object-cover absolute z-10 inset-0"
          />
        </motion.div>
      </>
    );
  };