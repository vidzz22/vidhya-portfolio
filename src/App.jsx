import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Certifications from "./components/Certifications"
import Profiles from "./components/Profiles"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="text-black">
      <Navbar />
      <Hero />
      <Projects />
      <Certifications />
      <Profiles />
      <Contact />
      <Footer />
    </div>
  )
}