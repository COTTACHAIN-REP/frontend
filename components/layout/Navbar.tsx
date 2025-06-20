'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const socials = [
  { name: 'X', url: 'https://x.com/COTTACHAIN' },
  { name: 'Discord', url: 'https://discord.gg/KCygwKz4vV' },
  { name: 'Telegram', url: 'https://t.me/cottareputationchain' },
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
  const pathname = usePathname();
  const isDocRoute = pathname.startsWith('/doc');
  const isTokenRoute = pathname.startsWith('/token');

  // Smooth scroll handler
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // const handleFeatureToast = () => {
  //   toast.info('Feature is being implemented', {
  //     position: 'top-center',
  //     autoClose: 2500,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: 'dark',
  //   });
  // };

  return (
    <div>
      <div className={`${isDocRoute ? 'bg-black' : 'bg-white/10'} mb-[30%] text-[0.8rem] z-20 border-none shadow-lg w-full p-2 flex items-center md:justify-between justify-between fixed backdrop-blur-md border border-white/30 h-[100px] md:px-14`}>
        {/* Logo */}
        <div className="flex-shrink-0">
              <Link href="/"> <Image className='rounded-lg transition-transform duration-200 hover:scale-110' src='/assests/images/nav.svg' height={27} width={168} alt='Cottachain Logo' /> </Link>
        </div>
        {/* Desktop nav */}
        <div className='hidden md:flex flex-1 items-center justify-center gap-8 font-medium text-[0.9rem] text-opacity-72'>
          {isDocRoute ? (
            <>
              <p className="cursor-pointer hover:text-yellow-400 transition text-white">The basics</p>
              <p className="cursor-pointer hover:text-yellow-400 transition text-white">Cottachain protocol</p>
              <p className="cursor-pointer hover:text-yellow-400 transition text-white">Services</p>
              <p className="cursor-pointer hover:text-yellow-400 transition text-white">Contracts</p>
              <p className="cursor-pointer hover:text-yellow-400 transition text-white">Publications</p>
            </>
          ) : isTokenRoute ? (
            <>
              <p className="text-white hover:text-yellow-500 cursor-pointer">Tokenomics</p>
              <p className="text-white hover:text-yellow-500 cursor-pointer">Utility & Use Cases</p>
              <p className="text-white hover:text-yellow-500 cursor-pointer">How to Acquire Tokens</p>
            </>
          ) : (
            <>
              <p className="cursor-pointer hover:text-yellow-400 transition text-white" onClick={() => handleScroll('how-cottachain')}>How it works</p>
              <p className="cursor-pointer hover:text-yellow-400 transition text-white" onClick={() => handleScroll('howitworks-section')}>Why Cottachain</p>
              <Link href="/doc" passHref legacyBehavior>
                <p className="cursor-pointer hover:text-yellow-400 transition text-white">Docs</p>
              </Link>
              <div className="relative"
                onMouseEnter={() => setShowSocial(true)}
                onMouseLeave={() => setTimeout(() => { if (!socialHover) setShowSocial(false); }, 200)}
                ref={socialRef}
              >
                <p className="cursor-pointer hover:text-yellow-400 transition text-white">Community</p>
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
                        <p className='text-white hover:text-yellow-500'>  {s.name}</p>
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative" ref={contactRef}>
                <Link href="/token">
                  <p className={`cursor-pointer hover:text-yellow-400 transition text-white`}>Token</p>
                </Link>
              </div>
            </>
          )}
        </div>
        {/* Launch App button (desktop only) or Home button for doc/token route */}
        {(isDocRoute || isTokenRoute) ? (
          <div className="hidden md:flex flex-shrink-0">
            <Link href="/" passHref legacyBehavior>
              <button
                className="flex items-center gap-1 bg-white/20 text-white shadow-lg rounded-lg h-auto w-auto text-[0.9rem] p-3 transition font-med ml-4"
              >
                <Icon icon="mdi:home" className="text-xl" />
                <span>Home</span>
              </button>
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex flex-shrink-0">
           <Link href="/waitlist">   <button
              className='font-medium bg-[#F28C28] text-white shadow-lg rounded-lg h-auto w-auto text-[0.9rem] p-3 transition font-med ml-4'
              // onClick={handleFeatureToast}
            >
              Join our waitlist
            </button> </Link>
          </div>
        )}
        {/* Mobile nav icon and Launch App button */}
        <div className="flex md:hidden items-center gap-2">
          {/* Hide Launch App button on doc/token route, show Home icon+text instead */}
          {(isDocRoute || isTokenRoute) ? (
            <button
              className="flex hidden items-center gap-1 bg-white/20 text-white shadow-lg rounded-lg h-auto w-auto text-[0.9rem] p-3 transition font-med"
              onClick={() => window.location.href = '/'}
            >
              <Icon icon="mdi:home" className="text-xl" />
              <span>Home</span>
            </button>
          ) : (
           <Link href="/waitlist">   <button className='font-medium hidden md:block bg-[#D97706] text-white shadow-lg rounded-lg h-auto w-auto text-[0.9rem] p-3 transition font-med'>Join our waitlist</button> </Link>
          )}
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
          <Image className='rounded-lg' src='/assests/images/nav.svg' height={27} width={168} alt='Cottachain Logo' />
          <button className="text-white text-2xl" onClick={() => setSidebarOpen(false)}><Icon icon="mdi:close" /></button>
        </div>
        <div className="flex flex-col gap-6 px-6 py-8 text-white">
          {isDocRoute ? (
            <>
              <p className="cursor-pointer hover:text-yellow-400 transition">The basics</p>
              <p className="cursor-pointer hover:text-yellow-400 transition">Cottachain protocol</p>
              <p className="cursor-pointer hover:text-yellow-400 transition">Services</p>
              <p className="cursor-pointer hover:text-yellow-400 transition">Contracts</p>
              <p className="cursor-pointer hover:text-yellow-400 transition">Publications</p>
              <button
                className="flex items-center gap-1 bg-white/20 text-white shadow-lg rounded-lg h-auto w-auto text-[0.9rem] p-3 transition font-med mt-4"
                onClick={() => { setSidebarOpen(false); window.location.href = '/'; }}
              >
                <Icon icon="mdi:home" className="text-xl" />
                <span>Home</span>
              </button>
            </>
          ) : isTokenRoute ? (
            <>
              <p className="text-white hover:text-yellow-500 cursor-pointer">Tokenomics</p>
              <p className="text-white hover:text-yellow-500 cursor-pointer">Utility & Use Cases</p>
              <p className="text-white hover:text-yellow-500 cursor-pointer">How to Acquire Tokens</p>
              <button
                className="flex items-center gap-1 bg-white/20 text-white shadow-lg rounded-lg h-auto w-auto text-[0.9rem] p-3 transition font-med mt-4"
                onClick={() => { setSidebarOpen(false); window.location.href = '/'; }}
              >
                <Icon icon="mdi:home" className="text-xl" />
                <span>Home</span>
              </button>
            </>
          ) : (
            <>
              <p className="cursor-pointer hover:text-yellow-400 transition" onClick={() => { handleScroll('howitworks-section'); setSidebarOpen(false); }}>How it works</p>
              <p className="cursor-pointer hover:text-yellow-400 transition" onClick={() => { handleScroll('about-section'); setSidebarOpen(false); }}>Why Cottachain</p>
             <Link href="/doc"> <p className="cursor-pointer hover:text-yellow-400 transition">Docs</p> </Link>
              <div className="flex flex-col gap-2">
                <span className="text-white text-xs mb-1">Community</span>
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
                    <p className='text-white'>{s.name}</p>
                  </a>
                ))}
              </div>
              <div>
                <span className="text-gray-400 text-xs mb-1">Token</span>
                <Link href="/token">
                  <p className={`cursor-pointer hover:text-yellow-400 transition${isTokenRoute ? ' text-yellow-500' : ''}`}>Token</p>
                </Link>
              </div>
            <Link href="/waitlist">    <button
                className='font-medium bg-[#D97706] text-white shadow-lg rounded-lg h-auto w-auto text-[0.9rem] p-3 transition font-med mt-4'
                // onClick={handleFeatureToast}
              >
                Join our waitlist
              </button> </Link>
            </>
          )}
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Navbar;