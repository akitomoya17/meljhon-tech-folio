import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Award, Users, Code, Database,CalendarDays } from "lucide-react";

const Works = () => {
  const projects = [
    {
      title: "IT Infrastructure Management",
      description: "Managed complete IT infrastructure for government office with 50+ workstations",
      technologies: ["Windows Server", "Active Directory", "Network Management", "Hardware Troubleshooting"],
      achievements: ["99.8% uptime", "50+ users supported", "Zero data loss incidents"],
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Technical Support Operations",
      description: "Provided comprehensive technical support for software and hardware issues",
      technologies: ["Remote Support", "Ticketing Systems", "Software Installation", "User Training"],
      achievements: ["500+ tickets resolved", "95% satisfaction rate", "24h response time"],
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "System Implementation Projects",
      description: "Led implementation of new systems and software across multiple departments",
      technologies: ["System Migration", "Data Transfer", "User Onboarding", "Documentation"],
      achievements: ["3 major implementations", "Zero downtime migrations", "100% user adoption"],
      icon: <Users className="w-6 h-6" />
    }
  ];

  const certifications = [
    {
      title: "Rekruuto Level 1 VA Certification",
      issuer: "Rekruuto",
      date: "July 2025",
      credentialUrl: "https://images.bannerbear.com/direct/JNodmlzogArzjAgPEe/requests/000/098/764/008/5nDZ3xmVezbnl4k5zy2qpdWj9/416ef7db9f7a47f6db3513e7f90c45cc12e0e298.pdf",
      image: "/lovable-uploads/rekruuto-level1-cert.png"
    },
    {
      title: "Rekruuto Attention to Detail (Level 2)",
      issuer: "Rekruuto", 
      date: "July 2025",
      credentialUrl: "https://images.bannerbear.com/direct/JNodmlzogArzjAgPEe/requests/000/098/764/361/OA0Ekvge5YdnlmJ56KqRLpWxX/47772e94c7d93b382bb1f784afe5ad2c07cf482b.pdf",
      image: "/lovable-uploads/rekruuto-level2-cert.png"
    },
    {
      title: "MTA: Introduction to Programming Using Java",
      issuer: "Microsoft",
      date: "Jan 2020",
      credentialUrl: "https://www.credly.com/badges/b4d1522f-41f74ad2-9bb7-ca5bf186b653",
      image: "/lovable-uploads/mta-java-cert.png"
    }
  ];

  return (
    <section id="works" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sample Works & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Highlighting key projects and professional accomplishments in IT support and technical operations
          </p>
        </div>

        {/* Projects Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Key Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border-card">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <Award className="w-3 h-3 text-primary flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border-card overflow-hidden">
                <div className="aspect-video bg-muted/30 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span>Issued by {cert.issuer}</span>
                      <CalendarDays size={14} />
                      <span className="text-sm font-medium">{cert.date}</span>
                      
                    </div>                  <CardContent>
                    <a 
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 underline text-sm inline-flex items-center gap-1 font-medium"
                    >
                      View Credential →
                    </a>
                  </CardContent>

                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;