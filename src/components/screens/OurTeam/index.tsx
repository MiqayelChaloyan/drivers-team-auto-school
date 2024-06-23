
// 'use client'

// const OurTeam = () => {
//     return (
//         <section className="bg-white dark:bg-gray-900">
//             <div className="container px-6 py-10 mx-auto">
//                 <div className="xl:flex xl:items-center xL:-mx-4">
//                     <div className="xl:w-1/2 xl:mx-4">
//                         <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Our Team</h1>

//                         <p className="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
//                         <div>
//                             <img className="object-cover rounded-xl aspect-square" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>

//                                 <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">John Doe</h1>

//                                 <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Full stack developer</p>
//                         </div>

//                         <div>
//                             <img className="object-cover rounded-xl aspect-square" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

//                                 <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Mia</h1>

//                                 <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Graphic Designer</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }


// export default OurTeam;




'use client'


export default () => {

    const team = [
        {
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Martiana dialan",
            title: "Product designer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Micheal colorand",
            title: "Software engineer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Brown Luis",
            title: "Full stack engineer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        // {
        //     avatar: "https://randomuser.me/api/portraits/women/63.jpg",
        //     name: "Lysa sandiago",
        //     title: "Head of designers",
        //     desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
        //     linkedin: "javascript:void(0)",
        //     twitter: "javascript:void(0)",
        // },
        // {
        //     avatar: "https://randomuser.me/api/portraits/men/86.jpg",
        //     name: "Daniel martin",
        //     title: "Product designer",
        //     desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
        //     linkedin: "javascript:void(0)",
        //     twitter: "javascript:void(0)",
        // },
        // {
        //     avatar: "https://randomuser.me/api/portraits/men/46.jpg",
        //     name: "Vicky tanson",
        //     title: "Product manager",
        //     desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
        //     linkedin: "javascript:void(0)",
        //     twitter: "javascript:void(0)",
        // },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                <div className="max-w-xl mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Meet our team
                    </h3>
                    <p className="text-gray-600 mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-24 h-24 mx-auto">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full rounded-full"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                        <p className="text-gray-600 mt-2">{item.desc}</p>
                                        {/* <div className="mt-4 flex justify-center gap-4 text-gray-400">
                                            <a href={item.twitter}>
                                                <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="currentColor" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                            </a>
                                            <a href={item.linkedin}>
                                                <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                            </a>
                                        </div> */}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>



    )
}