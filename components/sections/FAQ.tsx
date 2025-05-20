'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const faqs = [
	{
		question: 'What is COTTACHAIN?',
		answer:
			'COTTACHAIN is a decentralized, portable, and verifiable reputation system built on Solana. It lets you own and control your trust score across DeFi, DAOs, e-commerce, and social media.',
	},
	{
		question: 'How does COTTACHAIN protect my privacy?',
		answer:
			'We use decentralized identity (DID) standards and zero-knowledge proofs, so you can verify your actions without revealing personal details. You control what data is shared.',
	},
	{
		question: 'What is a decentralized reputation?',
		answer:
			'It means your trust score is not locked to one platform. With COTTACHAIN, your reputation is portable, secure, and tamper-proof—owned by you, not by corporations.',
	},
	{
		question: 'How do I use my COTTACHAIN trust score?',
		answer:
			'You can use your trust score to verify yourself on marketplaces, freelance platforms, DAOs, and more—building credibility wherever you go online.',
	},
	{
		question: 'What is the COTTA token used for?',
		answer:
			'COTTA is used for staking, governance, and paying for credential and reputation verification within the COTTACHAIN ecosystem.',
	},
	{
		question: 'How can I join the community?',
		answer:
			'Join us on Discord, Telegram, or Twitter to connect with builders, creators, and Web3 enthusiasts. Everyone is welcome!',
	},
	{
		question: 'Is my data safe on COTTACHAIN?',
		answer:
			'Yes. COTTACHAIN uses cryptographic proofs and anti-fraud architecture to keep your data secure and tamper-proof.',
	},
	{
		question: 'How do I get started?',
		answer:
			'Click “Get Started” on our site or join the movement on Discord or Telegram to begin your journey with COTTACHAIN.',
	},
];

const useScrollFade = () => {
	const controls = useAnimation();
	const ref = useRef<HTMLElement>(null);
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

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const { ref, controls } = useScrollFade();

	const toggleFAQ = (idx: number) => {
		setOpenIndex(openIndex === idx ? null : idx);
	};

	return (
		<motion.section
			ref={ref}
			animate={controls}
			initial={{ opacity: 0, y: 40 }}
			id="faq"
			className="w-full max-w-2xl mx-auto py-16 px-4"
		>
			<h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
				Frequently Asked Questions
			</h2>
			<div className="space-y-4">
				{faqs.map((faq, idx) => (
					<motion.div
						key={idx}
						initial={{ opacity: 0, x: 80 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							delay: 0.15 + idx * 0.58,
							duration: 0.5,
							type: 'spring',
							stiffness: 60,
						}}
						className="bg-white/10 rounded-lg shadow-md overflow-hidden"
					>
						<button
							className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-400"
							onClick={() => toggleFAQ(idx)}
							aria-expanded={openIndex === idx}
						>
							<span className="text-lg font-medium text-white">
								{faq.question}
							</span>
							<span
								className={`ml-4 transition-transform ${
									openIndex === idx ? 'rotate-45' : ''
								} text-blue-300 text-2xl`}
							>
								+
							</span>
						</button>
						{openIndex === idx && (
							<div className="px-6 pt-4 pb-4 text-white/90 text-base animate-fade-in">
								{faq.answer}
							</div>
						)}
					</motion.div>
				))}
			</div>
		</motion.section>
	);
}
