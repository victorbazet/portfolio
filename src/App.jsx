import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Shuren from './components/Shuren.jsx'
import Experience from './components/Experience.jsx'
import AcademicWork from './components/AcademicWork.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'
import NeuralBackground from './components/NeuralBackground.jsx'
import { copy } from './data/content.js'

export default function App() {
  const [locale, setLocale] = useState('en')
  const text = copy[locale]

  return (
    <div className="min-h-screen overflow-hidden bg-ink-900" lang={locale}>
      <NeuralBackground />
      <Nav text={text} locale={locale} onLocaleChange={setLocale} />
      <main className="relative z-10">
        <Hero text={text} />
        <About text={text} />
        <Shuren text={text} />
        <Experience text={text} />
        <AcademicWork text={text} />
        <Skills text={text} />
      </main>
      <Footer text={text} />
    </div>
  )
}
import { useState } from 'react'
