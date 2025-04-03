import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import AboutSection from "./components/AboutSection"
import FeaturesSection from "./components/FeaturesSection"
import Hero from "./components/Hero"
import TestimonialsSection from "./components/TestimonialsSection"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
    </>
  )
}
