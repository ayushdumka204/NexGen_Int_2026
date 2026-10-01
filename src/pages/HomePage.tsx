import ClientCarousel from "../components/home/ClientCarousel"
import CustomCursor from "../components/home/CustomCursor"
import DecisionCta from "../components/home/DecisionCta"
import Hero from "../components/home/Hero"
import HumanUnderstanding from "../components/home/HumanUnderstanding"
import ResearchSolutions from "../components/home/ResearchSolutions"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import ScrollToTop from "../components/ui/ScrollToTop"
import useScrollReveal from "../hooks/useScrollReveal"

export default function HomePage() {
  useScrollReveal()

  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <ClientCarousel />
        <HumanUnderstanding />
        <ResearchSolutions />
        <DecisionCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
