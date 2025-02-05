import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <SpeedInsights/>
    <Analytics/>
    </>
  )
}