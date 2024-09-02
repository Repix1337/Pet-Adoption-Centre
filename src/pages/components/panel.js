import React from 'react';
import { motion, useInView } from 'framer-motion';

export function Panel({ children, headerText, classNamee }) {
    const ref = React.useRef(null);
    const isInView = useInView(ref);

    return (
        <motion.div
            ref={ref}
            className={`w-full bg-gray-900 ${classNamee}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView && {
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.4,
                    ease: 'easeIn'
                }
            }}
        >
            <motion.h1 className="flex justify-center text-8xl text-white p-5 mt-2 bg-gray-800">
                {headerText}
            </motion.h1>
            <div className="w-full bg-gray-900 flex flex-wrap justify-evenly overflow-y-auto overflow-x-hidden mt-2">
                {children}
            </div>
        </motion.div>
    );
}