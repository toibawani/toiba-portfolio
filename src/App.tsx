import VideoBg from './components/VideoBg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AriaIntro from './components/AriaIntro'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <VideoBg />
      <Navbar />
      <main>
        <Hero />
        <AriaIntro />
        <Marquee />
        <About />
        <Services />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
