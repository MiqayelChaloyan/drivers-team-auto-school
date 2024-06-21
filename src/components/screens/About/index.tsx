'use client'

const AboutUs = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mb-12">
                <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 mb-4"> Մեր Մասին</h2>
            </div>
            <div className="p-8 rounded shadow-xl sm:p-16">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                        <img
                            src="https://dummyimage.com/720x600/edf2f7/a5afbd"
                            alt="hero"
                            className="max-w-sm rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
                        // priority
                        // width={400}
                        // height={400}
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <p className="mb-4 text-base text-gray-700">
                            «Drivers Team Auto School» ավտոդպրոցը Հայաստանում առաջատարներից է՝
                            մասնագիտացված ավտովարման որակյալ և բարձրակարգ ուսուցում
                            տրամադրելու ոլորտում: Ուսանելով «Drivers Team Auto School» ավտոդպրոցի հմուտ և
                            գիտակ ուսուցիչների մոտ դուք նույնպես ձեռք կբերեք անվտանգ
                            երթևեկության համար կարևորագույն ամփոփ և լիարժեք գիտելիքներ,
                            ինչի շնորհիվ դասընթացի ավարտին ամենայն վստահությամբ կստանձնեք ղեկի կառավարումը:
                            Եթե ​​դուք ցանկանում եք ավելին իմանալ «Drivers Team Auto School»-ի մասին, խնդրում եմ կապ հաստատել մեզ։
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;