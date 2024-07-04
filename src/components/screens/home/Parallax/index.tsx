// import Container from "@/components/components/Container";
'use client'

import { ImagePaths } from "@/constants";


const Parallax = () => {

    return (
       <section className="mt-20 pt-40 pb-32 relative">
            <div className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity-120 bg-fixed bg-gray-700 bg-blend-multiply" style={{ backgroundImage: `url(${ImagePaths.imageFullUrl.default.src})` }}></div>
            <h2 className="p-5 text-3xl font-bold tracking-tight text-white sm:text-4xl relative  text-center">Գրագետ Ավտովարման Քո Գրավականը</h2>
            <h2 className="text-white display-2 text-center relative">Գրանցվե՛ք հիմա:</h2>
        </section>
    )
};

export default Parallax;




// 'use client'

// import { ImagePaths } from "@/constants";
// import { motion, useScroll, useTransform } from "framer-motion";
// import React, { useRef } from "react";

// export default function MultiLayerParallax() {
//     const ref = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ["start start", "end start"],
//     });

//     const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
//     const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

//     return (
//         <div
//             ref={ref}
//             className="w-full h-screen overflow-hidden relative grid place-items-center"
//         >
//             <motion.h1
//                 style={{ y: textY }}
//                 className="font-bold text-white text-7xl md:text-9xl relative z-10"
//             >
//                 PARALLAX
//             </motion.h1>

//             <motion.div
//                 className="absolute inset-0 z-0"
//                 style={{
//                     backgroundImage: `url(https://cdn.pixabay.com/photo/2016/11/29/05/55/asphalt-1867667_1280.jpg`,
//                     backgroundPosition: "bottom",
//                     backgroundSize: "cover",
//                     y: backgroundY,
//                 }}
//             />

//             <div
//                 className="absolute inset-0 z-20"
//                 style={{
//                     backgroundImage: `url(${ImagePaths.imageBottomUrl.default.src}`,
//                     backgroundPosition: "center",
//                     backgroundSize: "contain",
//                 }}
//             />
//         </div>
//     );
// }
