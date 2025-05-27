'use client'
import React from 'react';
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import About from '@/components/sections/About';
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
            style={{ paddingTop: '90px', backgroundImage: 'url(/assests/images/cottachainbg.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
            className='relative flex-col flex items-center justify-center '>
            <div className='flex relative justify-center items-center pl-14'>

                {/* Net pattern overlay */}
                {/* <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(#d1d5db_1px,transparent_1px),linear-gradient(to_right,#d1d5db_1px,#fff_1px)] bg-[size:20px_20px] opacity-10" /> */}
                <div>
                    <div className="flex justify-start items-start flex-col relative z-10">
                        <p className='text-[2rem] mt-20 font-bold leading-tight text-white text-left'>Redefining Digital Trust with a Portable, Decentralized Reputation System</p>
                        <p className='text-gray-300 max-w-[85%] text-lg text-left mt-7'>COTTACHAIN is the future of online
                            reputation secure, verifiable,
                            and truly yours. Yours trust score follows you across DeFi,
                            DAOS, e-commerce and social media.</p>
                    </div>

                    <div className='mt-7 flex gap-5 relative z-10 mb-10'>
                        <button className='bg-[#B68524] text-[1rem] shadow-lg text-white h-auto w-auto py-4 min-w-[250px] px-10 rounded-[10px] transition-transform duration-200 hover:scale-105 hover:bg-blue-900'>Login with Solana</button>
                        {/* <button id="about-section" className='text-[#452B1F] text-sm shadow-lg bg-yellow-500 h-auto text-[1.1rem] w-auto py-4 px-10 rounded-[40px] transition-transform duration-200 hover:scale-105 hover:bg-yellow-400'>Explore whitepaper</button> */}
                    </div>
                </div>

                <Image src='/Hero1.svg' alt='chainimage' className='mt-10 transition-transform duration-200 hover:scale-105 h-[70%] w-[50%]' height={1000} width={1000} />

            </div>
            <About />


        </motion.div>


    )
}

export default Hero;