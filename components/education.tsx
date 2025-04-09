import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Master of Science in Data Science",
    university: "George Washington University",
    location: "United States of America",
    period: "August 2023 - May 2025",
    color: "bg-primary/10 text-primary",
  },
  {
    degree: "Bachelor of Technology in Information and Communication Technology",
    minor: "Minor in Computational Science",
    university: "Dhirubhai Ambani Institute of Information and Communication Technology",
    location: "India",
    period: "August 2017 - May 2021",
    color: "bg-accent/10 text-accent",
  },
]

export default function Education() {
  return (
    <section id="education" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20"
            >
              <CardHeader className="flex flex-row items-start gap-4">
                <div className={`p-3 rounded-full ${edu.color}`}>
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <CardTitle>{edu.degree}</CardTitle>
                  {edu.minor && <CardDescription className="text-base">{edu.minor}</CardDescription>}
                  <CardDescription className="text-base font-medium">{edu.university}</CardDescription>
                  <CardDescription>{edu.location}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className={edu.color.replace("bg-", "border-").replace("text-", "text-")}>
                  {edu.period}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
