'use client';

import Feature from "./Feature";



const featuresData = [
    {
        title: "Հաճախումների համակարգ",
        description: 'Փաթեթներն ունեն որակի ու գնի խելամիտ համադրություն։ Գործում է վճարման ճկուն համակարգ։',
        iconPath: "M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z",
        borderClass: "border-b md:border-r",
    },
    {
        title: 'Հարմարեցված ժամանակացույց',
        description: 'Ուսուցումը միաժամանակ և՛ հաճելի է, և՛ արդյունավետ։ Հաճախումների ժամանակացույցը հարմարեցվում է սովորողին։',
        iconPath: "M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z",
        borderClass: "border-b lg:border-r",
    },
    {
        title: 'Մատչելի Դասընթացներ',
        description: 'Գործնական և տեսական դասընթացները ընթանում են զուգահեռ (ցանկության դեպքում)։',
        iconPath: "M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z",
        borderClass: "border-b",
    },
    {
        title: "Կանանց և աղջիկների համար",
        description: 'Մենք ունենք կին հրահանգիչ այն կանանց և աղջիկների համար, ովքեր ցանկանում են սովորել հեշտությամբ և հարմարավետությամբ։',
        iconPath: "M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z",
        borderClass: "md:border-r",
    },
    {
        title: "Անհատական ​​մոտեցում",
        description: "Անհատական ​​մոտեցում. Ժամանակացույցի, մեքենայի, դասավանդողի և ուսումնառության վայրի ընտրություն։",
        iconPath: "M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z",
        borderClass: "lg:border-r",
    },
    {
        title: 'Կրթական ծրագրեր',
        description: 'Անկախ ձեր վարորդական փորձից՝ մենք կտրամադրենք համապատասխան նյութեր և գործնական դասընթացներ՝ որպեսզի դուք հասնեք ձեր նպատակին։',
        iconPath: "M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z",
    },
];



const Features = () => {
    return (
        <div className="container p-6 px-6 mx-auto bg-white dark:bg-gray-800">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-base font-semibold tracking-wide text-indigo-600 mb-4 uppercase">
                    Ինչու՞ ընտրել Drivers Team Auto School ավտոդպրոցը
                </h2>
                <span className="flex items-center">
                    <span className="h-px flex-1 bg-black"></span>
                    <h2 className="shrink-0 px-6  mb-4 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">Մեր Առավելությունները</h2>
                    <span className="h-px flex-1 bg-black"></span>
                </span>
            </div>
            <div className="flex flex-wrap my-12 dark:text-white">
                {featuresData.map((feature, index) => (
                    <Feature
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        iconPath={feature.iconPath}
                        borderClass={feature.borderClass}
                    />
                ))}
            </div>
        </div>
    );

}

export default Features;
