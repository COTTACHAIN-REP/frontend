'use client'
import React from 'react'

const faqs = [
  {
    question: 'WHAT IS COTTACHAIN??',
    answer:
      'COTTACHAIN is a decentralized, portable, and verifiable reputation system built on Solana. It lets you own and control your trust score across DeFi, DAOs, e-commerce, and social media.CreatorPass is a decentralized platform on Solana that allows creators to monetize their content through NFT-based passes.',
  },
  {
    question: 'HOW DOES COTTACHAIN PROTECT MY PRIVACY??',
    answer:
      'We use decentralized identity (DID) standards and zero-knowledge proofs, so you can verify your actions without revealing personal details. You control what data is shared.',
  },
  {
    question: 'HOW DO I USE COTTACHAIN TUST SCORE?',
    answer:
      'You can use your trust score to verify yourself on marketplaces, freelance platforms, DAOs, and more—building credibility wherever you go online.',
  },
  {
    question: 'WHAT IS COTTACHAIN TOKEN USED FOR?',
    answer:
      'COTTA is used for staking, governance, and paying for credential and reputation verification within the COTTACHAIN ecosystem.',
  },
  {
    question: 'WHAT IS DECENTRALIZED REPUTATION?',
    answer:
      'It means your trust score is not locked to one platform. With COTTACHAIN, your reputation is portable, secure, and tamper-proof owned by you, not by corporations.',
  },
  {
    question: 'HOW CAN I JOIN THE COMMUNITY?',
    answer:
      'Join us on Discord, Telegram, or Twitter to connect with builders, creators, and Web3 enthusiasts. Everyone is welcome!',
  },
  {
    question: 'IS MY DATA SAFE ON COTTACHAIN?',
    answer:
      'Yes.  Uses cryptographic proofs and anti-fraud architecture to keep your data secure and tamper-proof.',
  },
  {
    question: 'HOW DO I GET STARTED?',
    answer:
      'Click “Get Started” on our site or join the movement on Discord or Telegram to begin your journey with COTTACHAIN.',
  },
]

const FAQGrid = () => {
  return (
	<>
	<p className='text-white font-bold text-[2.5rem] p-4 mt-[100px] text-center'>Frquently Asked Questions</p>    
	<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-[90%] mx-auto my-16">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-[#1A1817] rounded-xl p-6 shadow-lg transition-transform hover:scale-[1.02]"
        >
          <h3 className="text-lg font-semibold text-[#D97706] mb-4">
            {faq.question}
          </h3>
          <p className="text-white font-bold">{faq.answer}</p>
        </div>
      ))}
    </div>
	</>

  )
}

export default FAQGrid
