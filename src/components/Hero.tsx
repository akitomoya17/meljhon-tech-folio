import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
const profileImage = "/lovable-uploads/ad59d6f4-d59f-4380-bb7d-cacaa143005d.png";

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
    <section className="min-h-screen bg-hero-gradient flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-text mb-6">
              Meljhon Deaño
            </h1>
            <p className="text-xl md:text-2xl text-hero-text-muted mb-6">
              IT Support | Technical Support | Support Engineer
            </p>
            <p className="text-lg text-hero-text-muted mb-8 leading-relaxed">
              IT Support professional with 3+ years of experience in both government and private sectors. 
              Skilled in troubleshooting hardware, software, and network issues, managing IT requests, 
              and maintaining reliable system operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg"
              >
                Work With Me
              </Button>
              <Button 
                onClick={scrollToExperience}
                variant="outline" 
                className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg"
              >
                View My Work
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-hero-text-muted">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <MapPin size={18} />
                <span>Davao City, Philippines</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Phone size={18} />
                <span>+63 9077291142</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Meljhon Deaño" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;