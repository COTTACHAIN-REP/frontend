'use client'
import React from 'react'

const faqs = [
  {
    question: 'What is CreatorPass?',
    answer:
      'CreatorPass is a decentralized platform on Solana that allows creators to monetize their content through NFT-based passes.',
  },
  {
    question: 'How do I buy a pass?',
    answer:
      'You can buy a pass by connecting your Solana wallet and minting an NFT directly from a creator’s page.',
  },
  {
    question: 'Are the passes tradable?',
    answer:
      'No, passes are non-tradable NFTs tied to your wallet and cannot be transferred or sold.',
  },
  {
    question: 'Can I earn rewards?',
    answer:
      'Yes, you earn CRTP points by liking posts and minting passes. These will convert to tokens after our token launch.',
  },
  {
    question: 'Do passes expire?',
    answer:
      'No, passes are currently permanent once minted. You can access the creator’s gated content as long as you hold the pass.',
  },
  {
    question: 'What wallet can I use?',
    answer:
      'Any wallet that supports the Solana blockchain, such as Phantom or Solflare, is compatible with CreatorPass.',
  },
  {
    question: 'Can I use multiple passes?',
    answer:
      'Yes, you can hold multiple passes from different creators at once. Each one unlocks unique content.',
  },
  {
    question: 'Is it free to join?',
    answer:
      'Yes, the platform is free to join. You only pay when minting a pass for a specific creator.',
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
