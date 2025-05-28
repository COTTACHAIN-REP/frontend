'use client'
import React from "react";
import { Icon } from '@iconify/react';

import { useState } from 'react';
import Image from "next/image";

const WhyCottachain = () => {

    const trustFeatures = [
        {
            img: "/Frame20.jpg",
            alt: "Trustless operation",
            title: "Trustless operation",
            desc: "COTTACHAIN ensures that reputation scoring is fully automated and verifiable, without relying on centralized intermediaries. Every reputation score is calculated transparently through smart contracts on Solana—ensuring integrity, fairness, and zero manipulation."
        },
        {
            img: "/Frame20.svg",
            alt: "Privacy by design",
            title: "Self Sovereignity",
            desc: "Users fully own and control their reputation data through decentralized identity (DID). This means you decide what to share, where to share it, and how it's used no more platform lock-in or data exploitation."
        },
        {
            img: "/Frame1.svg",
            alt: "Sybil resistance",
            title: "Diverse Data spectrum",
            desc: "Reputation scores are derived from a broad set of on-chain actions governance, dApp usage, transactions, credentials, and more. This multi-source approach creates a richer, more accurate profile of trust."
        },
        {
            img: "/Frame22.svg",
            alt: "Portability",
            title: "Developer Centric integration",
            desc: "Designed with modularity in mind, COTTACHAIN offers developers simple tools and APIs to integrate reputation into dApps, wallets, or platforms without compromising speed, privacy, or user experience."
        },
        {
            img: "/Frame23.svg",
            alt: "Transparency",
            title: "Custom Algorithms",
            desc: "COTTACHAIN supports customizable scoring models that adapt to different ecosystems. Whether it's a DAO, freelance marketplace, or social platform, algorithms can be tailored to reflect the values and actions that matter most."
        },
        {
            img: "/Frame24.svg",
            alt: "Instant verification",
            title: "Flexible Reporting",
            desc: "Our system allows stakeholders to generate meaningful reputation insights in real time. Whether you're hiring a freelancer or verifying a seller, you get access to tamper-proof, privacy-preserving reports you can trust."
        },
    ];

    const steps = [
        {
            icon: <Icon icon="carbon:blockchain" width="65" height="65" />,
            title: 'Track On-Chain Activity',
            desc: 'COTTACHAIN captures your actions across dApps, protocols, and DAOs  including transactions, votes, and verifications.'
        },
        {
            icon: <Icon icon="mdi:account-lock" width="65" height="65" />,
            title: 'Verify Identity via DID',
            desc: 'Your activity is securely linked to a W3C-compliant Decentralized Identity (DID) that you control.'
        },
        {
            icon: <Icon icon="tabler:shield-lock" width="65" height="65" className="text-purple-500" />,
            title: 'Validate with Cryptographic Proofs',
            desc: 'Zero-knowledge proofs and digital signatures verify your actions without revealing private information.'
        },
        {
            icon: <Icon icon="material-symbols:function" width="65" height="65" className="text-red-600" />,
            title: 'Score via Smart Algorithms',
            desc: 'Reputation is calculated through smart contracts using customizable scoring logic based on context and ecosystem.'
        },
        {
            icon: <Icon icon="mdi:chart-line" width="65" height="65" className="text-green-600" />,
            title: 'Update & Store Score On-Chain',
            desc: 'Your final score is stored securely on-chain portable, tamper-proof, and usable across apps and platforms.'
        },
    ];

    const [current, setCurrent] = useState(0);
    const nextStep = () => setCurrent((prev) => (prev + 1) % steps.length);
    const prevStep = () => setCurrent((prev) => (prev - 1 + steps.length) % steps.length);

    return (
        <div className="flex flex-col items-center p-2 md:p-3 justify-center mt-10 w-full">
            
            <div className="text-white mt-4 text-[1.7rem] md:text-[2.5rem] font-bold text-center w-full"> Why Cottachain</div>
            <p className="text-center w-full text-gray-200 leading-loose mt-5 mb-10 text-[0.95rem] md:text-[1rem] md:w-[70%] mb-[60px]">Reputation shouldn’t be locked in platforms or prone to manipulation. COTTACHAIN makes it portable, secure, and verifiable powered by blockchain, decentralized identity, and zero-knowledge proofs. Whether you are in DeFi, DAOs, or online marketplaces, your trust score moves with you private, tamper-proof, and yours to control.</p>

            <div className="w-full flex justify-center items-center">
                <Image src="/Frame37.svg" alt="image" className="w-full max-w-[400px] md:max-w-[80%] h-auto" height={1000} width={1000}/>
            </div>
            <div id="how-cottachain"></div>

            <div  className="text-white my-20 md:my-7 md:mt-[180px] text-[1.7rem] md:text-[2.5rem] max-w-full md:max-w-[70%] font-bold text-center"> How Cottachain Delivers Trust Through Reputation Score</div>

            <div className="relative mt-10 md:mt-[150px] w-full flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-24 md:gap-5 md:gap-y-24 w-[80%]">
                    {trustFeatures.map((item, idx) => (
                        <div key={idx} className="bg-gradient-to-r relative h-[320px] w-full max-w-[340px] md:h-[290px] md:w-[290px] from-orange-500 to-blue-200 p-[1px] rounded-[10px] mx-auto">
                            <div className="h-full rounded-[10px] p-2 w-full bg-gradient-to-b from-gray-800 to-gray-700 flex justify-center items-center flex-col">
                                <div className="absolute -top-[15%] left-1/2 transform -translate-x-1/2">
                                    <Image
                                        src={item.img}
                                        alt={item.alt}
                                        className="object-cover rounded-full"
                                        width={90}
                                        height={90}
                                    />
                                </div>
                                <p className="text-white text-center font-bold text-[1.1rem] md:text-[1.3rem] mt-14">{item.title}</p>
                                <p className="text-[0.8rem] text-center mt-2 text-gray-100 font-thin">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-white mt-20 md:mt-[150px] text-[2rem] md:text-[2.5rem] max-w-full md:max-w-[70%] font-bold text-center"> How to Generate Reputation Score</div>

            <div className="w-full flex flex-col items-center justify-center mt-7">
                <div className="md:bg-gray-200 bg-gray-300 w-full max-w-[95vw] md:max-w-[400px] p-3 md:p-5 h-auto rounded-xl relative">
                    <div className="flex flex-col items-center justify-center gap-2 min-h-[220px]">
                        <div className="flex items-center w-full font-bold justify-center gap-5">
                            {steps[current].icon}
                        </div>
                        <p className="font-bold flex-justify-center items-center text-[1.1rem] md:text-[1.2rem] text-center">{steps[current].title}</p>
                        <p className="text-[0.9rem] text-center">{steps[current].desc}</p>
                    </div>
                    <div className="flex justify-between items-center mt-6">
                        <button onClick={prevStep} className="px-3 py-1 rounded bg-white/70 hover:bg-white text-gray-700 font-semibold shadow transition">Prev</button>
                        <div className="flex gap-1">
                            {steps.map((_, idx) => (
                                <span key={idx} className={`inline-block w-2 h-2 rounded-full ${idx === current ? 'bg-blue-600' : 'bg-gray-400'}`}></span>
                            ))}
                        </div>
                        <button onClick={nextStep} className="px-3 py-1 rounded bg-white/70 hover:bg-white text-gray-700 font-semibold shadow transition">Next</button>
                    </div>
                </div>
            </div>

            <div className="text-white mt-[100px] text-[2rem] md:text-[2.5rem] max-w-full md:max-w-[70%] font-bold text-center"> Our Infrastrcuture and Reputation System</div>

            <p className="text-center leading-loose mt-5 mb-10 text-gray-200 text-[0.95rem] md:text-[1rem] w-full md:max-w-[70%]">COTTACHAIN is built on Solana for speed, scalability, and low-cost performance. Our decentralized reputation system uses smart contracts, zero-knowledge proofs, and decentralized identity (DID) to ensure every trust score is secure, private, and tamper-proof. It’s infrastructure designed for fairness, ownership, and Web3 interoperability making your reputation portable across apps, DAOs, and marketplaces.</p>

            <div className="relative mt-10 md:mt-[50px] flex flex-col md:flex-row gap-8 justify-center items-center">
                <div className="bg-gradient-to-r relative h-[320px] w-full max-w-[95vw] md:max-w-[500px] md:h-[290px] md:w-[500px] from-orange-500 to-blue-200 p-[1px] rounded-[10px] mx-auto">
                    <div className="h-full rounded-[10px] p-2 bg-gradient-to-b from-gray-800 to-gray-700 flex justify-center items-start flex-col p-5 md:p-7">
                        <p className="font-medium text-[1.1rem] md:text-[1.4rem] mb-4 text-white">For contributors</p>
                        <p className="text-white font-thin mb-5">Become part of the decentralized reputation system</p>
                        <p className="text-white">Submit data request</p>
                        <p className="text-white">Join as data provider</p>
                        <button className="bg-[#0052ff] text-white text-sm p-3 rounded-[10px] border-none mt-5">Explore models and dataset</button>
                    </div>
                </div>
                <div className="bg-gradient-to-r relative h-[320px] w-full max-w-[95vw] md:max-w-[500px] md:h-[290px] md:w-[500px] from-orange-500 to-blue-200 p-[1px] rounded-[10px] mx-auto">
                    <div className="h-full rounded-[10px] p-2 bg-gradient-to-b from-gray-800 to-gray-700 flex justify-center items-start flex-col p-5 md:p-7">
                        <p className="font-medium text-[1.1rem] md:text-[1.4rem] mb-4 text-white">For Developers</p>
                        <p className="text-white font-thin mb-5">Become part of the decentralized reputation system</p>
                        <p className="text-white">Check the available data sources</p>
                        <p className="text-white">Build your own reputation system</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <button className="bg-[#B68524] text-white text-sm p-3 rounded-[10px] border-none mt-5">View documentation</button>
                            <button className="bg-transparent border border-[2px] border-[#B68524] text-white text-sm p-3 rounded-[10px] mt-5">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center mt-10">
                <Image src="/solana.svg" alt="solana" className="mt-10 animate-bounce transition-transform mt-24 duration-800 hover:scale-105 h-[200px] w-[200px] md:h-[350px] md:w-[350px]" height={1000} width={1000} />
                <p className="text-white text-[1.1rem] md:text-[1.3rem] mt-4">Data Sources</p>
                <div className="flex gap-8 md:gap-20 mt-5 w-full justify-center items-center">
                    <div className="flex gap-3 flex-col justify-center items-center mt-5">
                        <Image src="/jupiter.svg" alt="data sources" className="transition-transform duration-200 hover:scale-105 h-[60px] w-[60px]" height={1000} width={1000} />
                        <p className="text-gray-100 text-[0.9rem] mt-2 font-medium">Jupiter</p>
                    </div>
                    <div className="flex gap-3 flex-col justify-center items-center mt-5">
                        <Image src="/orca.svg" alt="data sources" className="transition-transform duration-200 hover:scale-105 h-[60px] w-[60px]" height={1000} width={1000} />
                        <p className="text-gray-100 text-[0.9rem] mt-2 font-medium">Orca</p>
                    </div>
                    <div className="flex gap-3 flex-col justify-center items-center mt-5">
                        <Image src="/ray.svg" alt="data sources" className="transition-transform duration-200 hover:scale-105 h-[60px] w-[60px]" height={1000} width={1000} />
                        <p className="text-gray-100 text-[0.9rem] mt-2 font-medium">Ray</p>
                    </div>
                    <div className="flex gap-3 flex-col justify-center items-center mt-5">
                        <Image src="/meteor.svg" alt="data sources" className="transition-transform duration-200 hover:scale-105 h-[60px] w-[60px]" height={1000} width={1000} />
                        <p className="text-gray-100 text-[0.9rem] mt-2 font-medium">Meteor</p>
                    </div>
                </div>
            </div>

            <div className="relative w-full my-[50px] max-w-[95vw] md:max-w-[800px] md:mt-20 p-[1px] rounded-[10px] mx-auto">
                <div className="h-full rounded-[15px] p-2 bg-gradient-to-b from-slate-800 to-slate-700 flex flex-col justify-center items-start p-5 md:p-7">
                    <p className="font-medium text-[1.1rem] md:text-[1.5rem] mb-4 text-white">Join 10K+ users on Cottachain Protocol</p>
                    <p className="text-white font-thin text-[1rem] md:text-[1.1rem] w-full md:w-[65%] mb-5">Designed to turn your good deeds online into endless rewards.</p>
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <button className="bg-slate-800 text-white text-sm p-3 rounded-[10px] border-none w-full md:w-auto">Get your reputation score</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default WhyCottachain;