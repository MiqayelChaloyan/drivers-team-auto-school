// 'use client'

// const steps = [
//     {
//         id: 1,
//         title: 'Կանանց և աղջիկների համար',
//         description: 'Մենք ունենք կին հրահանգիչ այն կանանց և աղջիկների համար, ովքեր ցանկանում են սովորել հեշտությամբ և հարմարավետությամբ։',
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
//     {
//         id: 4,
//         title: 'Մատչելի և Հասկանալի Դասընթացներ',
//         description: 'Մեր կրթական ծրագրերը մշակված են այնպես, որ դրանք հասկանալի լինեն բոլորի համար։ Անկախ ձեր վարորդական փորձից՝ մենք կտրամադրենք համապատասխան նյութեր և գործնական դասընթացներ՝ որպեսզի դուք հասնեք ձեր նպատակին։'
//     }
// ];

// const Feature = () => {
//     return (
//         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//             <div className="flex flex-col lg:flex-row">
//                 <div className="max-w-xl pr-16 mx-auto mb-10">
//                     <h5 className="mb-6 text-3xl font-extrabold leading-none">
//                         Ինչու՞ ընտրել «Drivers Team Auto School» ավտոդպրոցը
//                     </h5>
//                     <p className="mb-6 text-gray-900">
//                         Ընտրեք «Drivers Team Auto School» ավտոդպրոցը մի քանի հիմնական պատճառներով՝ ապահովելով որակյալ և անվտանգ կրթություն:
//                     </p>
//                     {/* <div className="flex items-center">
//                         <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
//                             Անցնել Թեստ
//                             <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
//                         </a>
//                     </div> */}
//                 </div>
//                 <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
//                     {steps.map((step, index) => (
//                         <div key={step.id} className="max-w-md">
//                             <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
//                                 <svg
//                                     className="w-12 h-12 text-deep-purple-accent-400"
//                                     stroke="currentColor"
//                                     viewBox="0 0 52 52"
//                                 >
//                                     <polygon
//                                         strokeWidth="3"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         fill="none"
//                                         points="29 13 14 29 25 29 23 39 38 23 27 23"
//                                     />
//                                 </svg>
//                             </div>
//                             <h6 className="mb-2 font-semibold leading-5">{step.title}</h6>
//                             <p className="text-sm text-gray-700">
//                                 {step.description}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Feature;



'use client'

const Feature = () => {
    return (


<div className="container p-6 px-6 mx-auto bg-white dark:bg-gray-800">
    <div className="mb-16 text-center">
        <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            Features
        </h2>
        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            A better way to live
        </p>
    </div>
    <div className="flex flex-wrap my-12 dark:text-white">
        <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
            <div className="flex items-center mb-6">
                <svg width="20" height="20" fill="currentColor" className="w-6 h-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                </svg>
                <div className="ml-4 text-xl">
                    Increase sales
                </div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                Receive more sales by selling across multple sales channels instead of just having a single point of entry.
            </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
            <div className="flex items-center mb-6">
                <svg width="20" height="20" fill="currentColor" className="w-6 h-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                </svg>
                <div className="ml-4 text-xl">
                    Overlays
                </div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                Apply beautiful overlays to every product image distributed through our platform. A visual touch.
            </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0">
            <div className="flex items-center mb-6">
                <svg width="20" height="20" fill="currentColor" className="w-6 h-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                </svg>
                <div className="ml-4 text-xl">
                    Control
                </div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                Apply filters and control which products to sell on each sales channel. E.g. exclude products with low margins.
            </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0">
            <div className="flex items-center mb-6">
                <svg width="20" height="20" fill="currentColor" className="w-6 h-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                </svg>
                <div className="ml-4 text-xl">
                    Mapping
                </div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                Map product categories with each sales channels&#x27; own categories and achieve better results and lower costs.
            </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0">
            <div className="flex items-center mb-6">
                <svg width="20" height="20" fill="currentColor" className="w-6 h-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                </svg>
                <div className="ml-4 text-xl">
                    Fill the missing
                </div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                Modify products with extra properties and achieve the maximum output for each installed sales channel.
            </p>
        </div>
        <div className="w-full p-8 md:w-1/2 lg:w-1/3">
            <div className="flex items-center mb-6">
                <svg width="20" height="20" fill="currentColor" className="w-6 h-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                </svg>
                <div className="ml-4 text-xl">
                    Dynamic Texts
                </div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                Build unique product titles and descriptions instead of spending days manually editing each product.
            </p>
        </div>
    </div>
</div>


    )
}

export default Feature;