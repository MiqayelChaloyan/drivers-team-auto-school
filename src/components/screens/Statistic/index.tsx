'use client'
import React, { useEffect, useState } from 'react';

const stats = [
  { label: 'Շրջանավարտ', count: 150, suffix: '+' },
  { label: 'Դասընթացավար', count: 5, suffix: '+' },
  { label: 'Մեքենա', count: 5, suffix: '+' },
  { label: 'Տարի ոլորտում', count: 3, suffix: '+' },
];

interface StatsCounterProps {
  target: number;
  suffix: string;
}

// const StatsCounter: React.FC<StatsCounterProps> = ({ target, suffix }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const duration = target / 100; 
//     const increment = Math.ceil(target / (duration / 10));

//     const interval = setInterval(() => {
//       setCount(prevCount => {
//         if (prevCount >= target) {
//           clearInterval(interval);
//           return target;
//         }
//         return prevCount + increment;
//       });
//     }, 7000);

//     return () => clearInterval(interval);
//   }, [target]);

//   return (
//      <dd className="order-first text-3xl font-semibold tracking-tight text-white">{count}{suffix}</dd>
//   );
// };

const Statistic: React.FC = () => {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Մեր մրցակցային առավելությունները</h2>
            {/* <p className="text-lg leading-8 text-gray-300">
              We can help you grow your audience and your business, no matter the size.
            </p> */}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.label}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.count}{stat.suffix}</dd>
                {/* <StatsCounter target={stat.count} suffix={stat.suffix} /> */}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Statistic;