import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"

const projects = [
  {
    title: "Time Series Analysis and Forecasting of Air Temperature",
    description:
      "This project explores the systematic application of time series analysis to forecast air temperature. By uncovering hidden trends, seasonality, and residual patterns, predictive models are built to forecast future temperature values accurately.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Air_Temperature_Forecasting.jpg-Tt4bJMY1mE4QkQDcXy3AGa9q5ZRY8l.jpeg",
    skills: ["Python", "Time Series Analysis", "ARIMA Modeling", "PCA", "Forecasting", "Statistical Testing"],
    github: "https://github.com/SairamVenkatachalam/Temperature-Forecasting-and-Time-Series-Analysis",
    color: "bg-gradient-to-br from-purple-500/10 to-blue-500/10",
  },
  {
    title: "Time Series Forecasting of Pharma Sales Data",
    description:
      "The objective of this project was to analyze and forecast sales of different Pharmaceutical drug categories over a 5-year period. Different algorithms were tested and compared to determine the most optimal forecast.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TSF.jpg-JvbujqS1jN5z3OqKKyHsy5lPDTFA7n.jpeg",
    skills: ["Python", "Machine Learning", "Data Analysis", "Time Series Forecasting", "Algorithm Evaluation"],
    github: "https://github.com/SairamVenkatachalam/Time-Series-Forecasting---Pharma-Sales-Data/tree/main",
    color: "bg-gradient-to-br from-green-500/10 to-teal-500/10",
  },
  {
    title: "Geospatial Analysis of D.C. Crime Data",
    description:
      "During this project, I analyzed crime statistics from the city of Washington DC, in order to extract patterns in crime rates over time and by location in proximity to my University, George Washington University.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DC_Crime.jpg-zDMx1ZDu9HNJKSswFPtRvC6ylt9d6Z.jpeg",
    skills: ["Python", "Pandas", "Exploratory Data Analysis", "Geospatial Analysis"],
    github: "https://github.com/SairamVenkatachalam/DC-Crime-Geospatial-Analysis",
    color: "bg-gradient-to-br from-red-500/10 to-orange-500/10",
  },
  {
    title: "Premier League Results Analysis",
    description:
      "The objective of this project was to analyze match results from the English Premier League over the last 30 years and discover trend shifts. An interesting discovery was Covid 19's impact on the home team's form.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prem_Results.jpg-3C2N976ggxRaUKFZUVA2HK05MgqF5O.jpeg",
    skills: ["Exploratory Data Analysis", "Python", "Pandas"],
    github: "https://github.com/SairamVenkatachalam/Premier-League-Results-Analysis",
    color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Classical Music Generation",
    description:
      "This project focuses on generating classical music compositions using LSTM models. The system learns and generates music similar to the compositions of famous classical musicians.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Classical_Music.jpg-YGM26kgfgA5k1FbTovJ7HlJglv8C5b.jpeg",
    skills: ["Deep Learning", "TensorFlow", "Music Generation", "Variational Autoencoders"],
    github: "https://github.com/SairamVenkatachalam/Classical-Music-Generation-Using-Deep-Learning",
    color: "bg-gradient-to-br from-amber-500/10 to-yellow-500/10",
  },
  {
    title: "Presidential Chatbot",
    description:
      "This project involved the creation of an advanced chatbot and user interface that utilizes Retrieval Augmented Generation and Finetuning, to generate authentic responses like a U.S. President would, to voter queries.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Presedential_Chatbot.jpg-XXdVdBFTXhwwD2zlsFvzmeAWE6IoBp.jpeg",
    skills: [
      "Deep Learning",
      "Natural Language Processing",
      "Retrieval Augmented Generation",
      "TensorFlow",
      "Large Language Models",
    ],
    github: "https://github.com/smitpancholi313/Presidential-Chatbot",
    color: "bg-gradient-to-br from-violet-500/10 to-purple-500/10",
  },
  {
    title: "Bike Store Sales Data Visualization",
    description:
      "This project focuses on visualizing sales trends in a European Bike Store using a dataset that includes sales, profit, and location-based data.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike_Store.jpg-LP5CVwisk1F4J6TSEJJPMaTBh3BnKO.jpeg",
    skills: ["Data Visualization", "Exploratory Data Analysis", "Dash", "Plotly"],
    github: "https://github.com/SairamVenkatachalam/Bike-Store-Sales-Analysis",
    color: "bg-gradient-to-br from-green-500/10 to-blue-500/10",
  },
  {
    title: "Weather Forecast Model",
    description:
      "The goal of this project was to predict the occurrence of rain tomorrow using weather data. Various classifier models were used and compared.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rain_Predictor.jpg-yn2kjzR2pjr5nvEcDhe14v9U7LCOEA.jpeg",
    skills: ["Machine Learning", "Classification", "Python", "Pandas"],
    github: "https://github.com/SairamVenkatachalam/Rain-Predictor-Model",
    color: "bg-gradient-to-br from-blue-500/10 to-indigo-500/10",
  },
  {
    title: "Global Sales Dashboard",
    description:
      "I created an interactive dashboard in Power BI to visualize sales performance globally and derive insights.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global_Sales_Dashboard.jpg-1qpAqlJI4g034yHtCddHBHHSlgz5RD.jpeg",
    skills: ["Data Visualization", "Power BI", "Business Intelligence"],
    github: "https://github.com/SairamVenkatachalam/Global-Sales-Dashboard---Power-BI",
    color: "bg-gradient-to-br from-indigo-500/10 to-purple-500/10",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className={`project-card ${project.color}`}>
              <div className="h-48 relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.slice(0, 3).map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {skill}
                    </Badge>
                  ))}
                  {project.skills.length > 3 && <Badge variant="outline">+{project.skills.length - 3}</Badge>}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Project
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            <Link href="https://github.com/SairamVenkatachalam" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
