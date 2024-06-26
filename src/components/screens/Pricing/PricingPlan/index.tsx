'use client'

const PricingPlan = ({ plan }: any) => {
    return (
        <div className="p-8 bg-gray-900 rounded">
            <div className="mb-10 text-center">
                <p className="text-xl font-medium tracking-wide text-white whitespace-pre-line mb-8">{plan.name}</p>
                <div className="flex items-center justify-center">
                    <p className="mr-2 text-5xl font-semibold text-white lg:text-3xl">
                        ֏{plan.price}
                    </p>
                    <p className="text-lg text-gray-500">/ ժամ</p>
                </div>
            </div>
            <ul className="mb-8 h-2.5 space-y-2">
                {plan.features.map((feature: any, featureIndex: number) => (
                    <li className="flex items-center" key={featureIndex}>
                        <div className="mr-3">
                            <svg
                                className="w-4 h-4 text-teal-accent-400"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeWidth="2"
                            >
                                <polyline fill="none" stroke="white" points="6,12 10,16 18,8" />
                                <circle cx="12" cy="12" fill="none" r="11" stroke="white" />
                            </svg>
                        </div>
                        <p className="font-medium text-gray-300">{feature}</p>
                    </li>
                ))}
            </ul>
            {/* <div className={`inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md ${plan.buttonClass} focus:shadow-outline focus:outline-none`}>
                Get Now
            </div> */}
        </div>
    );
};

export default PricingPlan;

