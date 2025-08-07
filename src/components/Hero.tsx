import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button"
const profileImage = "/lovable-uploads/profile.png";


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
    <section className="relative min-h-screen bg-hero-gradient flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Tech background overlay */}
      <div className="absolute inset-0 bg-hero-overlay opacity-75"></div>
      <div className="absolute inset-0 tech-pattern"></div>
      
      {/* Geometric wireframe patterns */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-lg rotate-45 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-white/30 hexagon-frame float-animation"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-white/25 rounded-full animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 left-1/4 w-20 h-20 border border-white/20 rotate-12 float-animation" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-text mb-6 tracking-tight">
              <span className="block">IT SUPPORT</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                & SERVICES
              </span>
            </h1>
            <div className="relative mb-8">
              <p className="text-xl md:text-2xl text-hero-text-muted font-medium mb-4">
                Meljhon Deaño
              </p>
              <p className="text-lg text-hero-text-muted/90">
                Technical Support Engineer | IT Infrastructure Specialist
              </p>
              <div className="h-1 w-32 bg-gradient-to-r from-white via-blue-200 to-transparent mt-4 mx-auto lg:mx-0"></div>
            </div>
            <p className="text-lg text-hero-text-muted mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Need help with technical difficulties? Our knowledgeable IT team is available to 
              provide swift, efficient, and dependable assistance for all your technology needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center gap-3 text-hero-text-muted">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span>Cybersecurity Solutions</span>
              </div>
              <div className="flex items-center gap-3 text-hero-text-muted">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span>End-User Support</span>
              </div>
              <div className="flex items-center gap-3 text-hero-text-muted">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span>Network Management</span>
              </div>
              <div className="flex items-center gap-3 text-hero-text-muted">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span>System Maintenance</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary hover:bg-white/95 hover:shadow-lg hover:scale-105 px-8 py-3 text-lg font-semibold transition-all duration-300 rounded-xl"
              >
                Work With Me
              </Button>
              <Button 
                onClick={scrollToExperience}
                variant="outline" 
                className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 hover:scale-105 px-8 py-3 text-lg font-semibold transition-all duration-300 rounded-xl backdrop-blur-sm"
              >
                View My Work
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-hero-text-muted justify-center lg:justify-start">
              <div className="flex items-center justify-center lg:justify-start gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <MapPin size={18} />
                </div>
                <span className="font-medium">Davao City, Philippines</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Phone size={18} />
                </div>
                <span className="font-medium">+63 9077291142</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Tech background elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              
              {/* Hexagonal frame container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Server rack background simulation */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-blue-800/30 rounded-3xl"></div>
                <div className="absolute inset-4 border-2 border-cyan-400/30 rounded-2xl bg-blue-950/20"></div>
                
                {/* Hexagonal profile frame */}
                <div className="absolute top-8 left-8 right-8 bottom-8 hexagon-frame overflow-hidden border-4 border-cyan-400/50 bg-white shadow-2xl">
                  <img 
                    src={profileImage} 
                    alt="IT Support Professional" 
                    className="w-full h-full object-cover object-center scale-110"
                  />
                </div>
                
                {/* Tech indicators */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Floating tech elements */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-2 border-cyan-400/60 rotate-45 animate-bounce-gentle"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border border-blue-400/60 rounded-full float-animation" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;