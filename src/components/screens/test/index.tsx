// 'use client'

// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from 'next/navigation';
// import { useEffect, useState } from "react";
// // import './styles.css'; // Ensure this file contains the required CSS
// import * as Action from '@/src/reducer/store/testReducer'
// import { generateQuestionnaires } from "../tests/generateQuestionnaires";

// const Test = () => {
//     const questions = useSelector((state: any) => state.questions?.test) || [];
//     const isLoading = useSelector((state: any) => state.questions?.isLoading);
//     const params = useParams();

//     const dispatch = useDispatch();

//     useEffect(() => {
//         const data: any = generateQuestionnaires();
//         dispatch(Action.startExamAction(data))
//         dispatch(Action.updateLoader(false))
//     }, []);


//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
//     const [score, setScore] = useState(0);
//     const [showScore, setShowScore] = useState(false);

//     const currentQues = questions[params?.slug[0]] || [];
//     const currentQuestionData = currentQues[currentQuestion] || {};

//     // Handle previous and next question navigation
//     const handlePrevious = () => {
//         if (currentQuestion > 0) {
//             setCurrentQuestion(currentQuestion - 1);
//         }
//     };

//     const handleNext = () => {
//         if (currentQuestion < currentQues.length - 1) {
//             setCurrentQuestion(currentQuestion + 1);
//         }
//     };

//     // Handle selecting an answer
//     const handleAnswerOption = (answer: string) => {
//         const updatedOptions = [...selectedOptions];
//         updatedOptions[currentQuestion] = answer;
//         setSelectedOptions(updatedOptions);
//     };

//     // Handle submitting the test
//     const handleSubmitButton = () => {
//         let newScore = 0;
//         currentQues.forEach((question: any, index: number) => {
//             if (question.correct_answer === selectedOptions[index]) {
//                 newScore += 1;
//             }
//         });
//         setScore(newScore);
//         setShowScore(true);
//     };


//     // Render component
//     if (isLoading) {
//         return <div className="text-center text-white">Loading...</div>;
//     }

//     if (showScore) {
//         return (
//             <div className="text-center text-black text-3xl">
//                 You scored {score} out of {currentQues.length}
//             </div>
//         );
//     }

//     return (
//         <div className="max-w-xl mx-auto p-4 bg-white rounded-lg mt-25">
//             <div className="flex flex-col items-start">
//                 <h4 className="mt-4 text-xl text-[#232331]">
//                     Հարց {currentQuestion + 1}/{currentQues.length}
//                 </h4>
//                 <div className="mt-4 h-30 text-1xl text-[#232331]">
//                     {currentQuestionData.question}
//                 </div>



//                 <div className="mt-4 w-full h-50 rounded-lg">
//                     {currentQuestionData.image && (<img src={currentQuestionData.image.default.src} alt='image' className="object-cover" />)}
//                 </div>


//             </div>






//             <div className="flex flex-col mt-6 h-180">
//                 {currentQuestionData.answers?.map((answer: string, index: number) => (
//                     <div
//                         key={index}
//                         className={`flex items-center py-3 px-4 mb-2 rounded-lg cursor-pointer border-2 ${selectedOptions[currentQuestion] === answer ? 'bg-[#EC3237]' : 'bg-gray-900'}`}
//                         onClick={() => handleAnswerOption(answer)}
//                     >
//                         <input
//                             type="radio"
//                             name={`question-${currentQuestion}`}
//                             value={answer}
//                             checked={selectedOptions[currentQuestion] === answer}
//                             onChange={() => handleAnswerOption(answer)}
//                             className="w-5 h-5 bg-gray-900 text-indigo-500"
//                         />
//                         <p className="ml-4 text-white text-md">{answer}</p>
//                     </div>
//                 ))}
//             </div>






//             <div className="flex justify-between mt-6">
//                 <button
//                     onClick={handlePrevious}
//                     className="w-32 py-2 bg-indigo-600 rounded-lg text-white"
//                 >
//                     Նախորդ
//                 </button>
//                 <button
//                     onClick={
//                         currentQuestion === currentQues.length - 1
//                             ? handleSubmitButton
//                             : handleNext
//                     }
//                     className="w-32 py-2 bg-indigo-600 rounded-lg text-white"
//                 >
//                     {currentQuestion === currentQues.length - 1 ? "Submit" : "Հաջորդ"}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Test;

'use client'

import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";
// import './styles.css'; // Ensure this file contains the required CSS
import * as Action from '@/src/reducer/store/testReducer'
import { generateQuestionnaires } from "../tests/generateQuestionnaires";

const Test = () => {
    const questions = useSelector((state: any) => state.questions?.test) || [];
    const isLoading = useSelector((state: any) => state.questions?.isLoading);
    const params = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        const data: any = generateQuestionnaires();
        dispatch(Action.startExamAction(data))
        dispatch(Action.updateLoader(false))
    }, [dispatch]);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const currentQues = questions[params?.slug[0]] || [];
    const currentQuestionData = currentQues[currentQuestion] || {};

    // Handle previous and next question navigation
    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleNext = () => {
        if (currentQuestion < currentQues.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    // Handle selecting an answer
    const handleAnswerOption = (answer: string) => {
        const updatedOptions = [...selectedOptions];
        updatedOptions[currentQuestion] = answer;
        setSelectedOptions(updatedOptions);
    };

    // Handle submitting the test
    const handleSubmitButton = () => {
        let newScore = 0;
        currentQues.forEach((question: any, index: number) => {
            if (question.correct_answer === selectedOptions[index]) {
                newScore += 1;
            }
        });
        setScore(newScore);
        setShowScore(true);
    };

    // Render component
    if (isLoading) {
        return <div className="text-center text-white">Loading...</div>;
    }

    if (showScore) {
        return (
            <div className="text-center mt-40 text-black text-3xl">
                Դուք վաստակել եք {score}-ը {currentQues.length}-ից
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
            <div className="flex flex-col items-start">
                <h4 className="mt-4 text-xl text-gray-800">
                     Հարց {currentQuestion + 1}/{currentQues.length}
                </h4>
                <div className="mt-4 text-lg text-gray-700">
                    {currentQuestionData.question}
                </div>

                {currentQuestionData.image && (
                    <div className="mb-4 mt-4 m-auto h-64 w-104 border-4 p-2">
                        <img
                            className="h-full w-full object-cover"
                            src={currentQuestionData.image.default.src}
                            alt="" />
                    </div>
                )}
            </div>














            <div className="flex flex-col mt-6">
                {currentQuestionData.answers?.map((answer: string, index: number) => (
                    <div
                        key={index}
                        className={`flex items-center py-3 px-4 mb-2 rounded-lg cursor-pointer border-2 border-pink ${selectedOptions[currentQuestion] === answer ? 'bg-red-600 border-red-600' : 'bg-gray-800 border-gray-600'}`}
                        onClick={() => handleAnswerOption(answer)}
                    >
                        <input
                            type="radio"
                            name={`question-${currentQuestion}`}
                            value={answer}
                            checked={selectedOptions[currentQuestion] === answer}
                            onChange={() => handleAnswerOption(answer)}
                            className="w-5 h-5 bg-gray-800 text-indigo-500"
                        />
                        <p className="ml-4 text-white text-md">{answer}</p>
                    </div>
                ))}
            </div>













            <div className="flex justify-between mt-6">
                <button
                    onClick={handlePrevious}
                    className="w-32 py-2 bg-indigo-600 rounded-lg text-white hover:bg-indigo-700"
                >
                    Նախորդ
                </button>
                <button
                    onClick={
                        currentQuestion === currentQues.length - 1
                            ? handleSubmitButton
                            : handleNext
                    }
                    className="w-32 py-2 bg-indigo-600 rounded-lg text-white hover:bg-indigo-700"
                >
                    {currentQuestion === currentQues.length - 1 ? "Վերջ" : "Հաջորդ"}
                </button>
            </div>
        </div>
    );
};

export default Test;



