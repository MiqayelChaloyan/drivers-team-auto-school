'use client'

import { ImagePaths } from "@/constants";
// import { TextGenerateEffect } from "@/lib/ui/TextField";
import Image from "next/image";

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
        <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Մեր մասին</h2>
                <p className="mb-4">{aboutUs}</p>
                {/* <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p> */}
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
            </div>
        </div>
    </section>
    )
}

export default AboutUs;