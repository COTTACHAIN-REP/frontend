import Hero from '@/components/layout/Hero';
import About from '@/components/sections/About';
import HowItWorks from '@/components/sections/HowItWorks';
import FAQ from '@/components/sections/FAQ';
// import Testimonials from '@/components/sections/Testimonials';
export default function Home() {
  return (
    <div className="bg-gradient-to-b min-h-screen from-[#181467]  to-[#181467] flex flex-col items-center justify-center">
      <Hero />
      <About />
      <HowItWorks />
      <FAQ />
      {/* <Testimonials /> */}
    </div>
  );
}
