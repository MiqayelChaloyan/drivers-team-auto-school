'use client'

const ComponentCard = ({ title, description, icon }: any) => (
    <div className="space-y-3">
        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
            {icon}
        </span>
        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">{title}</h1>
        <p className="text-gray-500 dark:text-gray-300">{description}</p>
        {/* <a href="#" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
            <span className="mx-1">read more</span>
            <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20">
                <path
                    fillRule="evenodd"
                    d="M12.293 9.293a1 1 0 011.414 0L17 12.586a1 1 0 010 1.414l-3.293 3.293a1 1 0 01-1.414-1.414L13.586 14H7a1 1 0 110-2h6.586l-1.293-1.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                />
            </svg>
        </a> */}
    </div>
);


export default ComponentCard;