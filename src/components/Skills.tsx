import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Monitor, 
  Server, 
  Network, 
  Wrench, 
  Heart 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "User & Management",
      skills: [
        "Active Directory",
        "Google Workspace", 
        "MS 365",
        "Sharepoint",
        "Entra",
        "Office",
        "Teams",
        "Outlook"
      ]
    },
    {
      icon: <Monitor className="w-6 h-6 text-primary" />,
      title: "Operating Systems",
      skills: [
        "Windows 10/11",
        "Windows Server",
        "Linux",
        "MacOS",
        "ChromeOS"
      ]
    },
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      title: "Infrastructure",
      skills: [
        "CCTV",
        "NAS (QNAP)",
        "Network Server",
        "PABX",
        "POS (Loyverse & Activeone)",
        "VOIP"
      ]
    },
    {
      icon: <Network className="w-6 h-6 text-primary" />,
      title: "Networking & Devices",
      skills: [
        "Access Points",
        "DNS",
        "LAN",
        "P2P",
        "Routers",
        "Switches",
        "TCP/IP",
        "VLAN",
        "VPN",
        "WAN",
        "WLAN"
      ]
    },
    {
      icon: <Wrench className="w-6 h-6 text-primary" />,
      title: "Tools & Software",
      skills: [
        "Anydesk",
        "BMC Remedy",
        "Jira",
        "Remote Desktop Protocol",
        "Solvnow",
        "TeamViewer",
        "Zendesk"
      ]
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Soft Skills",
      skills: [
        "Adaptability",
        "Attention to Detail",
        "Empathy",
        "Patience",
        "Problem-solving"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-section tech-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Technical Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical and soft skills across platforms, tools, and technologies 
            for enterprise-level IT support and infrastructure management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 border-0">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-gradient-tech rounded-lg text-white">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;