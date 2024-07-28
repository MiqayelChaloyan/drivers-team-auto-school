'use client';

const TypesOfTraining = () => {
    const trainingData = [
        {
            id: 1,
            title: "Քննական թեստեր",
            description: "Անվճար թեստերի օգնությամբ դուք կարող եք սովորել քննական հարցաշարերը։",
        },
        {
            id: 2,
            title: "Պրակտիկ դասեր",
            description: "Մեր հրահանգիչները կսովորեցնեն Ձեզ մեքենա վարել, կայանել և կամրապնդեն Ձեր տեսական գիտելիքները։",
        }
    ];

    return (
        <section className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <h2 className="flex flex-row flex-nowrap items-center mt-24">
                        <span className="flex-grow block border-t border-black"></span>
                        <span className="relative inline-block">
                            <span className="relative mx-4 px-4 py-2.5">Ուսուցման տեսակներ</span>
                        </span>
                        <span className="flex-grow block border-t border-black"></span>
                    </h2>
                </div>
            </div>
            <div className="grid md:grid-cols-2 max-w-screen-lg mx-auto gap-10 mt-16 px-5">
                {trainingData.map((item) => (
                    <div key={item.id} className="flex gap-4 items-start flex-col">
                        {/* <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">{item.id}</span> */}
                        <div>
                            <h3 className="font-semibold text-xl">{item.title}</h3>
                            <p className="mt-1 text-gray-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TypesOfTraining;
