import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/Services";
import ContactSection from "@/components/ContactForm";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection/>
    </Layout>
  );
}
