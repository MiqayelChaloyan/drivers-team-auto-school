'use client';

const AdvantageCard = ({ title, description }: any) => {
    return (
        <div className="flex divide-x rounded-lg border bg-gray-50">
            <div className="flex items-center p-2 text-indigo-500 md:p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <div className="p-4 md:p-6">
                <h3 className="mb-2 text-lg font-semibold md:text-xl">{title}</h3>
                <p className="text-gray-500">{description}</p>
            </div>
        </div>
    );
};


export default AdvantageCard;