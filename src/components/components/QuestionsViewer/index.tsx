'use client';

import { useSelector } from 'react-redux';
import { FaCheck } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { Titles } from '@/src/constants';

const QuestionsViewer = () => {
    const resultAnswers = useSelector((state: any) => state.questions.answers);

    return (
        <section className="bg-gray-50">
            <div className="p-4 mt-4">
                <div className="container mx-auto">
                    <div className="flex flex-col md:grid grid-cols-12 text-gray-800">
                        <div className="max-w-7xl mb-10 pl-2 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">
                            <h1 className="mb-0 text-2xl font-bold md:text-4xl text-[#ec3237]">
                                {Titles.testResult}
                            </h1>
                            <div className="mt-0">
                                <span className="inline-block w-40 h-1 bg-[#ec3237] rounded-full"></span>
                                <span className="inline-block w-3 h-1 ml-1 bg-[#ec3237] rounded-full"></span>
                                <span className="inline-block w-1 h-1 ml-1 bg-[#ec3237] rounded-full"></span>
                            </div>
                        </div>
                        {resultAnswers.length === 0 ? (
                            <p className="text-center text-gray-600">No results available.</p>
                        ) : (
                            resultAnswers.map((answer: any, index: number) => {
                                return (
                                    <div className="flex flex-col md:flex-row md:contents" key={index}>
                                        <div className="flex-shrink-0 col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                            <div className="h-full w-6 flex items-center justify-center">
                                                <div className={`h-full w-1 pointer-events-none ${!answer.wrongAnswer ? 'bg-[#87D37C]' : 'bg-[#ec3237]'}`}></div>
                                            </div>
                                            <div className={`flex items-center justify-center w-6 h-6 absolute top-1/2 -mt-3 rounded-full shadow text-center ${!answer.wrongAnswer ? 'bg-[#87D37C]' : 'bg-[#ec3237]'}`}>
                                                {!answer.wrongAnswer ? <FaCheck className="text-white" /> : <IoClose className="text-white" />}
                                            </div>
                                        </div>
                                        <div className={`${!answer.wrongAnswer ? 'bg-[#87D37C]' : 'bg-[#ec3237]'} col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full`}>
                                            <h3 className="font-semibold text-white text-lg mb-1">{answer.question}</h3>
                                            {answer.wrongAnswer && <p className="leading-tight text-white text-justify w-full">
                                                Ձեր պատասխանը: {answer.wrongAnswer}
                                            </p>}
                                            <p className="text-white">
                                                Ճիշտ պատասխան: {answer.correctAnswer}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default QuestionsViewer;
