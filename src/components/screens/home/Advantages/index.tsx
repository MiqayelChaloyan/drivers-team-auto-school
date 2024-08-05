'use client'
import './style.css'
import { MdAutoAwesome } from "react-icons/md";

const Advantages = () => {

  const advantages = [
    {
        title: "Հաճախումների համակարգ",
        content: 'Փաթեթներն ունեն որակի ու գնի խելամիտ համադրություն։ Գործում է վճարման ճկուն համակարգ։',
    },
    {
        title: 'Հարմարեցված ժամանակացույց',
        content: 'Ուսուցումը միաժամանակ և՛ հաճելի է, և՛ արդյունավետ։ Հաճախումների ժամանակացույցը հարմարեցվում է սովորողին։',
    },
    {
        title: 'Մատչելի Դասընթացներ',
        content: 'Գործնական և տեսական դասընթացները ընթանում են զուգահեռ (ցանկության դեպքում)։',
    },
    {
        title: "Կանանց և աղջիկների համար",
        content: 'Մենք ունենք կին հրահանգիչ այն կանանց և աղջիկների համար, ովքեր ցանկանում են սովորել հեշտությամբ և հարմարավետությամբ։',
    },
    {
        title: "Անհատական ​​մոտեցում",
        content: "Անհատական ​​մոտեցում. Ժամանակացույցի, մեքենայի, դասավանդողի և ուսումնառության վայրի ընտրություն։",
    },
    {
        title: 'Կրթական ծրագրեր',
        content: 'Անկախ ձեր վարորդական փորձից՝ մենք կտրամադրենք համապատասխան նյութեր և գործնական դասընթացներ՝ որպեսզի դուք հասնեք ձեր նպատակին։',
    },
];

  return (
    <section className="bg-black text-white">
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-6 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {advantages.map((section, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <MdAutoAwesome/>
              </span>
  
              <div>
                <h2 className="text-lg font-bold">{section.title}</h2>
  
                <p className="mt-1 text-sm text-gray-300">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
