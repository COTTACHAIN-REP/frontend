'use client'
import React from "react";
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

const About = () => {
    const fade = useScrollFade();
    return (
        <motion.div
            
            ref={fade.ref}
            animate={fade.controls}
            initial={{ opacity: 0, y: 40 }}
            className="flex flex-col items-center justify-center mt-10"
        >
            <div className="bg-slate-800 p-3 h-auto w-auto rounded-[40px] text-white mt-4"> About us</div>
            <p className="text-center leading-loose mt-5 mb-10 text-white text-[1.4rem] max-w-[70%]">COTTACHAIN is a decentralized reputation protocol built on Solana. We make your trust score portable, verifiable, and private powered by on-chain data, zero-knowledge proofs, and decentralized identity. From DeFi to DAOs and beyond, your reputation goes where you <span id="howitworks-section"> go.</span></p>
        </motion.div>
    )
}


export default About;