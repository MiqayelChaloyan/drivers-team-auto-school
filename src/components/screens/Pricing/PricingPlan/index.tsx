// 'use client'

// import React from 'react';

// const PlanCard = ({ title, price, period, features, bgColor, btnColor, hoverColor, popular }: any) => {
//     return (
//         <div className={`flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl ${bgColor} p-6 xl:py-9 xl:px-12 transition-all duration-500 ${hoverColor}`}>
//             {popular && (
//                 <div className="uppercase bg-gradient-to-r from-indigo-600 to-violet-600 rounded-t-2xl p-3 text-center text-white">
//                     MOST POPULAR
//                 </div>
//             )}
//             <h3 className="font-manrope text-2xl font-bold mb-3">{title}</h3>
//             <div className="flex items-center mb-6">
//                 <span className="font-manrope mr-2 text-6xl font-semibold text-indigo-600">{price}</span>
//                 <span className="text-xl text-gray-500">{period}</span>
//             </div>
//             <ul className="mb-12 space-y-6 text-left text-lg text-gray-500">
//                 {features.map((feature: any) => (
//                     <li key={feature.id} className="flex items-center space-x-4">
//                         <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
//                         </svg>
//                         <span>{feature}</span>
//                     </li>
//                 ))}
//             </ul>
//             <a href="javascript:;" className={`py-2.5 px-5 ${btnColor} shadow-sm rounded-full transition-all duration-500 text-base text-white font-semibold text-center w-fit mx-auto hover:bg-indigo-700`}>
//                 ՏԵՍՆԵԼ ԱՎԵԼԻՆ
//             </a>
//         </div>
//     );
// }

// export default PlanCard;






const PricingPlan = ({ plan }: any) => {
    return (
        <div className={`flex flex-col rounded-lg border p-4 pt-6 ${plan.highlight ? 'border-2 border-indigo-500 relative' : ''}`}>
            {plan.highlight && (
                <div className="absolute inset-x-0 -top-3 flex justify-center">
                    <span className="flex h-6 items-center justify-center rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">most popular</span>
                </div>
            )}
            <div className="mb-12">
                <h3 className="mb-2 text-center text-2xl font-bold text-gray-800">{plan.title}</h3>
                {/* <p className="mx-auto mb-8 px-8 text-center text-gray-500">{plan.description}</p> */}
                <div className="space-y-2 p-5">
                    {plan.features.map((feature: any, index: number) => (
                        <div key={index} className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-auto flex flex-col gap-8">
                <div className="flex items-end justify-center gap-1">
                    <span className="self-start text-gray-600">֏</span>
                    <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                   {plan.hatred && <span className="text-gray-500">{plan.hatred}</span>}
                </div>
                <a href={plan.link} className={`block rounded-lg ${plan.buttonClass} px-8 py-3 text-center text-sm font-semibold outline-none ring-indigo-300 transition duration-100 md:text-base`}>
                    {plan.buttonText}
                </a>
            </div>
        </div>
    );
}

export default PricingPlan;
