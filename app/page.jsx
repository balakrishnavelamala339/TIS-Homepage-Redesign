import Cursor from '@/components/animation/Cursor';
import ScrollProgress from '@/components/animation/ScrollProgress';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Sports from '@/components/sections/Sports';
import Rankings from '@/components/sections/Rankings';
import Testimonials from '@/components/sections/Testimonials';
import Enquire from '@/components/sections/Enquire';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Cursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Sports />
        <Rankings />
        <Testimonials />
        <Enquire />
      </main>
      <Footer />
    </>
  );
}
