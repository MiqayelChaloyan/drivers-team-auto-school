'use client'

import React from 'react';

import { useSelector } from 'react-redux';
import { Dialog } from '@material-tailwind/react';

import { AiOutlineNotification } from 'react-icons/ai';

import { Mardoto } from '@/src/constants/font';

import { RootState } from '@/src/types';
import { Buttons, Texts, Titles } from '@/src/constants';


interface NotificationDialogResultProps {
  onClose: () => void;
};

const NotificationDialogResult = ({ onClose }: Readonly<NotificationDialogResultProps>) => {
  const { score, isTestEnded } = useSelector((state: RootState) => state.questions);

  const result = score >= 18;

  return (
    <Dialog open={isTestEnded} handler={() => null}>
      <div className={`container mx-auto px-4 md:px-10 py-5 ${Mardoto.className}`}>
        <div className="bg-white  px-3 md:px-4 py-2 flex flex-col justify-center items-center">
          <h1 className="mt-8 md:mt-12 text-3xl lg:text-4xl font-semibold leading-10 text-center text-gray-800 text-center md:w-9/12 lg:w-7/12">
            {Titles.yourResult}
          </h1>
          <div className="px-10 py-10">
            <AiOutlineNotification size={100} color='#a3a3a3' />
          </div>
          <h4 className="text-2xl leading-normal text-center text-gray-800 mb-5 md:w-9/12 lg:w-7/12">
            {result ? Texts.congratulations : Texts.tryAgain}
          </h4>
          <h4 className="text-base leading-normal text-center text-gray-600 md:w-9/12 lg:w-7/12">
            Դուք ճիշտ եք պատասխանել {score}/20 հարցի
          </h4>
          <div className="mt-12 md:mt-14 w-full flex justify-center">
            <button onClick={onClose} className="w-full sm:w-auto border border-gray-800 text-base font-medium text-gray-800 py-5 px-14 hover:border-[#ec3237] hover:bg-[#ec3237] hover:text-white">
              {Buttons.goBack}
            </button>
          </div>
          <p className="mt-10 text-base leading-normal text-center text-gray-600 md:w-12/12 lg:w-12/12">
            {Texts.resultInformation}
          </p>
        </div>
      </div>
    </Dialog>
  );
};

export default NotificationDialogResult;