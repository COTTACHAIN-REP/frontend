'use client'
import React from 'react'

const faqs = [
  {
    question: 'What is COTTACHAIN, and why does it matter?',
    answer: "COTTACHAIN is Solana’s first user-focused trust layer, fighting Web3’s $billions scam and rug pulls crisis. Our portable reputation scores (0–1000), built on on-chain actions like transactions (40%) and DAO votes (30%), let you trade, mint NFTs, or govern with confidence. Join us to make scams history.",
  },
  {
    question: 'How do reputation scores work?',
    answer:
      'Our scores, verified by Solana’s SAS and zk-SNARKs, assess wallet trustworthiness based on real-time on-chain activity (e.g., DeFi trades, NFT mints). For example, a score of 800+/1000 signals a trusted user, protecting dApps like Jupiter or Magic Eden from fraud. Privacy is ensured via Decentralized Identity (DID). Check scores before you act.',
  },
  {
    question: 'What’s in it for users?',
    answer:
      'Earn $COTTA tokens by reporting scams (20 $COTTA per verified report), staking for score boosts (+50 points), or engaging in our community (e.g., discord). High-score users (800+/1000) get weighted DAO votes or airdrop perks. Join our waitlist for a 10% $COTTA bonus post-TGE (Q3-Q4 2025).',
  },
  {
    question: 'Why should dApps or sponsors partner with COTTACHAIN?',
    answer:
      'Integrate our API to protect your users from rug pulls or Sybil attacks, like Chompdotgames’ 600+ fake wallets (2025). Sponsors like P2B exchange gain early access to our 1,000+ dApp integrations and $COTTA grants (10,000 per integration). Boost user trust and revenue—partner with us.',
  },
  {
    question: 'What’s the opportunity for investors?',
    answer:
      'The Web3 trust market will hit $1B+ by 2027. Invest in a 10x return potential and secure Solana’s future. Contact us at info@cottachain.id',
  },
  {
    question: 'How does COTTACHAIN ensure privacy and security?',
    answer:
      'exposing transaction data. Sybil resistance via $COTTA staking and 30-day activity thresholds stops fake wallets. Quarterly smart contract audits ensure security. Trust us to keep you safe',
  },
  {
    question: 'What’s next for COTTACHAIN?',
    answer:
      'Q4 2025. We’re partnering with big Solana dApps, aiming for 1,000 dApp integrations and 10,000 users by Q4 2025. Join our waitlist to be part of the Web3 trust revolution',
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
