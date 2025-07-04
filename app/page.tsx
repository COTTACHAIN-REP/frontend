import Hero from '@/components/layout/Hero';
import HowItWorks from '@/components/sections/whyCottachain';
import FAQ from '@/components/sections/FAQ';
import About from '@/components/sections/About';
// import Testimonials from '@/components/sections/Testimonials';
export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center bg-black"
    >
      <Hero />
      <div className='md:w-[75%]'>

        <About />
        <HowItWorks />
        <FAQ />
        
      </div>
      {/* <Footer /> */}

    </div>
  );
}
