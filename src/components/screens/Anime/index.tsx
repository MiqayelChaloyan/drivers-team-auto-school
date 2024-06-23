'use client';

import ComponentCard from "./ComponentCard";

const components = [
    {
        id: 1,
        title: 'Կանանց և աղջիկների համար',
        description: 'Մենք ունենք կին հրահանգիչ այն կանանց և աղջիկների համար, ովքեր ցանկանում են սովորել հեշտությամբ և հարմարավետությամբ։',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Հաճախումների համակարգ',
        description: 'Փաթեթներն ունեն որակի ու գնի խելամիտ համադրություն։ Գործում է վճարման ճկուն համակարգ։',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Հարմարեցված ժամանակացույց',
        description: 'Drivers Team Auto School -ում ուսուցումը միաժամանակ և՛ հաճելի է, և՛ արդյունավետ։ Հաճախումների ժամանակացույցը հարմարեցվում է սովորողին։',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
    },
    {
        id: 4,
        title: 'Մատչելի և Հասկանալի Դասընթացներ',
        description: 'Մեր կրթական ծրագրերը մշակված են այնպես, որ դրանք հասկանալի լինեն բոլորի համար։ Անկախ ձեր վարորդական փորձից՝ մենք կտրամադրենք համապատասխան նյութեր և գործնական դասընթացներ՝ որպեսզի դուք հասնեք ձեր նպատակին։',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
    }
    // {
    //     title: "Simple & Clean Designs",
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet.",
        // icon: (
        //     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        //     </svg>
        // ),
    // },
];

const Anime = () => {
    return (
        <section className="px-50 bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                Ինչու՞ ընտրել <br/> Drivers Team Auto School ավտոդպրոցը
                {/* <br /><span className="underline decoration-blue-500"> Drivers Team Auto School</span> */}
                </h1>
                <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                Ընտրեք «Drivers Team Auto School» ավտոդպրոցը մի քանի <br /> հիմնական պատճառներով՝ ապահովելով որակյալ և անվտանգ կրթություն:
                </p>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                {components.map((component, index) => (
                        <ComponentCard
                            key={index} 
                            title={component.title} 
                            description={component.description} 
                            icon={component.icon} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Anime;
