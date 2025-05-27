'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const socials = [
  { name: 'X', url: 'https://x.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
];
// const contact = [
//   { name: 'Email', value: 'info@cottachain.com' },
//   { name: 'Phone', value: '+2348021260918' },
// ];

const Navbar = () => {
  const socialRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [showSocial, setShowSocial] = React.useState(false);
  // const [showContact, setShowContact] = React.useState(false);
  const [socialHover, setSocialHover] = React.useState(false);
  // const [contactHover, setContactHover] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Smooth scroll handler
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
    <div>
      <div className="bg-white/10 mb-[30%] text-[0.8rem] z-20 border-none shadow-lg md:w-[70%] w-full p-2 max-w-[80%] left-1/2 transform -translate-x-1/2 flex items-center justify-between fixed top-[4%] backdrop-blur-md border border-white/30 h-[64px] rounded-[20px] shadow-lg px-6">
        <div>
          <Image className='rounded-lg transition-transform duration-200 hover:scale-110' src='/assests/images/Logo.svg' height={27} width={168} alt='Cottachain Logo' />
        </div>
        {/* Desktop nav */}
        <div className='hidden md:flex text-white items-center justify-center gap-8 font-thin text-[1rem] text-opacity-72'>
          <p className="cursor-pointer hover:text-yellow-400 transition" onClick={() => handleScroll('howitworks-section')}>How it works</p>
          <p className="cursor-pointer hover:text-yellow-400 transition" onClick={() => handleScroll('about-section')}>Why Cottachain</p>
          <p className="cursor-pointer hover:text-yellow-400 transition">Docs</p>
          <div className="relative"
            onMouseEnter={() => setShowSocial(true)}
            onMouseLeave={() => setTimeout(() => { if (!socialHover) setShowSocial(false); }, 200)}
            ref={socialRef}
          >
            <p className="cursor-pointer hover:text-yellow-400 transition">Community</p>
            {showSocial && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl shadow-lg px-4 py-2 flex flex-col items-start z-50 min-w-[160px] animate-fade-in"
                style={{ transition: 'opacity 0.2s', pointerEvents: 'auto' }}
                onMouseEnter={() => { setSocialHover(true); setShowSocial(true); }}
                onMouseLeave={() => { setSocialHover(false); setShowSocial(false); }}
              >
                {socials.map((s, i) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-400 transition w-full py-1 px-2 text-left"
                    style={{ borderBottom: i !== socials.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none' }}
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="relative" ref={contactRef}>
            <p className="cursor-pointer hover:text-yellow-400 transition">Token</p>
          </div>
          <button
            className='font-medium bg-white/20 text-white shadow-lg rounded-lg h-auto w-auto text-[0.9rem] p-3 transition font-med ml-4'
            onClick={handleFeatureToast}
          >
            Launch App
          </button>
        </div>
        {/* Mobile nav icon and Launch App button */}
        <div className="flex md:hidden items-center gap-2">
          <button className='font-medium bg-white/20 text-white shadow-lg rounded-lg h-auto w-auto text-[0.9rem] p-3 transition font-med hidden'>Launch App</button>
          <button className="flex items-center justify-center text-white text-3xl focus:outline-none" onClick={() => setSidebarOpen(true)}>
            <Icon icon="mdi:menu" />
          </button>
        </div>
      </div>
      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" onClick={() => setSidebarOpen(false)}></div>
      )}
      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-[80vw] max-w-xs bg-[#181A20] z-50 shadow-2xl transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <Image className='rounded-lg' src='/assests/images/Logo.svg' height={27} width={168} alt='Cottachain Logo' />
          <button className="text-white text-2xl" onClick={() => setSidebarOpen(false)}><Icon icon="mdi:close" /></button>
        </div>
        <div className="flex flex-col gap-6 px-6 py-8 text-white">
          <p className="cursor-pointer hover:text-yellow-400 transition" onClick={() => { handleScroll('howitworks-section'); setSidebarOpen(false); }}>How it works</p>
          <p className="cursor-pointer hover:text-yellow-400 transition" onClick={() => { handleScroll('about-section'); setSidebarOpen(false); }}>Why Cottachain</p>
          <p className="cursor-pointer hover:text-yellow-400 transition">Docs</p>
          <div className="flex flex-col gap-2">
            <span className="text-gray-400 text-xs mb-1">Community</span>
            {socials.map((s, i) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition w-full py-1 px-2 text-left"
                style={{ borderBottom: i !== socials.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}
                onClick={() => setSidebarOpen(false)}
              >
                {s.name}
              </a>
            ))}
          </div>
          <div>
            <span className="text-gray-400 text-xs mb-1">Token</span>
            <p className="cursor-pointer hover:text-yellow-400 transition">Token</p>
          </div>
          <button
            className='font-medium bg-white/20 text-white shadow-lg rounded-lg h-auto w-auto text-[0.9rem] p-3 transition font-med mt-4'
            onClick={handleFeatureToast}
          >
            Launch App
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;