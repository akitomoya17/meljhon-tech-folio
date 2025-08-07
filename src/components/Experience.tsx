import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      logo: "/lovable-uploads/1a9a5f4a-bc06-48d8-898f-4af4d72d2290.png",
      title: "IT Support Engineer (Project-Based)",
      company: "Bladegrass Technologies Inc./ Concentrix",
      location: "Davao City, PH",
      period: "04/2025 - 06/2025",
      description: "Contracted for Concentrix - Davao Finance Center",
      achievements: [
        "Resolved 50+ weekly IT support tickets using BMC Remedy, ensuring minimal downtime across four floors",
        "Imaged and deployed over 200 Windows 11 desktops, reducing setup time by 30% through standardization",
        "Provided hands-on and remote support for PC, network, and telephony issues",
        "Maintained up-to-date asset inventory for compliance audits using Microsoft Teams and internal tools"
      ]
    },
    {
      logo: "/lovable-uploads/4ff097e1-2cbb-4863-9210-94c2e5ab29e6.png",
      title: "IT Technical Support",
      company: "E&W Group of Companies",
      location: "Davao City, PH",
      period: "07/2023 - 03/2025",
      description: "",
      achievements: [
        "Delivered daily technical support across multiple departments via phone, remote access, and on-site",
        "Managed company systems including websites, local & cloud drive (QNAP), POS, network servers, and CCTV",
        "Led IT asset management and handled hardware/software installation, troubleshooting, backup/restore, and upgrades",
        "Assisted with IT projects including system migrations and infrastructure improvements"
      ]
    },
    {
      logo: "/lovable-uploads/f1e07c37-2b89-4aa2-827d-1bb63867fd3e.png",
      title: "Passport/Authentication Staff",
      company: "Department of Foreign Affairs",
      location: "Davao City, PH",
      period: "03/2022 - 06/2023",
      description: "",
      achievements: [
        "Processed and encoded passport and authentication applications; maintained digital records",
        "Issued official documents and performed verification against look-out-list databases",
        "Assisted the IT officer with hardware/software troubleshooting and system issues",
        "Organized and updated passport/archive records to ensure timely document retrieval"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">IT Support Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Proven expertise in technical support, system administration, and 
            infrastructure management across enterprise environments.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden glass-card hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02] border-0">
              <CardHeader className="bg-gradient-tech/10 border-b border-border-tech">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="w-12 h-12 object-contain rounded-lg bg-white p-1 shadow-sm"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                      <p className="text-lg font-semibold text-primary">{exp.company}</p>
                      {exp.description && (
                        <p className="text-muted-foreground italic">{exp.description}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <CalendarDays size={14} />
                      {exp.period}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;