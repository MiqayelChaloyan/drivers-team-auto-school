// 'use client';

// const steps = [
//     {
//         id: 1,
//         title: 'Անհատական մոտեցում',
//         description: 'Ուսուցման ընթացքում ցուցաբերվում է անհատական մոտեցում:',
//     },
//     {
//         id: 2,
//         title: 'Հաճախումների համակարգ',
//         description: 'Փաթեթներն ունեն որակի ու գնի խելամիտ համադրություն։ Գործում է վճարման ճկուն համակարգ։',
//     },
//     {
//         id: 3,
//         title: 'Հարմարեցված ժամանակացույց',
//         description: 'Drivers Team Auto School -ում ուսուցումը միաժամանակ և՛ հաճելի է, և՛ արդյունավետ։ Հաճախումների ժամանակացույցը հարմարեցվում է սովորողին։',
//     },
// ];

// const OurClasses = () => {
//     return (
//         <section className="py-24">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//                 <div className="mb-12 text-center">
//                     <h2 className="font-manrope text-5xl font-bold text-gray-900 mb-4">
//                         Գիտելիքը և փորձը տալիս են ազատություն։
//                     </h2>
//                     <p className="text-gray-500 leading-6 mb-9">
//                         Ինչու՞ ընտրել «Drivers Team Auto School» ավտոդպրոցը
//                     </p>
//                 </div>
//             </div>
//             <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//                 <div className="grid max-w-2xl mx-auto">
//                     {steps.map((step, index) => (
//                         <div className="flex" key={step.id}>
//                             <div className="flex flex-col items-center mr-6">
//                                 <div className={`w-px h-10 ${index === 0 ? 'opacity-0' : 'bg-gray-300'} sm:h-full`} />
//                                 <div>
//                                     <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
//                                         {step.id}
//                                     </div>
//                                 </div>
//                                 <div className={`w-px ${index === steps.length - 1 ? 'opacity-0' : 'h-full bg-gray-300'}`} />
//                             </div>
//                             <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
//                                 <div className="sm:mr-5">
//                                     <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
//                                         <svg
//                                             className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
//                                             stroke="currentColor"
//                                             viewBox="0 0 52 52"
//                                         >
//                                             <polygon
//                                                 strokeWidth="3"
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 fill="none"
//                                                 points="29 13 14 29 25 29 23 39 38 23 27 23"
//                                             />
//                                         </svg>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <p className="text-xl font-semibold sm:text-base">{step.title}</p>
//                                     <p className="text-sm text-gray-700">{step.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default OurClasses;
