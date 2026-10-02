import { useState } from "react";
import {
  Award,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  ExternalLink,
  FolderKanban,
  GraduationCap,
  Home,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MonitorCog,
  Network,
  Phone,
  Server,
  ShieldCheck,
  UserRound,
  Wrench,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import microsoft365OvhAsset from "@/assets/microsoft-365-ovh-cloud.png.asset.json";
import mikrotikWinboxAsset from "@/assets/mikrotik-winbox-configuration.png.asset.json";

const profileImage = "/lovable-uploads/profile.png";
const portfolioUrl = "https://meljhon-tech-folio.lovable.app";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Experience", href: "#experience", icon: BriefcaseBusiness },
  { label: "Skills", href: "#skills", icon: Wrench },
  { label: "About", href: "#about", icon: UserRound },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Contact", href: "#contact", icon: Mail },
];

const tools = ["Microsoft 365", "Active Directory", "Entra ID", "Intune", "BMC Remedy", "Zendesk"];

const projects = [
  {
    title: "Microsoft 365 to OVH Cloud",
    role: "IT Support",
    description: "Domain, mail, and calendar integration for OVH email hosting with Microsoft 365.",
    image: `${portfolioUrl}${microsoft365OvhAsset.url}`,
    alt: "OVH Cloud and Microsoft 365 email hosting configuration",
    skills: ["Hosting Setup", "Microsoft 365", "Administrative Support"],
  },
  {
    title: "MikroTik WLAN & Hotspot",
    role: "Remote Support",
    description: "Step-by-step RouterBOARD WLAN and hotspot configuration through Winbox.",
    image: `${portfolioUrl}${mikrotikWinboxAsset.url}`,
    alt: "MikroTik RouterOS Winbox wireless network configuration",
    skills: ["MikroTik", "RouterBOARD", "RouterOS"],
  },
];

const experience = [
  {
    role: "Independent IT Support Specialist",
    company: "Upwork",
    period: "2025 — Present",
    track: "IT Support",
    bullets: [
      "Deliver remote IT support for hardware, software, VPN, firewall, and network connectivity issues",
      "Administer Microsoft 365 and Google Workspace accounts, permissions, and security policies",
      "Run system updates, data backups, and security audits while keeping documentation and SOPs current",
    ],
  },
  {
    role: "Board Administrative Assistant",
    company: "Boundless Freedom Project",
    period: "2025 — 2026",
    track: "Operations",
    bullets: [
      "Maintained technical and administrative records, secure digital communication, and board documentation",
      "Supported leadership with software access, digital workspace coordination, and technical troubleshooting",
    ],
  },
  {
    role: "IT Support Engineer",
    company: "Bladegrass Technologies / Concentrix",
    period: "2025",
    track: "IT Support",
    bullets: [
      "Resolved 50+ weekly incidents and service requests in BMC Remedy across PC, network, software, and telephony",
      "Imaged, configured, and deployed 200+ Windows 11 desktops, cutting setup time by roughly 30%",
      "Handled Active Directory OU moves, Entra ID and Intune compliance, access provisioning, and asset tracking",
    ],
  },
  {
    role: "IT Technical Support",
    company: "E&W Group of Companies",
    period: "2023 — 2025",
    track: "IT Support",
    bullets: [
      "Provided Tier 1 and Tier 2 remote and onsite support for websites, servers, POS systems, QNAP NAS, CCTV, and endpoints",
      "Diagnosed hardware, software, connectivity, and performance issues to keep daily operations running",
      "Managed the full IT asset lifecycle: inventory, hardware upgrades, and infrastructure maintenance",
    ],
  },
  {
    role: "Passport / Authentication Staff",
    company: "Department of Foreign Affairs",
    period: "2022 — 2023",
    track: "Administration",
    bullets: [
      "Assisted the internal IT officer with hardware and software troubleshooting and digital records maintenance",
      "Processed authentication applications in strict compliance with data privacy and security protocols",
    ],
  },
];

const skillGroups = [
  { icon: Server, title: "Systems", items: "Microsoft 365 · Active Directory · Entra ID · Intune · QNAP NAS" },
  { icon: Network, title: "Network & Security", items: "TCP/IP · LAN/WAN/VLAN · VPN · Firewalls · Access management" },
  { icon: MonitorCog, title: "Service Desk", items: "BMC Remedy · Zendesk · Jira · Remote support · Incident resolution" },
  { icon: ClipboardList, title: "Admin & Operations", items: "Records · Board documents · Scheduling · Data privacy · SOPs" },
];

const certifications = [
  { title: "Rekruuto Level 1 Virtual Assistant", issuer: "Rekruuto", date: "July 2025" },
  { title: "Attention to Detail Level 2", issuer: "Rekruuto", date: "July 2025" },
  { title: "Introduction to Programming Using Java", issuer: "Microsoft MTA", date: "Certified" },
];

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const SectionHeading = ({ icon: Icon, title, subtitle }: { icon: typeof Home; title: string; subtitle: string }) => (
  <div className="mb-5 flex items-start gap-3">
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
      <Icon className="h-5 w-5" />
    </span>
    <div>
      <h2 className="text-xl font-bold text-foreground">{title}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
    </div>
  </div>
);

const PortfolioDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (href: string) => {
    scrollTo(href);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-card/95 px-5 backdrop-blur lg:hidden">
        <button type="button" onClick={() => handleNavigate("#home")} className="text-lg font-extrabold text-foreground" aria-label="Go to top">
          MJD<span className="text-primary">.</span>
        </button>
        <Button variant="ghost" size="icon" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
        {menuOpen && (
          <nav className="absolute left-4 right-4 top-[4.5rem] rounded-lg border border-border bg-card p-2 shadow-card">
            {navItems.map(({ label, href, icon: Icon }) => (
              <Button key={href} variant="ghost" className="w-full justify-start gap-3" onClick={() => handleNavigate(href)}>
                <Icon className="h-4 w-4 text-primary" /> {label}
              </Button>
            ))}
          </nav>
        )}
      </header>

      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[280px] flex-col border-r border-border bg-card px-7 py-9 lg:flex">
        <div className="text-center">
          <div className="mx-auto h-36 w-36 overflow-hidden rounded-full border-4 border-card bg-muted shadow-profile ring-1 ring-border">
            <img src={profileImage} alt="Meljhon Deaño" className="h-full w-full object-cover object-center" />
          </div>
          <div className="mt-5 flex items-center justify-center gap-2">
            <h2 className="text-2xl font-extrabold text-foreground">Meljhon Deaño</h2>
            <CheckCircle2 className="h-5 w-5 fill-primary text-primary-foreground" />
          </div>
          <p className="mt-1 text-sm font-medium text-muted-foreground">IT Support · Admin & Operations</p>
          <p className="mt-2 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" /> Davao City, Philippines
          </p>
        </div>

        <div className="my-7 grid grid-cols-3 gap-2 border-y border-border py-5">
          <a href="mailto:deanomeljohn67@gmail.com" aria-label="Email Meljhon" className="sidebar-social"><Mail className="h-4 w-4" /></a>
          <a href="tel:+639077291142" aria-label="Call Meljhon" className="sidebar-social"><Phone className="h-4 w-4" /></a>
          <a href="https://linkedin.com/in/meljohn357" target="_blank" rel="noreferrer" aria-label="Meljhon on LinkedIn" className="sidebar-social"><Linkedin className="h-4 w-4" /></a>
        </div>

        <nav className="space-y-1">
          {navItems.map(({ label, href, icon: Icon }, index) => (
            <Button
              key={href}
              variant="ghost"
              onClick={() => handleNavigate(href)}
              className={`w-full justify-start gap-3 px-4 text-[15px] ${index === 0 ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}
            >
              <Icon className="h-4 w-4" /> {label}
            </Button>
          ))}
        </nav>

        <div className="mt-auto border-t border-border pt-5">
          <p className="text-xs text-muted-foreground">Available for remote opportunities</p>
          <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
            <span className="h-2.5 w-2.5 rounded-full bg-success" /> Open to work
          </span>
        </div>
      </aside>

      <main className="pt-16 lg:ml-[280px] lg:pt-0">
        <div className="mx-auto max-w-[1320px] px-4 py-8 sm:px-7 lg:px-10 lg:py-12">
          <section id="home" className="scroll-mt-20 lg:scroll-mt-6">
            <div className="flex flex-col gap-7 xl:flex-row xl:items-start xl:justify-between">
              <div className="max-w-4xl">
                <p className="mb-3 text-sm font-bold uppercase text-primary">IT Support · Administrative Operations</p>
                <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
                  Reliable systems. Organized operations.
                </h1>
                <p className="mt-5 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
                  I help teams stay productive through responsive IT support, endpoint management, secure administration, and dependable operations support.
                </p>
              </div>
              <Button size="lg" onClick={() => scrollTo("#contact")} className="shrink-0 gap-2 px-6 shadow-card">
                Get in touch <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-7 flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-card xl:flex-row xl:items-center">
              <div className="shrink-0 border-b border-border px-5 py-4 xl:w-48 xl:border-b-0 xl:border-r">
                <p className="text-xs font-bold uppercase text-primary">Daily drivers</p>
                <p className="mt-1 font-bold text-foreground">Tools I work with</p>
              </div>
              <div className="flex min-w-0 flex-1 overflow-x-auto">
                {tools.map((tool) => (
                  <span key={tool} className="flex min-w-max flex-1 items-center justify-center border-r border-border px-5 py-5 text-sm font-semibold text-foreground last:border-r-0">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <div className="mt-7 rounded-xl border border-primary/20 bg-primary/5 p-3 sm:p-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 xl:grid-cols-12">
              <section id="projects" className="bento-card scroll-mt-24 md:col-span-6 xl:col-span-7">
                <SectionHeading icon={FolderKanban} title="Selected Projects" subtitle="Real support and configuration work." />
                <div className="grid gap-4 sm:grid-cols-2">
                  {projects.map((project) => (
                    <Dialog key={project.title}>
                      <DialogTrigger asChild>
                        <Button variant="ghost" className="group h-auto min-h-0 flex-col items-stretch overflow-hidden rounded-md border border-border bg-background p-0 text-left hover:bg-background">
                          <span className="block aspect-[16/9] overflow-hidden bg-muted p-2">
                            <img src={project.image} alt={project.alt} className="h-full w-full rounded-sm object-contain transition-transform duration-300 group-hover:scale-[1.02]" />
                          </span>
                          <span className="block whitespace-normal p-4">
                            <span className="text-xs font-bold uppercase text-primary">{project.role}</span>
                            <span className="mt-1 block text-base font-bold text-foreground">{project.title}</span>
                            <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">{project.description}</span>
                          </span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="flex max-h-[94vh] w-[96vw] max-w-7xl flex-col overflow-hidden p-0">
                        <DialogHeader className="border-b border-border px-5 py-4 pr-12 text-left">
                          <DialogTitle>{project.title}</DialogTitle>
                          <DialogDescription>{project.description}</DialogDescription>
                        </DialogHeader>
                        <div className="overflow-auto bg-muted p-3 sm:p-6">
                          <img src={project.image} alt={project.alt} className="mx-auto h-auto max-h-[76vh] w-auto max-w-full rounded-md border border-border bg-card shadow-card" />
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </section>

              <section id="about" className="bento-card scroll-mt-24 md:col-span-3 xl:col-span-5">
                <SectionHeading icon={UserRound} title="About" subtitle="Technical reliability with operational discipline." />
                <p className="text-sm leading-7 text-muted-foreground">
                  IT support and administrative professional with 4+ years across technical support, endpoint management, records handling, scheduling, and executive support.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="metric-tile"><strong>4+</strong><span>Years experience</span></div>
                  <div className="metric-tile"><strong>50+</strong><span>Weekly tickets resolved</span></div>
                  <div className="metric-tile"><strong>200+</strong><span>Windows devices deployed</span></div>
                  <div className="metric-tile"><strong>2</strong><span>Professional tracks</span></div>
                </div>
              </section>

              <section id="experience" className="bento-card scroll-mt-24 md:col-span-3 xl:col-span-5">
                <SectionHeading icon={BriefcaseBusiness} title="Experience" subtitle="IT support and administrative operations." />
                <div className="divide-y divide-border">
                  {experience.map((item) => (
                    <div key={`${item.company}-${item.role}`} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-bold text-foreground">{item.role}</p>
                          <p className="mt-1 text-xs text-muted-foreground">{item.company}</p>
                        </div>
                        <Badge variant="secondary" className="shrink-0">{item.track}</Badge>
                      </div>
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground"><CalendarDays className="h-3 w-3 text-primary" />{item.period}</p>
                      <ul className="mt-2.5 space-y-1.5">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                            <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-[2px] bg-primary" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section id="skills" className="bento-card scroll-mt-24 md:col-span-6 xl:col-span-7">
                <SectionHeading icon={Wrench} title="Core Capabilities" subtitle="The tools and workflows behind dependable support." />
                <div className="grid gap-3 sm:grid-cols-2">
                  {skillGroups.map(({ icon: Icon, title, items }) => (
                    <div key={title} className="rounded-md border border-border bg-background p-4">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary"><Icon className="h-4 w-4" /></span>
                        <h3 className="text-sm font-bold text-foreground">{title}</h3>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">{items}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="education" className="bento-card scroll-mt-24 md:col-span-3 xl:col-span-4">
                <SectionHeading icon={GraduationCap} title="Education" subtitle="Academic foundation in technology." />
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-foreground">Information Technology</p>
                    <p className="mt-1 text-sm text-muted-foreground">University of Mindanao · 2019–2021</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-foreground">Senior High School — ICT</p>
                    <p className="mt-1 text-sm text-muted-foreground">University of Mindanao · 2017–2019</p>
                  </div>
                </div>
              </section>

              <section className="bento-card md:col-span-3 xl:col-span-4">
                <SectionHeading icon={Award} title="Credentials" subtitle="Professional certifications." />
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert.title} className="rounded-md border border-border bg-background p-3">
                      <p className="text-sm font-bold text-foreground">{cert.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{cert.issuer} · {cert.date}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="contact" className="bento-card scroll-mt-24 md:col-span-6 xl:col-span-4">
                <SectionHeading icon={Mail} title="Let’s Work Together" subtitle="Available for remote IT and operations support." />
                <p className="text-sm leading-6 text-muted-foreground">Need dependable technical support or organized administrative assistance? Let’s discuss your priorities.</p>
                <div className="mt-5 space-y-2.5">
                  <a className="contact-row" href="mailto:deanomeljohn67@gmail.com"><Mail className="h-4 w-4" /><span>Email me</span><ExternalLink className="ml-auto h-3.5 w-3.5" /></a>
                  <a className="contact-row" href="tel:+639077291142"><Phone className="h-4 w-4" /><span>+63 907 729 1142</span></a>
                  <a className="contact-row" href="https://linkedin.com/in/meljohn357" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /><span>LinkedIn profile</span><ExternalLink className="ml-auto h-3.5 w-3.5" /></a>
                </div>
              </section>
            </div>
          </div>

          <footer className="flex flex-col gap-2 px-2 py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Meljhon Deaño</p>
            <p className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-primary" /> IT Support · Administrative Operations</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default PortfolioDashboard;