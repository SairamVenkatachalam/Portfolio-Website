import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Contact from "@/components/contact"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <ScrollToTop />
    </main>
  )
}
