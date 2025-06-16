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
            className="flex flex-col items-center p-4 justify-center md:mt-[200px]"
        >

            <div className="text-white mt-4 md:text-[2.5rem] text-[1.7rem] font-bold"> About us</div>
            <p className="text-center leading-loose mt-5 mb-10 text-white text-[1rem] md:max-w-[70%] md:w-[70%] w-full">
              
                COTTACHAIN is Solana’s trust layer, fighting $1.5B in Web3
                scams with portable reputation scores based on on-chain
                actions. Integrated with Solana’s SAS, we secure DeFi, NFTs,
                DAOs, and gaming. Backed by P2B Exchange and 200+
                pioneers, we’re building a safer Web3. Join us now!</p>

            <div id="howitworks-section"></div>
        </motion.div>
    )
}


export default About;