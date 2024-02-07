import ContactMe from '../components/contactMe'
import Particle from '../components/particle'
import AboutMe from '../components/aboutMe'
import Technologies from '../components/technologies'
import Projects from '../components/projects'
import Footer from '../components/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-vWhite text-center font-raleway">
      <Particle />
      <ContactMe />
      <AboutMe />
      <Technologies />
      <Projects />
      <Footer />
    </main>
  )
}