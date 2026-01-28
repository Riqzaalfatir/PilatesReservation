import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import BookingPage from "@/components/home/BookingPage";
import ClassSection from "../components/home/ClassSection"
import Footer from "@/components/layout/Footer";
import ContactSection from '../components/home/ContactSection'


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ClassSection />
      <BookingPage />
      <ContactSection />
    </main>
  )
}
