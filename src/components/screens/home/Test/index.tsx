'use client';

import { ImagePaths } from "@/constants";

const aboutUs = `
 «Drivers Team Auto School» ավտոդպրոցը Հայաստանում առաջատարներից է՝
                                    մասնագիտացված ավտովարման որակյալ և բարձրակարգ ուսուցում
                                    տրամադրելու ոլորտում: Ուսանելով ավտոդպրոցի հմուտ և
                                    գիտակ ուսուցիչների մոտ դուք նույնպես ձեռք կբերեք անվտանգ
                                    երթևեկության համար կարևորագույն ամփոփ և լիարժեք գիտելիքներ,
                                    ինչի շնորհիվ դասընթացի ավարտին ամենայն վստահությամբ կստանձնեք ղեկի կառավարումը:
                                    Եթե ​​դուք ցանկանում եք ավելին իմանալ «Drivers Team Auto School»-ի մասին, խնդրում եմ կապ հաստատել մեզ։`



export const Header = () => {
  return (
    <div className="relative">
      {/* <img
        src="https://us.123rf.com/450wm/flowertiare/flowertiare1907/flowertiare190700685/127969077-woman-is-driving-on-the-highway-under-the-bridge-view-from-the-back-seat-of-the-car.jpg?ver=6"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      /> */}
      <div className="bg-black absolute inset-0 object-cover w-full h-full" />
      <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 160"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-30">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                The quick, brown fox <br className="hidden md:block" />
                jumps over a lazy dog
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>
              <a
              href="/"
              aria-label="Scroll down"
              className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </a>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div>
                <div>
                  <div className="grid grid-cols-2 gap-2 mt-8 mb-3">
                    <img className="w-full rounded-lg" src={ImagePaths._2Url.default.src} alt="office content 1" />
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src={ImagePaths._3Url.default.src} alt="office content 2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Test = () => {
  return (
    // <section>
    //   <div className="bg-black text-white py-20">
    //     <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
    //       <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
    //         <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">TechFest</h1>
    //         <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Space : The Timeless Infinity
    //         </h2>
    //         <p className="text-sm md:text-base text-gray-50 mb-4">Explore your favourite events and
    //           register now to showcase your talent and win exciting prizes.</p>
    //         <a href="#"
    //           className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
    //           Explore Now</a>
    //       </div>
    //       <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
    //         <div className="h-48 flex flex-wrap content-center">
    //           <div>
    //             <img className="inline-block mt-28 hidden xl:block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png" /></div>
    //           <div>
    //             <img className="inline-block mt-24 md:mt-0 p-8 md:p-0" src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png" /></div>
    //           <div>
    //             <img className="inline-block mt-28 hidden lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png" /></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <Header />
  );

}

export default Test;
