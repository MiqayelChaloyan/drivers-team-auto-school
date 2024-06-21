'use client'

const steps = [
    {
        id: 1,
        title: 'Անհատական մոտեցում',
        description: 'Ուսուցման ընթացքում ցուցաբերվում է անհատական մոտեցում:',
    },
    {
        id: 2,
        title: 'Հաճախումների համակարգ',
        description: 'Փաթեթներն ունեն որակի ու գնի խելամիտ համադրություն։ Գործում է վճարման ճկուն համակարգ։',
    },
    {
        id: 3,
        title: 'Հարմարեցված ժամանակացույց',
        description: 'Drivers Team Auto School -ում ուսուցումը միաժամանակ և՛ հաճելի է, և՛ արդյունավետ։ Հաճախումների ժամանակացույցը հարմարեցվում է սովորողին։',
    },
    {
        id: 4,
        title: 'Մատչելի և Հասկանալի Դասընթացներ',
        description: 'Մեր կրթական ծրագրերը մշակված են այնպես, որ դրանք հասկանալի լինեն բոլորի համար: Անկախ ձեր վարորդական փորձից՝ մենք կտրամադրենք համապատասխան նյութեր և գործնական դասընթացներ՝ որպեսզի դուք հասնեք ձեր նպատակին:'
    }
];

const Feature = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col lg:flex-row">
                <div className="max-w-xl pr-16 mx-auto mb-10">
                    <h5 className="mb-6 text-3xl font-extrabold leading-none">
                        Ինչու՞ ընտրել «Drivers Team Auto School» ավտոդպրոցը
                    </h5>
                    <p className="mb-6 text-gray-900">
                        Ընտրեք «Drivers Team Auto School» ավտոդպրոցը մի քանի հիմնական պատճառներով՝ ապահովելով որակյալ և անվտանգ կրթություն:
                    </p>
                    <div className="flex items-center">
                        <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
                            Անցնել Թեստ
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </a>
                    </div>
                </div>
                <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
                    {steps.map((step, index) => (
                        <div key={step.id} className="max-w-md">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">{step.title}</h6>
                            <p className="text-sm text-gray-700">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feature;