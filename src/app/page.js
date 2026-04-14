import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import SaasShowcase from '@/components/SaasShowcase/SaasShowcase';
import WhyChoose from '@/components/WhyChoose/WhyChoose';
import Testimonials from '@/components/Testimonials/Testimonials';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat/WhatsAppFloat';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SaasShowcase />
        <WhyChoose />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
