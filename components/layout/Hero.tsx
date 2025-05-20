'use client'
import React from 'react';
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const useScrollFade = () => {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
                } else {
                    controls.start({ opacity: 0, y: 40, transition: { duration: 0.8 } });
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(element);
        return () => observer.unobserve(element);
    }, [controls]);
    return { ref, controls };
};

const Hero = () => {
    const fade = useScrollFade();
    return (
        <motion.div
            ref={fade.ref}
            animate={fade.controls}
            initial={{ opacity: 0, y: 40 }}
            style={{ paddingTop: '90px' }}
            className='relative flex items-center justify-center px-14'>

            {/* Net pattern overlay */}
            {/* <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(#d1d5db_1px,transparent_1px),linear-gradient(to_right,#d1d5db_1px,#fff_1px)] bg-[size:20px_20px] opacity-10" /> */}
            <div>
                <div className="flex justify-start items-start flex-col relative z-10">
                    <p className='text-[2.5rem] mt-20 font-bold leading-tight text-white text-left'>Redefining Digital Trust with a Portable, Decentralized Reputation System</p>
                    <p className='text-gray-300 max-w-[85%] text-lg text-left mt-7'>COTTACHAIN is the future of online reputation secure, verifiable, and truly yours.</p>
                </div>

                <div className='mt-7 flex gap-5 relative z-10 mb-10'>
                    <button className='bg-blue-800 text-[0.9rem] shadow-lg text-white h-auto w-auto py-4 min-w-[250px] px-10 rounded-[10px] transition-transform duration-200 hover:scale-105 hover:bg-blue-900'>Login with Solana</button>
                    {/* <button id="about-section" className='text-[#452B1F] text-sm shadow-lg bg-yellow-500 h-auto text-[1.1rem] w-auto py-4 px-10 rounded-[40px] transition-transform duration-200 hover:scale-105 hover:bg-yellow-400'>Explore whitepaper</button> */}
                </div>
            </div>

            <Image src='/sideimage.png' alt='chainimage' className='mt-10 transition-transform duration-200 hover:scale-105' height={450} width={450} />


        </motion.div>
    )
}

export default Hero;