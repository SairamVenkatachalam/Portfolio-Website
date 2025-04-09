import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Data Scientist",
    company: "Temporai",
    period: "May 2024 - Present",
    responsibilities: [
      "Developed sophisticated time series forecasting tool integrating both statistical and deep learning models, achieving over 93% accuracy compared to the baseline.",
      "Engineered a stacking ensemble architecture, enhancing robustness and reliability of forecasts.",
      "Designed and built user-friendly interface for seamless data uploading, pre-processing, and forecast generation, streamlining the workflow for end-users and reducing turnaround time.",
      "Designed and deployed a multi-agent system with dynamic routing and Retrieval Augmented Generation, for real-time context retrieval. Improved query execution time and response accuracy.",
    ],
    color: "border-l-primary",
  },
  {
    title: "Decision Analytics Associate",
    company: "ZS Associates",
    period: "July 2021 - August 2022",
    responsibilities: [
      "Analyzed large sets of global sales and market share data for analog products from more than 100 countries, to estimate expected revenue from expansion markets.",
      "Performed secondary research for a leading Pharma corporation to assess their product portfolio on competitiveness across 25+ products and more than 18 therapy areas. Performed further quantitative analyses to facilitate results.",
      "Developed a proprietary, novel approach to generate the revenue forecast for a hotel chain that uses advanced analytics, Machine learning predictive algorithms, and robust data sources. This generated 99% forecast accuracy and resulted in an 80% reduction in the turnaround time.",
      "Created an advanced VBA-based tool to extract and consolidate outputs from several sources based on specific filters and perform diagnostic analysis for discrepancies. Reduced manual effort time by 90%.",
      "Designed a projection-based tool with more than 95% forecast accuracy for specialty pharmacy, to account for seasonal patterns in prescriptions and patient registrations, and capture pricing trends.",
    ],
    color: "border-l-accent",
  },
  {
    title: "Decision Analytics Associate Intern",
    company: "ZS Associates",
    period: "January 2021 - July 2021",
    responsibilities: [
      "Created user-friendly excel-VBA based forecasting models for short-term and long-term revenue forecasting.",
      "Generated comprehensive reports for consolidated forecasts of multinational pharma corporation's portfolio, along with key sensitivity analysis and summaries. This included 10+ brands across more than 7 therapy areas.",
    ],
    color: "border-l-purple-400",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-background">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className={`border-l-4 ${exp.color} hover:shadow-lg transition-all duration-300`}>
              <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription className="text-lg">{exp.company}</CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit bg-primary/10 text-primary border-primary/20">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
