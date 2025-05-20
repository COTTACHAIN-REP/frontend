import React from 'react';
import Image from 'next/image';
import { FaTwitter, FaTelegramPlane, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#035591] to-[#035591] text-white pt-12 pb-6 relative overflow-hidden">
      {/* Background animation (optional, subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {/* Example: animated gradient or SVG nodes could go here */}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-10">
        {/* Left: Logo & Description */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image className='rounded-lg' src='/assests/images/logo.jpeg' height={60} width={60} alt='Cottachain Logo' />
            <span className="text-2xl font-bold tracking-wide">COTTACHAIN</span>
          </div>
          <p className="text-white/80 text-sm max-w-xs">
            COTTACHAIN is the decentralized reputation infrastructure for the future of the internet. Trustless. Tamper-proof. Yours to own.
          </p>
        </div>
        {/* Right: Navigation Columns */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Explore */}
          <div>
            <h4 className="font-semibold mb-2">Explore</h4>
            <ul className="space-y-1 text-white/80 text-sm">
              <li><a href="#about" className="hover:text-blue-300">About</a></li>
              <li><a href="#technology" className="hover:text-blue-300">Technology</a></li>
              <li><a href="#token" className="hover:text-blue-300">Token</a></li>
              <li><a href="#roadmap" className="hover:text-blue-300">Roadmap</a></li>
              <li><a href="#community" className="hover:text-blue-300">Community</a></li>
            </ul>
          </div>
          {/* Community */}
          <div>
            <h4 className="font-semibold mb-2">Community</h4>
            <ul className="space-y-1 text-white/80 text-sm">
              <li><a href="https://twitter.com/" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-blue-300"><FaTwitter /> Twitter</a></li>
              <li><a href="https://t.me/" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-blue-300"><FaTelegramPlane /> Telegram</a></li>
              <li><a href="https://discord.com/" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-blue-300"><FaDiscord /> Discord</a></li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul className="space-y-1 text-white/80 text-sm">
              <li><a href="#disclaimer" className="hover:text-blue-300">Disclaimer</a></li>
              <li><a href="#privacy" className="hover:text-blue-300">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-blue-300">Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Text */}
      <div className="relative z-10 mt-10 border-t border-white/10 pt-4 text-center text-xs text-white/60">
        © 2025 COTTACHAIN. All rights reserved.
      </div>
    </footer>
  );
}
