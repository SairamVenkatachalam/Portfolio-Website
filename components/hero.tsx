"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Data Scientist"

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-16 gradient-bg text-white">
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Profile_Pic.jpg-ka6dI0ysPcDmMyd1bEkRP1PzfKV65z.jpeg')] bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute inset-0 z-0 gradient-bg opacity-90"></div>
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sairam Venkatachalam</h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 h-8">
            {typedText}
            <span className="animate-blink">|</span>
          </h2>
          <p className="text-lg md:text-xl mb-8">
            I'm a passionate and curious data scientist with a strong affinity for numbers and logic. I love to explore
            interesting patterns in data found in different areas, from sports and entertainment to business and sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="px-8 bg-white text-primary hover:bg-white/90"
              onClick={() => scrollToSection("projects")}
            >
              View My Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 border-white text-white hover:bg-white/20 bg-primary/30"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Scroll down"
          className="text-white hover:bg-white/20"
          onClick={() => scrollToSection("projects")}
        >
          <ArrowDown />
        </Button>
      </div>
    </section>
  )
}
