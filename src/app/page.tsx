import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import StatsBar from '@/components/landing/StatsBar';
import TrustBadges from '@/components/landing/TrustBadges';
import HowItWorks from '@/components/landing/HowItWorks';
import Testimonials from '@/components/landing/Testimonials';
import CredentialsBar from '@/components/landing/CredentialsBar';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <TrustBadges />
      <HowItWorks />
      <Testimonials />
      <CredentialsBar />
      <FinalCTA />
      <Footer />
    </>
  );
}
