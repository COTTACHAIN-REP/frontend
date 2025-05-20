'use client'
import React from "react";
import { Icon } from '@iconify/react';
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

const HowItWorks = () => {
    const fade = useScrollFade();
    return (
        <motion.div
        
            ref={fade.ref}
            animate={fade.controls}
            initial={{ opacity: 0, y: 40 }}
            className="flex flex-col items-center justify-center mt-10"
        >
            <div className="bg-slate-800 p-3 h-auto w-auto rounded-[40px] text-white mt-4"> How Cottachain Works</div>
            <div className="bg-white w-[700px] p-5 h-auto rounded-xl mt-7">
                <div className="flex flex-col items-start justify-start gap-2">
                    <div className="flex items-center text-[1.1rem] font-bold justify-start gap-5">
                        <Icon icon="token-branded:solana" width="34" height="34" />
                        <p>Blockchain Foundation</p>
                    </div>
                    <p className="text-[0.9rem]">COTTACHAIN is built on Solana for scalability and speed.</p>
                </div>
                <div className="flex mt-7 flex-col items-start justify-start gap-2">
                    <div className="flex items-center text-[1.1rem] font-bold justify-start gap-5">
                        <Icon icon="material-icon-theme:folder-contract" width="34" height="34" />
                        <p>Smart Contract</p>
                    </div>
                    <p className="text-[0.9rem]">Smart contracts handle reputation scoring, storage, and verification.</p>
                </div>
                <div className="flex mt-7 flex-col items-start justify-start gap-2">
                    <div className="flex text-[1.1rem] font-bold items-center justify-start gap-5">
                        <Icon className="text-purple-500" icon="material-symbols:identity-platform-rounded" width="34" height="34" />
                        <p>Decentralized Identity (DID)</p>
                    </div>
                    <p className="text-[0.9rem]">Users control their digital identity using W3C-compliant DID standards.</p>
                </div>
                <div className="flex mt-7 flex-col items-start justify-start gap-2">
                    <div className="flex text-[1.1rem] font-bold items-center justify-start gap-5">
                        <Icon icon="carbon:ibm-cloud-hyper-protect-crypto-services" width="34" height="34" className="text-red-600" />
                        <p>Cryptographic Proofs</p>
                    </div>
                    <p className="text-[0.9rem]">Uses zk-SNARKs/zk-STARKs to verify user actions without exposing sensitive data.</p>
                </div>
                <div className="flex mt-7 flex-col items-start justify-start gap-2">
                    <div className="flex text-[1.1rem] font-bold items-center justify-start gap-5">
                        <Icon icon="game-icons:dial-padlock" width="34" height="34" className="text-green-600" />
                        <p>Anti-Fraud Mechanisms</p>
                    </div>
                    <p className="text-[0.9rem]">Sybil resistance (e.g., staking, proof of humanity) to prevent fake users.</p>
                </div>
            </div>
        </motion.div>
    )
}


export default HowItWorks;