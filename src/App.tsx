import Nav        from './components/Nav'
import Hero       from './components/Hero'
import About      from './components/About'
import Experience from './components/Experience'
import Projects   from './components/Projects'
import Hobbies    from './components/Hobbies'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
