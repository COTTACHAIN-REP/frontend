'use client'
import React from "react";
// import { Icon } from '@iconify/react';

// import { useState } from 'react';
import Image from "next/image";

const WhyCottachain = () => {

    const trustFeatures = [
        {
            img: "/Group7.svg",
            alt: "Reliable Interactions",
            title: "Reliable Interactions",
            desc: "We track on-chain activity to generate reputation scores that reveal a wallet’s trustworthiness. We flag scammers in real time so you can trade, mint NFTs, or vote in DAOs with confidence."
        },
        {
            img: "/Group13.svg",
            alt: "Own Your Identity",
            title: "Own Your Identity",
            desc: "Using decentralized IDs (DID) and Solana’s Attestation Service (SAS), we verify your identity cryptographically, ensuring your privacy and credibility across dApps without relying on centralized authorities."
        },
        {
            img: "/Group12.svg",
            alt: "Holistic Insights",
            title: "Holistic Insights",
            desc: "Our scores analyze a diverse range of on-chain actions—like trades, governance votes, and NFT activity—giving you a complete, transparent picture of trust for every wallet."
        },
        {
            img: "/clip1.svg",
            alt: "Seamless for Developers",
            title: "Seamless for Developers",
            desc: "dApps like Jupiter and Magic Eden (23M+ users) can integrate our API in minutes, adding trust features to their platforms with minimal effort, ensuring broad adoption across Solana."
        },
        {
            img: "/clip2.svg",
            alt: "Tailored Accuracy",
            title: "Tailored Accuracy",
            desc: "Custom algorithms adapt scoring to specific use cases (e.g., DeFi lending, NFT marketplaces), providing precise trust signals that meet each scenario's unique needs."
        },
        {
            img: "/vector1.svg",
            alt: "Community-Driven Feedback",
            title: "Community-Driven Feedback",
            desc: "Users can report suspicious activity, which updates reputation scores, and earn $COTTA tokens as rewards, fostering a collaborative, safer Web3 community."
        },
    ];


    return (
        <div className="flex flex-col items-center p-2 md:p-3 justify-center mt-10 md:mt-20 w-full">

            <div className="text-white mt-4 text-[1.7rem] md:text-[2.5rem] font-bold text-center w-full"> Why Cottachain</div>
            {/* <p className="text-center w-full text-gray-200 leading-loose mt-5 mb-10 text-[0.95rem] md:text-[1rem] md:w-[70%] mb-[60px]">Reputation shouldn’t be trapped or manipulated. COTTACHAIN makes it portable, secure, and verifiable across Web3 powered by blockchain, decentralized identity, and zero-knowledge proofs. Your trust score is private, tamper-proof, and fully yours</p> */}

            <div className="w-full flex justify-center mt-10 items-center">
                <Image src="/Frame131.svg" alt="image" className="w-full max-w-[400px] md:max-w-[80%] h-auto" height={1000} width={1000} />
            </div>
            <div id="how-cottachain"></div>

            <div className="text-[#D97706] my-20 md:my-7 md:mt-[180px] text-[1.7rem] md:text-[2.5rem] max-w-[90%] md:max-w-[70%] font-bold text-center"> How Cottachain Delivers Trust <br /> <span className="text-white">Through Reputation Score</span></div>

            <div className="relative mt-10 md:mt-[150px] w-full flex justify-center items-center">
                <div className="grid bg-gradient-to-br bg-blur from-orange-900 to-[#062015]
 grid-cols-1 md:grid-cols-3 h-auto gap-y-14 md:gap-5 p-10 md:gap-y-14 w-[90%]">
                    {trustFeatures.map((item, idx) => (

                        <div key={idx} className="md:h-[400px] h-auto p-5 bg-[#1A1817] rounded-[10px] p-2 w-full flex justify-center items-center flex-col">

                            <Image
                                src={item.img}
                                alt={item.alt}
                                className="object-contain rounded-full"
                                width={70}
                                height={70}
                            />
                            <p className="text-white mb-7 text-center font-bold text-[1.1rem] md:text-[1.3rem] mt-14">{item.title}</p>
                            <p className="text-[0.8rem] text-start mt-2 text-gray-100 font-thin">{item.desc}</p>
                        </div>

                    ))}
                </div>
            </div>

            <div className="text-white mt-20 md:mt-[200px] text-[2rem] md:text-[2.5rem] max-w-full md:max-w-[70%] font-bold text-center"> How to Generate Reputation Score</div>



            <div className="w-full flex flex-col items-center justify-center mt-[100px]">
                <Image src='/howto.svg' alt="how to generate" height={1000} width={1000} />

                <div className="flex flex-col md:flex-row items-center gap-10 mt-20 justify-center">

                    <Image className="h-auto w-[50%]" src='/Radar.svg' alt="how to generate" height={1000} width={1000} />

                    <div className="flex mt-10 p-5 md:mt-0 flex-col md:justify-start justify-center md:items-start items-center md:ml-14">
                        <div className="flex items-center gap-3">
                            <Image className="md:h-[100px] h-[40px] w-[40px] md:w-[100px]" src='/Group.svg' alt="how to generate" height={1000} width={1000} />

                            <p className="text-white text-[1.5rem] font-bold w-full">Cotta Score</p>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            COTTA Score: Your Web3 Trust Compass

                            <p className="text-[#A8A29E] mt-4 text-left">Overall Security Assessment</p>
                            <p className="text-[#A8A29E] mt-4 text-left">Check wallet trustworthiness with real-time, Solana-powered
                                reputation scores (0–1000).</p>
                            <p className="text-[#A8A29E] mt-4 text-left"> Built with zk-SNARKs and SAS,
                                COTTA Scores stop scams like Pump.fun’s $1.9M exploit.</p>
                            <p className="text-[#A8A29E] mt-4 text-left">Real-time risk alerts to protect investor assets and maintain confidence. Traders, DAOs, and dApps trust us</p>
                        </div>

                    </div>
                </div>

                {/* <div className="md:bg-gray-200 bg-gray-300 w-full max-w-[95vw] md:max-w-[400px] p-3 md:p-5 h-auto rounded-xl relative">
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
                </div>*/}
            </div>

            <div className="text-white p-4 mt-[150px] text-[2rem] md:text-[2.5rem] max-w-full md:max-w-[70%] font-bold text-center"> Our Infrastrcuture for Reputation System</div>

            <p className="text-center leading-loose mt-10 mb-10 text-gray-200 text-[0.95rem] md:text-[1rem] p-4 w-full md:max-w-[70%]">Blockchain Foundation: Built on Solana’s high-throughput blockchain (65,000
                TPS) using Rust smart contracts for scoring, storage, and verification. Offchain indexing (e.g., The Graph) optimizes data retrieval while keeping
                records tamper-proof. </p>

            <div className="relative mt-10 md:mt-[50px] flex flex-col md:flex-row gap-8 justify-center items-center">
                <div className="bg-gradient-to-r relative h-[320px] w-full max-w-[95vw] md:max-w-[500px] md:h-[290px] md:w-[500px] from-orange-500 to-blue-200 p-[1px] rounded-[10px] mx-auto">
                    <div className="h-full rounded-[10px] p-2 bg-gradient-to-b from-[#0E0C0B] to-[#2A2928] flex justify-center items-start flex-col p-5 md:p-7">
                        <p className="font-medium text-[1.1rem] md:text-[1.4rem] mb-4 text-white">For contributors</p>
                        <p className="text-white font-thin mb-5">Become part of the decentralized reputation system</p>
                        <p className="text-white">Submit data request</p>
                        <p className="text-white">Join as data provider</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <button className="bg-[#B68524] text-white text-sm p-3 rounded-[10px] border-none mt-5">Explore models and dataset</button>
                            <button className="bg-transparent border border-[2px] border-[#B68524] text-white text-sm p-3 rounded-[10px] mt-5">Coming soon</button>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-r relative h-[320px] w-full max-w-[95vw] md:max-w-[500px] md:h-[290px] md:w-[500px] from-orange-500 to-blue-200 p-[1px] rounded-[10px] mx-auto">
                    <div className="h-full rounded-[10px] p-2 bg-gradient-to-b from-[#0E0C0B] to-[#2A2928] flex justify-center items-start flex-col p-5 md:p-7">
                        <p className="font-medium text-[1.1rem] md:text-[1.4rem] mb-4 text-white">For Developers</p>
                        <p className="text-white font-thin mb-5">Become part of the decentralized reputation system</p>
                        <p className="text-white">Check the available data sources</p>
                        <p className="text-white">Build your own reputation system</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <button className="bg-[#B68524] text-white text-sm p-3 rounded-[10px] border-none mt-5">View documentation</button>
                            <button className="bg-transparent border border-[2px] border-[#B68524] text-white text-sm p-3 rounded-[10px] mt-5">Coming soon</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center mt-20">

                <p className="text-white text-[1.1rem] md:text-[1.3rem] mt-20">Connect with solana networks:</p>
                <Image src="/Group.svg" alt="cottachain" className="mt-10 animate-bounce transition-transform mt-[150px] duration-800 hover:scale-105 h-[150px] w-[150px] md:h-[350px] md:w-[350px]" height={1000} width={1000} />
                <p className="text-white text-[1.4rem] md:text-[1.5rem] mt-4">Trusted By</p>
                <div className="flex gap-8 md:gap-20 mt-5 w-full justify-center items-center">
                    <div className="flex gap-3 flex-col justify-center items-center mt-5">
                        <Image src="/p2b.png" alt="data sources" className="transition-transform duration-200 hover:scale-105 h-[75px] rounded-full w-[75px]" height={1000} width={1000} />
                        <p className="text-gray-100 text-[1.1rem] mt-2 font-bold">People To Business Exchange</p>
                    </div>
                   
               
                </div>
            </div>

            <div className="relative w-full my-[50px] max-w-[95vw] md:max-w-[800px] md:mt-20 p-[1px] rounded-[10px] mx-auto">
                <div className="h-full rounded-[15px] p-2 bg-gradient-to-br from-[#8A7037] to-[#D97706] flex flex-col justify-center items-start p-5 md:p-7">
                    <p className="font-medium text-[1.1rem] md:text-[1.5rem] mb-4 text-white">Join 200K+ users on Cottachain Protocol</p>
                    <p className="text-white font-thin text-[1rem] md:text-[1.1rem] w-full md:w-[65%] mb-5">Designed to turn your good deeds online into endless rewards.</p>
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <button className="bg-transparent shadow-sm shadow-gray-800 cursor-pointer hover:bg-slate-900 text-white text-sm p-3 rounded-[10px] w-full md:w-auto">Get your reputation score</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default WhyCottachain;