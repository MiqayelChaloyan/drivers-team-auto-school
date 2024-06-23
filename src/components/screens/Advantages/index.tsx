'use client';

import AdvantageCard from "./AdvantageCard";


const advantages = [
    {
        title: "Հաճախումների համակարգ",
        description: 'Փաթեթներն ունեն որակի ու գնի խելամիտ համադրություն։ Գործում է վճարման ճկուն համակարգ։',
    },
    {
        title: 'Հարմարեցված ժամանակացույց',
        description: 'Ուսուցումը միաժամանակ և՛ հաճելի է, և՛ արդյունավետ։ Հաճախումների ժամանակացույցը հարմարեցվում է սովորողին։',
    },
    {
        title: 'Մատչելի Դասընթացներ',
        description: 'Գործնական և տեսական դասընթացները ընթանում են զուգահեռ (ցանկության դեպքում)։',
    },
    {
        title: "Կանանց և աղջիկների համար",
        description: 'Մենք ունենք կին հրահանգիչ այն կանանց և աղջիկների համար, ովքեր ցանկանում են սովորել հեշտությամբ և հարմարավետությամբ։',
    },
    {
        title: "Անհատական ​​մոտեցում",
        description: "Անհատական ​​մոտեցում. Ժամանակացույցի, մեքենայի, դասավանդողի և ուսումնառության վայրի ընտրություն։",
    },
    {
        title: 'Կրթական ծրագրեր',
        description: 'Անկախ ձեր վարորդական փորձից՝ մենք կտրամադրենք համապատասխան նյութեր և գործնական դասընթացներ՝ որպեսզի դուք հասնեք ձեր նպատակին։',
    },
];


const Features = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-10 md:mb-16">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                        Մեր մրցակցային առավելությունը
                    </h2>
                    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                        ԻՆՉՈՒ՞ ԸՆՏՐԵԼ DRIVERS TEAM AUTO SCHOOL ԱՎՏՈԴՊՐՈՑԸ
                    </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
                    {advantages.map((advantage, index) => (
                        <AdvantageCard key={index} title={advantage.title} description={advantage.description} />
                    ))}
                </div>
            </div>
        </div>
    );

}

export default Features;
