import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Shuren from './components/Shuren.jsx'
import AcademicWork from './components/AcademicWork.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-ink-900">
      <Nav />
      <main>
        <Hero />
        <About />
        <Shuren />
        <AcademicWork />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}
