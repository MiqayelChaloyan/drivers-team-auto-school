'use client'

import Container from "@/components/components/Container";
import { ImagePaths } from "@/constants";
import Image from "next/image";


const Header = () => {
    return (
        <section className="text-gray-700 body-font">
            <Container>
                <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                            <br className="hidden lg:inline-block" />readymade gluten
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Մենք տրամադրում ենք աջակցություն և խորհրդատվություն վերջին թեստերի ժամանակ՝ <br/>
                            ապահովելով, որ դուք հաջողությամբ անցնեք բոլոր պահանջվող քննությունները:
                        </p>
                        <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                            <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
                                Անցնել Թեստ
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                            <a href="#_" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                                Իմացեք ավելին
                            </a>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            src="https://dummyimage.com/720x600/edf2f7/a5afbd"
                            // className="object-cover object-center rounded"
                            alt="hero"
                            className="max-w-sm rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
                        // priority
                        // width={400}
                        // height={400}
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Header;