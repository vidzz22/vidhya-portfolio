import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Blog from "./components/Blog"
import Photography from "./components/Photography"
import Contact from "./components/Contact"
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