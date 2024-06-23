'use client';

const Feature = ({ title, description, iconPath, borderClass}: any) => {
    return (
        <div className={`w-full p-8 ${borderClass} lg:w-1/3`}>
            <div className="flex items-center mb-6">
                <svg width="20" height="20" fill="currentColor" className="w-6 h-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d={iconPath}></path>
                </svg>
                <div className="ml-4 text-xl">
                    {title}
                </div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                {description}
            </p>
        </div>
    );
}


export default Feature;