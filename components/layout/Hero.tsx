'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
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
    const bgRef = useRef<HTMLDivElement>(null);

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]); // fades out on scroll

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
            className="relative w-full mt-[70px] md:mt-[200px] flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Background Image with Parallax Y Movement and Fade Out */}
            <motion.div
                ref={bgRef}
                style={{
                    y,
                    opacity,
                    backgroundImage: 'url(/assests/images/golds-bg.svg)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                className="absolute top-0 left-0 w-full h-full z-0"
            />

            {/* Content */}
            <div className="mt-24 relative z-10">
                <div className="flex justify-center items-center flex-col">
                    <p className='text-[4rem] md:text-[5.5rem] font-extrabold leading-tight text-white text-center'>
                        Solana Ultimate <br /> Trust Layer
                    </p>
                    <p className='text-white max-w-[80%] md:max-w-[100%] text-md md:text-lg text-center mt-[70px] shadow-4xl'>
                        Stop $1.5B in Web3 Scams with COTTA Scores <br />Join 200+ Pioneers to Secure DeFi, NFTs, DAOs, and Gamers!
                    </p>
                </div>

                <div className='mt-[70px] flex gap-5 justify-center items-center mb-10'>
                    <button
                        className='bg-[#F28C28] shadow-lg text-white h-auto py-4 px-10 rounded-[40px] md:rounded-[10px] transition-transform duration-200 hover:scale-105 hover:bg-yellow-700 text-[1.1rem] flex gap-4 items-center'
                        onClick={handleFeatureToast}
                    >
                        <Image src="/solana.png" alt='solana logo' height={30} width={30} className='rounded-full' />
                        Login with Solana
                    </button>
                </div>
            </div>

            {/* You can uncomment About section if needed */}
            {/* <About /> */}
            <ToastContainer />
        </motion.div>
    );
};

export default Hero;
