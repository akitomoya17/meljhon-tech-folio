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
      image: "/lovable-uploads/MTA.png"
    }
  ];

  return (
    <section id="works" className="py-20 bg-gradient-to-br from-amber-700 via-amber-600 to-orange-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Film Strip Sample Works */}
        <div className="text-center mb-16 relative">
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 transform -rotate-1">
                Sample Works
              </h2>
              <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-lg transform rotate-2 shadow-lg">
                <span>CLIENT MEETING!</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold text-xl mb-2 relative">
                <div className="absolute -top-2 -right-2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-yellow-400"></div>
                5.0
                <div className="text-xs">RATING</div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-yellow-400 clip-star"></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Film Strip */}
          <div className="relative mx-auto max-w-6xl">
            {/* Film strip holes */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-black flex justify-between items-center px-4">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-white rounded-sm"></div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-black flex justify-between items-center px-4">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-white rounded-sm"></div>
              ))}
            </div>
            
            {/* Film frames */}
            <div className="bg-black p-4 mt-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {/* Frame 1 - Video Call */}
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-2 left-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-2"></div>
                    <div className="text-xs font-medium">Client Meeting</div>
                  </div>
                </div>
                
                {/* Frame 2 - Screen Share */}
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-4 flex items-center justify-center relative">
                  <div className="absolute top-2 left-2 w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-green-600 rounded mx-auto mb-2"></div>
                    <div className="text-xs font-medium">Screen Share</div>
                  </div>
                </div>
                
                {/* Frame 3 - Team Meeting */}
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-4 flex items-center justify-center relative">
                  <div className="absolute top-2 left-2 w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div className="text-center">
                    <div className="flex gap-1 justify-center mb-2">
                      <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                      <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                    </div>
                    <div className="text-xs font-medium">Team Call</div>
                  </div>
                </div>
                
                {/* Frame 4 - Presentation */}
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg p-4 flex items-center justify-center relative">
                  <div className="absolute top-2 left-2 w-3 h-3 bg-orange-500 rounded-full"></div>
                  <div className="text-center">
                    <div className="w-10 h-6 bg-orange-600 rounded mx-auto mb-2"></div>
                    <div className="text-xs font-medium">Presentation</div>
                  </div>
                </div>
                
                {/* Frame 5 - Training */}
                <div className="aspect-video bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg p-4 flex items-center justify-center relative">
                  <div className="absolute top-2 left-2 w-3 h-3 bg-teal-500 rounded-full"></div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-teal-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="text-xs font-medium">Training</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Achievements
          </h3>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
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
                      
                      <span className="text-sm font-medium"><CalendarDays size={14} />{cert.date} </span>
                      
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