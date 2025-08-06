import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, CalendarDays } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor's in Information Technology",
      institution: "University of Mindanao, Matina Davao City",
      period: "2017 - 2021",
      type: "College"
    },
    {
      degree: "Senior High School",
      institution: "Sta. Ana National High School, Suazo St.",
      period: "2013 - 2017",
      type: "High School"
    },
    {
      degree: "Elementary Education",
      institution: "Manuel L. Quezon, D. Ponce St. Davao City",
      period: "2007 - 2013",
      type: "Elementary"
    }
  ];

  const certifications = [
    {
      title: "MTA: Introduction to Programming Using Java - Certified",
      issuer: "Microsoft",
      date: "January 2020",
      credentialUrl: "https://www.credly.com/badges/b4d1522f-41f74ad2-9bb7-ca5bf186b653"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Education & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Academic foundation and professional certifications that support my technical expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-lg text-foreground">{edu.degree}</CardTitle>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2">
                        <Badge variant="outline" className="flex items-center gap-1 w-fit">
                          <CalendarDays size={14} />
                          {edu.period}
                        </Badge>
                        <Badge variant="secondary">{edu.type}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Certifications</h3>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">{cert.title}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <p className="text-primary font-medium">{cert.issuer}</p>
                        <Badge variant="outline" className="flex items-center gap-1 w-fit mt-2">
                          <CalendarDays size={14} />
                          {cert.date}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 underline text-sm"
                    >
                      View Credential →
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;