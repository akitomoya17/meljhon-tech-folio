import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
const profileImage = "/lovable-uploads/b71b564b-6cca-42da-9a8c-f326b2b98508.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToExperience = () => {
    const element = document.querySelector("#experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Clean background with subtle patterns */}
      <div className="absolute inset-0 bg-hero-gradient"></div>
      
      {/* Minimal floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/5 rounded-full blur-xl animate-bounce-gentle"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 bg-primary/3 rounded-full blur-2xl float-animation"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left animate-slide-in-left">
            <div className="mb-8">
              <p className="text-lg text-muted-foreground mb-2 font-medium">Hello, I am</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-text mb-4 tracking-tight">
                <span className="block">Meljhon</span>
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Deaño
                </span>
              </h1>
            </div>
            
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-hero-text-muted font-medium mb-4">
                IT Support | Technical Support | Support Engineer
              </p>
              <p className="text-lg text-hero-text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
                IT Support professional with 3+ years of experience in both government and private sectors. 
                Skilled in troubleshooting hardware, software, and network issues, managing IT requests, 
                and maintaining reliable system operations.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:scale-105 px-8 py-3 text-lg font-semibold transition-all duration-300 rounded-xl"
              >
                Work With Me
              </Button>
              <Button 
                onClick={scrollToExperience}
                variant="outline" 
                className="border-2 border-primary/30 bg-transparent text-hero-text hover:bg-primary/10 hover:border-primary/50 hover:scale-105 px-8 py-3 text-lg font-semibold transition-all duration-300 rounded-xl"
              >
                View My Work
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-hero-text-muted">
              <div className="flex items-center justify-center lg:justify-start gap-3 group">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <MapPin size={18} className="text-primary" />
                </div>
                <span className="font-medium">Davao City, Philippines</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 group">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone size={18} className="text-primary" />
                </div>
                <span className="font-medium">+63 9077291142</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative group">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl opacity-50 animate-pulse"></div>
              
              {/* Clean profile container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Profile image with modern styling */}
                <div className="w-full h-full rounded-2xl overflow-hidden border border-border shadow-profile group-hover:border-primary/30 transition-all duration-500 bg-card">
                  <img 
                    src={profileImage} 
                    alt="Meljhon Deaño" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Modern status indicator */}
                <div className="absolute -bottom-3 -right-3 bg-card rounded-full p-3 shadow-lg border border-border group-hover:scale-110 transition-transform duration-300">
                  <div className="relative">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    <div className="absolute inset-0 w-4 h-4 bg-primary/50 rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;