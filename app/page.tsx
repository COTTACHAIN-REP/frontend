import Hero from '@/components/layout/Hero';
import Footer from '@/components/layout/Footer'
import HowItWorks from '@/components/sections/whyCottachain';
import FAQ from '@/components/sections/FAQ';
// import Testimonials from '@/components/sections/Testimonials';
export default function Home() {
  return (
       <div
      className="flex flex-col items-center justify-center"
      style={{
    background: 'linear-gradient(to bottom, #211AA7 -100%, #121229 100%)',
  }}
    >
      <Hero />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  );
}
