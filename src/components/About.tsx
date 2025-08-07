import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Shield, Server } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      title: "Technical Expertise",
      description: "Skilled in troubleshooting hardware and software issues across multiple platforms"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Network Management",
      description: "Ensuring seamless network connectivity and infrastructure management"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "System Security",
      description: "Experience with passport authentication systems and secure documentation"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "IT Infrastructure",
      description: "Installing, configuring, and maintaining computer systems and networks"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section tech-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Professional Overview</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Delivering comprehensive IT support solutions with expertise in cybersecurity, 
            infrastructure management, and technical excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Professional Background</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              IT Support professional with over 3 years of combined government service and hands-on 
              experience providing technical support in fast-paced environments. I am skilled in 
              troubleshooting hardware and software issues, ensuring seamless network connectivity, 
              and offering customer-focused solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Knowledgeable at managing IT-related requests, maintaining system performance, and 
              ensuring the smooth operation of IT infrastructure. Proficient in identifying and 
              resolving technical problems quickly and effectively, while providing excellent user support.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Certifications & Education</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground">MTA: Introduction to Programming Using Java</h4>
                <p className="text-muted-foreground">Microsoft | January 2020</p>
                <p className="text-sm text-muted-foreground">Certified Professional</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-foreground">Bachelor's in Information Technology</h4>
                <p className="text-muted-foreground">University of Mindanao, Matina Davao City</p>
                <p className="text-sm text-muted-foreground">2017 - 2021</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="text-center p-6 glass-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 border-0">
              <CardContent className="space-y-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-tech rounded-xl text-white shadow-lg">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;