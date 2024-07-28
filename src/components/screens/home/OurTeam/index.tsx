'use client';

const teamMembers = [
    // {
    //     name: "Joe Antonio",
    //     role: "Founder CEO",
    //     imgSrc: "https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png",
    // },
    {
        name: "Կին հրահանգիչ",
        // role: "Marketing",
        imgSrc: "https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png",
    },
];

const TeamMember = ({ member }: any) => (
    <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
        <div className="relative overflow-hidden mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
            <div className="relative overflow-hidden px-6">
                <img src={member.imgSrc} className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt={`${member.name} image`} />
            </div>
            <div className="pt-6 text-center">
                <p className="text-lg leading-normal font-bold mb-1">{member.name}</p>
                {/* <p className="text-gray-500 leading-relaxed font-light">{member.role}</p> */}
            </div>
        </div>
    </div>
);

const OurTeam = () => {
    return (
        <div id="team" className="section pt-20 pb-8 md:pt-16">
            <div className="container xl:max-w-6xl mx-auto px-4">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <h2 className="flex flex-row flex-nowrap items-center mt-24">
                            <span className="flex-grow block border-t border-black"></span>
                            <span className="relative inline-block">
                                <span className="relative mx-4 px-4 py-2.5">Մեր հրահանգիչները</span>
                            </span>
                            <span className="flex-grow block border-t border-black"></span>
                        </h2>
                    </div>
                    <p className="text-base text-gray-700 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                </div>
                <div className="flex flex-wrap flex-row -mx-4 justify-center">
                    {teamMembers.map((member, index) => (
                        <TeamMember key={index} member={member} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
