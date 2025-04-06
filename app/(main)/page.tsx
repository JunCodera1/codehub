import Cta from "../../components/cta";
import Faqs from "../../components/faqs";
import FaeturedProjects from "../../components/featured-projects";
import Features from "../../components/features";
import Features02 from "../../components/features-02";
import Hero from "../../components/hero";
import TestimonialsCarousel from "../../components/testimonials";

export const metadata = {
  title: 'Home - Saas',
  description: 'Page description',
};



export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Features02 />
      <FaeturedProjects />
      <Faqs />
      <TestimonialsCarousel />
      <Cta />
    </>
  );
}
