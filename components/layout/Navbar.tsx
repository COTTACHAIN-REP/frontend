'use client'
import React, { useRef } from 'react';
import Image from 'next/image';

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

  // Smooth scroll handler
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <div className="bg-white/10 mb-[30%] text-[0.8rem] z-20 border-none shadow-lg min-w-[70%] p-2 max-w-[80%] left-1/2 transform -translate-x-1/2 flex items-center justify-between fixed top-[4%] backdrop-blur-md border border-white/30 rounded-[35px] shadow-lg px-6">
        <div>
          <Image className='rounded-lg transition-transform duration-200 hover:scale-110' src='/assests/images/logo.jpeg' height={40} width={40} alt='Cottachain Logo' />
        </div>
        <div className='flex text-white items-center justify-center gap-10'>
          <p className="cursor-pointer hover:text-yellow-400 transition" onClick={() => handleScroll('howitworks-section')}>How it works</p>
          <p className="cursor-pointer hover:text-yellow-400 transition" onClick={() => handleScroll('about-section')}>Why Cottachain</p>
          <p className="cursor-pointer hover:text-yellow-400 transition">Docs</p>
          <div
            className="relative"
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
          <div
            className="relative"
            // onMouseEnter={() => setShowContact(true)}
            // onMouseLeave={() => setTimeout(() => { if (!contactHover) setShowContact(false); }, 200)}
            ref={contactRef}
          >
            <p className="cursor-pointer hover:text-yellow-400 transition">Token</p>
            {/* {showContact && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl shadow-lg px-4 py-2 flex flex-col items-start z-50 min-w-[180px] animate-fade-in"
                style={{ transition: 'opacity 0.2s', pointerEvents: 'auto' }}
                onMouseEnter={() => { setContactHover(true); setShowContact(true); }}
                onMouseLeave={() => { setContactHover(false); setShowContact(false); }}
              >
                {contact.map((c, i) => (
                  <span
                    key={c.name}
                    className="hover:text-blue-600 transition w-full py-1 px-2 text-left"
                    style={{ borderBottom: i !== contact.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none' }}
                  >
                    {c.name}: {c.value}
                  </span>
                ))}
              </div>
            )} */}
          </div>
        </div>
        <button className='font-medium border border-white text-white shadow-lg rounded-lg h-auto w-auto text-[0.8rem] p-3 hover:bg-yellow-400 hover:text-[#452B1F] transition'>Generate Reputation</button>
      </div>
    </div>
  );
};

export default Navbar;