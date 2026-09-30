import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CalendarDays, Cloud, Eye, Router, ShieldCheck } from "lucide-react";
import microsoft365OvhAsset from "@/assets/microsoft-365-ovh-cloud.png.asset.json";
import mikrotikWinboxAsset from "@/assets/mikrotik-winbox-configuration.png.asset.json";

const projects = [
  {
    title: "Microsoft 365 to OVH Cloud",
    role: "IT Support",
    description:
      "Connected OVH email hosting with a Microsoft 365 license, including domain, mail, and calendar integration.",
    skills: ["Hosting Setup", "Microsoft Windows", "Microsoft Office", "Administrative Support"],
    published: "October 16, 2025",
    image: microsoft365OvhAsset.url,
    imageAlt: "OVH Cloud and Microsoft 365 email hosting configuration in progress",
    icon: Cloud,
  },
  {
    title: "MikroTik WLAN/Hotspot Configuration via Winbox",
    role: "Remote Support",
    description:
      "Completed a step-by-step configuration of a MikroTik RouterBOARD WLAN and hotspot through Winbox.",
    skills: ["MikroTik", "MikroTik RouterBOARD", "MikroTik RouterOS"],
    published: "October 16, 2025",
    image: mikrotikWinboxAsset.url,
    imageAlt: "MikroTik RouterOS Winbox wireless network configuration screens",
    icon: Router,
  },
];

const Works = () => {
  return (
    <section id="works" className="scroll-mt-20 bg-gradient-to-br from-background via-muted/20 to-accent/30 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <ShieldCheck className="h-4 w-4" />
            Selected technical projects
          </div>
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">View My Work</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Practical remote support, cloud email, and network configuration work.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="overflow-hidden rounded-lg border border-border-card bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className={`group relative min-h-[260px] overflow-hidden bg-muted text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:min-h-[430px] ${
                          index % 2 === 1 ? "lg:order-2" : ""
                        }`}
                        aria-label={`View ${project.title} screenshot`}
                      >
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                        <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-md bg-foreground/90 px-3 py-2 text-sm font-medium text-background shadow-card">
                          <Eye className="h-4 w-4" />
                          View screenshot
                        </span>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-h-[92vh] max-w-[94vw] overflow-auto p-3 sm:p-5">
                      <DialogHeader className="pr-8">
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription>{project.imageAlt}</DialogDescription>
                      </DialogHeader>
                      <img src={project.image} alt={project.imageAlt} className="h-auto w-full rounded-md border border-border" />
                    </DialogContent>
                  </Dialog>

                  <div className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="mb-2 text-sm font-semibold uppercase text-primary">My role · {project.role}</p>
                    <h3 className="mb-4 text-2xl font-bold text-card-foreground md:text-3xl">{project.title}</h3>
                    <p className="mb-6 leading-relaxed text-muted-foreground">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="mb-3 text-sm font-semibold text-card-foreground">Skills and deliverables</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="px-3 py-1">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                      <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4 text-primary" />
                        Published {project.published}
                      </span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="gap-2">
                            <Eye className="h-4 w-4" />
                            View details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-h-[92vh] max-w-[94vw] overflow-auto p-3 sm:p-5">
                          <DialogHeader className="pr-8">
                            <DialogTitle>{project.title}</DialogTitle>
                            <DialogDescription>{project.description}</DialogDescription>
                          </DialogHeader>
                          <img src={project.image} alt={project.imageAlt} className="h-auto w-full rounded-md border border-border" />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;