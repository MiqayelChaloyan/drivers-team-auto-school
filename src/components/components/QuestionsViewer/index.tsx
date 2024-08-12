'use client'


'use client';

import { useSelector } from 'react-redux';
import { FaCheck } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

const QuestionsViewer = () => {
    const resultAnswers = useSelector((state: any) => state.questions.answers);

    return (
        <section className="bg-gray-50">
            <div className="p-4">
                <h1 className="text-4xl text-center font-semibold mb-6">Թեստի արդյունքները</h1>
                <div className="container">
                    <div className="flex flex-col md:grid grid-cols-12 text-gray-800">
                        {resultAnswers.map((answer: any, index: number) => {
                            return (
                                <div className="flex md:contents" key={index}>
                                    <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                        <div className="h-full w-6 flex items-center justify-center">
                                            <div className={`h-full w-1 pointer-events-none ${!answer.wrongAnswer ? 'bg-[#87D37C]' : 'bg-[#ec3237]'}`}></div>
                                        </div>
                                        <div className={`w-6 h-6 flex items-center justify-center absolute top-1/2 -mt-3 rounded-full shadow text-center ${!answer.wrongAnswer ? 'bg-[#87D37C]' : 'bg-[#ec3237]'}`}>
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
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuestionsViewer;
