// 'use client'

// import { ImagePaths } from "@/constants";
// // import { TextGenerateEffect } from "@/lib/ui/TextField";
// import Image from "next/image";

// const aboutUs = `
//  «Drivers Team Auto School» ավտոդպրոցը Հայաստանում առաջատարներից է՝
//                                     մասնագիտացված ավտովարման որակյալ և բարձրակարգ ուսուցում
//                                     տրամադրելու ոլորտում: Ուսանելով ավտոդպրոցի հմուտ և
//                                     գիտակ ուսուցիչների մոտ դուք նույնպես ձեռք կբերեք անվտանգ
//                                     երթևեկության համար կարևորագույն ամփոփ և լիարժեք գիտելիքներ,
//                                     ինչի շնորհիվ դասընթացի ավարտին ամենայն վստահությամբ կստանձնեք ղեկի կառավարումը:
//                                     Եթե ​​դուք ցանկանում եք ավելին իմանալ «Drivers Team Auto School»-ի մասին, խնդրում եմ կապ հաստատել մեզ։`

// const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
// `;

// const AboutUs = () => {
//     return (
//         <section className="bg-white">
//         <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">

//             <div className="grid grid-cols-2 gap-4 mt-8 mb-5">
//                 <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
//                 <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
//             </div>
//             <div className="font-light text-gray-900 sm:text-lg text-gray-900">
//                 {/* <h2 className="mb-4 text-4xl tracking-tight font-extrabold">Մեր մասին</h2> */}
//                 <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-4xl font-extrabold">Մեր մասին</h2>

//                 <p className="text-gray-900 leading-relaxed font-light">{aboutUs}</p>
//                 {/* <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p> */}
//             </div>
//         </div>
//     </section>
//     )
// }

// export default AboutUs;










'use client'

import { ImagePaths } from "@/constants";
// import { TextGenerateEffect } from "@/lib/ui/TextField";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const aboutUs = `
 «Drivers Team Auto School» ավտոդպրոցը Հայաստանում առաջատարներից է՝
                                    մասնագիտացված ավտովարման որակյալ և բարձրակարգ ուսուցում
                                    տրամադրելու ոլորտում: Ուսանելով ավտոդպրոցի հմուտ և
                                    գիտակ ուսուցիչների մոտ դուք նույնպես ձեռք կբերեք անվտանգ
                                    երթևեկության համար կարևորագույն ամփոփ և լիարժեք գիտելիքներ,
                                    ինչի շնորհիվ դասընթացի ավարտին ամենայն վստահությամբ կստանձնեք ղեկի կառավարումը:
                                    Եթե ​​դուք ցանկանում եք ավելին իմանալ «Drivers Team Auto School»-ի մասին, խնդրում եմ կապ հաստատել մեզ։`

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

const AboutUs = () => {
    return (
        <div className="bg-white">


            <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">Drivers Team Auto School</p>
                            <TypeAnimation
                                sequence={[
                                    'Բարի գալուստ «Drivers Team Auto School» ավտոդպրոց',
                                    1000,
                                    'Վարիր անվտանգ  և  ստացիր վարորդական  իրավունք',
                                    1000,
                                    'Դու ես ընտրում քո գիծը',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                // className={cn(styles.text, ArianAMU.className)}
                                style={{ display: 'inline-block' }}
                                repeat={Infinity}
                            />
                            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-5xl xl:text-5xl mb-5">Միացեք և սովորեք փորձագետներից </h1>
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold">Մեր մասին</h2>
                            <p className="text-gray-900 leading-relaxed font-light">{aboutUs}</p>

                            <a href="/register" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                                Մուտք գործել
                                <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>

                            {/* <p className="mt-5 text-gray-600">Already joined us? <a href="#" title="" className="text-black transition-all duration-200 hover:underline">Log in</a></p> */}
                        </div>

                        <div>
                            <div className="grid grid-cols-2 gap-4 mt-8 mb-5">
                                <img className="w-full rounded-lg" src={ImagePaths._1Url.default.src} alt="office content 1" />
                                <img className="mt-4 w-full lg:mt-10 rounded-lg" src={ImagePaths._3Url.default.src} alt="office content 2" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default AboutUs;