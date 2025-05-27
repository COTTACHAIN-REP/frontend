"use client";
import React from 'react';
import Image from 'next/image';
import { FaTwitter, FaTelegramPlane, FaDiscord } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Footer() {
  const handleFeatureToast = () => {
    toast.info('Feature is being implemented', {
      position: 'top-center',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  return (
    <footer className="text-white h-auto pt-12 p-4 w-[90%] relative overflow-hidden">
      {/* Background animation (optional, subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {/* Example: animated gradient or SVG nodes could go here */}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-10">
        {/* Left: Logo & Description */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-4">
          <div className="flex items-center hidden md:block gap-3">
            <Image className='rounded-lg' src='/assests/images/Logo.svg' height={140} width={170} alt='Cottachain Logo' />
          </div>
          <p className="text-white/80 text-sm max-w-xs ">
            COTTACHAIN is the decentralized reputation infrastructure for the future of the internet. Trustless. Tamper-proof. Yours to own.
          </p>

          <button className='rounded-[10px] w-[200px] text-white border-none p-3 bg-gray-700' onClick={handleFeatureToast}>Launch App</button>
        </div>
        {/* Right: Navigation Columns */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-20">
          {/* Explore */}
          <div>
            <h4 className="font-semibold mb-2 gap-y-7">Explore</h4>
            <ul className="space-y-1 text-white/80 text-sm">
              <li><a href="#about" className="hover:text-blue-300">Docs</a></li>
              <li><a href="#technology" className="hover:text-blue-300">Integration Partner</a></li>
              <li><a href="#token" className="hover:text-blue-300">Web2 service provider</a></li>
              <li><a href="#roadmap" className="hover:text-blue-300">Web3 service provider</a></li>
              {/* <li><a href="#community" className="hover:text-blue-300">Community</a></li> */}
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
      <ToastContainer />
    </footer>
  );
}
