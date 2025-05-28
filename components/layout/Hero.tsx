'use client'
import React from 'react';
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import About from '@/components/sections/About';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const handleFeatureToast = () => {
        toast.info('Feature is being implemented', {
            position: 'top-center',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        });
    };
    return (

        <motion.div
            ref={fade.ref}
            animate={fade.controls}
            initial={{ opacity: 0, y: 40 }}
            style={{ backgroundImage: 'url(/assests/images/cottachainbg.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
            className='relative pt-10 md:pt-[90px] flex-col flex items-center justify-center '>
            <div className='flex-col flex md:flex-row relative justify-center items-center md:pl-14 p-5'>

                {/* Net pattern overlay */}
                {/* <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(#d1d5db_1px,transparent_1px),linear-gradient(to_right,#d1d5db_1px,#fff_1px)] bg-[size:20px_20px] opacity-10" /> */}
                <div>
                    <div className="flex justify-start items-start flex-col relative z-10">
                        <p className='text-[2rem] md:text-[2.5rem] mt-20 font-bold leading-tight text-white text-left leading-loose'>Redefining Digital Trust with a Portable, Decentralized Reputation System</p>
                        <p className='text-gray-300 max-w-[85%] text-md md:text-lg text-left mt-7'>COTTACHAIN is the future of online
                            reputation secure, verifiable,
                            and truly yours. Your trust score follows you across DeFi,
                            DAOS, e-commerce and social media.</p>
                    </div>

                    <div className='mt-7 flex gap-5 relative z-10 mb-10'>
                        <button
                            className='md:bg-[#B68524] text-[1rem] shadow-lg text-white h-auto w-auto py-4 md:w-[260px] w-auto px-10 rounded-[40px] md:rounded-[10px] transition-transform duration-200 hover:scale-105 hover:bg-yellow-700 md:border-none border border-white text-[0.8rem] flex gap-4 items-center'
                            onClick={handleFeatureToast}
                        >
                            <Image src="/solana.png" alt='solana logo' height={30} width={30} className='rounded-full' />
                            Login with Solana
                        </button>
                        {/* <button id="about-section" className='text-[#452B1F] text-sm shadow-lg bg-yellow-500 h-auto text-[1.1rem] w-auto py-4 px-10 rounded-[40px] transition-transform duration-200 hover:scale-105 hover:bg-yellow-400'>Explore whitepaper</button> */}
                    </div>
                </div>

                <Image src='/Hero1.svg' alt='chainimage' className='mt-10 transition-transform duration-200 hover:scale-105 w-full h-auto md:h-[70%] md:w-[50%]' height={1000} width={1000} />

            </div>
            <About />
            <ToastContainer />


        </motion.div>


    )
}

export default Hero;