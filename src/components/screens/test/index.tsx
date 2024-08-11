'use client'

import { useSelector } from "react-redux";
import { useParams } from 'next/navigation'
import { useState } from "react";

const Test = () => {
    const questions = useSelector((state: any) => state.questions?.test) || [];
    const isLoading = useSelector((state: any) => state.questions?.isLoading);
    const params = useParams()

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
            <div className="text-center text-black text-3xl">
                You scored {score} out of {currentQues.length}
            </div>
        );
    }


    return (
        <div className="max-w-xl mx-auto p-4 bg-gray-800 rounded-lg mt-25">
            <div className="flex flex-col items-start">
                <h4 className="mt-4 text-xl text-white">
                    Question {currentQuestion + 1} of {currentQues.length}
                </h4>
                <div className="mt-4 h-40 text-2xl text-white">
                    {currentQuestionData.question}
                </div>
                {currentQuestionData.image && <div>
                    <img src={currentQuestionData.image.default.src} alt='image'/>
                </div>}
            </div>
            <div className="flex flex-col mt-6 h-180">
                {currentQuestionData.answers?.map((answer: string, index: number) => (
                    <div
                        key={index}
                        className="flex items-center py-3 px-4 mb-2 bg-gray-700 rounded-lg cursor-pointer"
                        onClick={() => handleAnswerOption(answer)}
                    >
                        <input
                            type="radio"
                            name={`question-${currentQuestion}`}
                            value={answer}
                            checked={selectedOptions[currentQuestion] === answer}
                            onChange={() => handleAnswerOption(answer)}
                            className="w-5 h-5 bg-gray-900 text-indigo-500"
                        />
                        <p className="ml-4 text-white text-md">{answer}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-between mt-6">
                <button
                    onClick={handlePrevious}
                    className="w-32 py-2 bg-indigo-600 rounded-lg text-white"
                >
                    Previous
                </button>
                <button
                    onClick={
                        currentQuestion === currentQues.length - 1
                            ? handleSubmitButton
                            : handleNext
                    }
                    className="w-32 py-2 bg-indigo-600 rounded-lg text-white"
                >
                    {currentQuestion === currentQues.length - 1 ? "Submit" : "Next"}
                </button>
            </div>
        </div>
    );
}

export default Test;
