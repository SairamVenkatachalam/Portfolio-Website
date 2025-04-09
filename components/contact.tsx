import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Contact() {
  return (
    <section id="contact" className="bg-background">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-primary/20 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-primary via-accent to-purple-500"></div>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Profile_Pic.jpg-ka6dI0ysPcDmMyd1bEkRP1PzfKV65z.jpeg"
                    alt="Sairam Venkatachalam"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription className="text-lg">
                Feel free to reach out for collaborations or just a friendly chat
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-2 border-primary/20 hover:bg-primary/10 hover:text-primary"
                >
                  <Link href="mailto:sairam31121999@gmail.com">
                    <Mail className="h-5 w-5" />
                    sairam31121999@gmail.com
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-2 border-primary/20 hover:bg-primary/10 hover:text-primary"
                >
                  <Link
                    href="https://www.linkedin.com/in/sairam-venkatachalam-46a7b2200/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-2 border-primary/20 hover:bg-primary/10 hover:text-primary"
                >
                  <Link href="https://github.com/SairamVenkatachalam" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    GitHub
                  </Link>
                </Button>
              </div>

              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  Currently open to new opportunities and collaborations in the field of Data Science.
                </p>
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  <Link href="mailto:sairam31121999@gmail.com">Send a Message</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
