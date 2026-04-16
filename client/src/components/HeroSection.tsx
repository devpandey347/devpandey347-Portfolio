import { Github, Linkedin, Star } from "lucide-react";
import { SiX, SiInstagram, SiGeeksforgeeks, SiReddit } from "react-icons/si";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/devpandey347", icon: Github, bg: "#333" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/devpandey347", icon: Linkedin, bg: "#0077B5" },
  { name: "X", href: "https://x.com/devpandey347", icon: SiX, bg: "#000" },
  { name: "Instagram", href: "https://instagram.com/devpandey347", icon: SiInstagram, bg: "#E4405F" },
  { name: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/profile/devpandey347", icon: SiGeeksforgeeks, bg: "#2F8D46" },
  { name: "Reddit", href: "https://reddit.com/user/devpandey347", icon: SiReddit, bg: "#FF5700" },
];

export default function HeroSection() {
  const textAnim = useScrollAnimation<HTMLDivElement>({ direction: "left", threshold: 0.1 });
  const imageAnim = useScrollAnimation<HTMLDivElement>({ direction: "right", threshold: 0.1 });
  const profileImage = `${import.meta.env.BASE_URL}certifications/Profile_Image.jpg`;

  return (
    <section
      id="home"
      className="min-h-screen px-5 sm:px-10 lg:px-14 pt-24 pb-12"
      style={{ backgroundColor: "#dde6f5" }}
      data-testid="section-hero"
    >
      <div className="content-wrap min-h-[calc(100vh-96px)] flex items-center w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center w-full">

          {/* LEFT — Text content — slides from left */}
          <div ref={textAnim.ref} style={textAnim.style} className="flex flex-col items-start gap-5">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              style={{ color: "hsl(220, 60%, 17%)" }}
              data-testid="text-name"
            >
              Dev Pandey
            </h1>
            <p
              className="text-lg md:text-xl italic font-medium"
              style={{ color: "hsl(220, 50%, 35%)" }}
              data-testid="text-greeting"
            >
              ( devpandey347 )
            </p>
            <p
              className="text-xl md:text-2xl leading-relaxed max-w-2xl"
              style={{ color: "hsl(220, 20%, 35%)" }}
              data-testid="text-role"
            >
              A Computer Science student dedicated to building functional, scalable solutions—specializing in turning complex ideas into clean, executable code that delivers real impact.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-1">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{ backgroundColor: link.bg }}
                  title={link.name}
                  data-testid={`link-social-${link.name.toLowerCase()}`}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <a
              href="https://github.com/devpandey347"
              target="_blank"
              rel="noopener noreferrer"
              className="star-button mt-1"
              data-testid="button-star-github"
            >
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              Star Me On Github
            </a>
          </div>

          {/* RIGHT — Profile image — slides from right */}
          <div ref={imageAnim.ref} style={imageAnim.style} className="flex items-center justify-center lg:justify-end">
            <div className="animate-float rounded-full p-2 md:p-3" style={{ backgroundColor: "hsl(220, 60%, 95%)" }}>
              <img
                src={profileImage}
                alt="Dev Pandey profile photo"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white shadow-2xl"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
