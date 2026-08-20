import { Github, ExternalLink, BookOpen, HeartPulse, BarChart3, Palette, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Project = {
  title: string;
  description: string;
  tech: string[];
  icon: typeof BookOpen;
  github: string;
  liveUrl?: string;
  badge?: string;
  animDir: "left" | "right";
};

const projects: Project[] = [
  {
    title: "Campus Connect",
    description:
      "A group project full-stack academic resource platform for university students, built with a teammate. Features Next.js 16, React 19, TypeScript, and Tailwind CSS with Google OAuth (NextAuth) and Firebase for authentication. Provides subject PPTs, E-Textbooks, and course resources.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "NextAuth", "Firebase"],
    icon: BookOpen,
    github: "https://github.com/devpandey347",
    liveUrl: "https://campus-connect-lpu.vercel.app/",
    badge: "Group Project",
    animDir: "left",
  },
  {
    title: "Last Minute Life Saver",
    description:
      "MERN-stack emergency assistance platform for quick access to critical resources. Features a responsive, one-click interface prioritizing speed during critical situations with planned Geolocation and Google Maps API integration.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Geolocation API"],
    icon: HeartPulse,
    github: "https://github.com/devpandey347",
    liveUrl: "https://devpandey347.github.io/Vibe2Ship-The-Last-Minute-Life-Saver/",
    badge: "Vibe2Ship Project",
    animDir: "right",
  },
  {
    title: "Exploratory Data Analysis Projects",
    description:
      "Applied Pandas and Matplotlib/Seaborn to derive insights from sample datasets in coursework. Cleaned and transformed raw datasets into Pandas DataFrames, constructed visualizations (bar charts, histograms, heatmaps), and identified key trends and outliers.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
    icon: BarChart3,
    github: "https://github.com/devpandey347",
    animDir: "left",
  },
  {
    title: "Red Dead Redemption II — UI/UX Experience",
    description:
      "Cinematic, scroll-first landing page built when exploring website designing as an open-source UI/UX design reference. Designed a cinematic hero section with split-screen character-spotlight layouts and dark editorial typography.",
    tech: ["HTML5", "CSS3", "JavaScript", "UI/UX Design"],
    icon: Palette,
    github: "https://github.com/devpandey347",
    liveUrl: "https://devpandey347.github.io/Red-Dead-Redemption-2-UI-UX/",
    animDir: "right",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const anim = useScrollAnimation<HTMLDivElement>({ direction: project.animDir, threshold: 0.12 });

  return (
    <div
      ref={anim.ref}
      style={anim.style}
      className="bg-white rounded-2xl p-8 shadow-sm skill-card relative flex flex-col justify-between"
      data-testid={`card-project-${index}`}
    >
      <div>
        {project.badge && (
          <div
            className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
            style={{ backgroundColor: "hsl(220, 60%, 95%)", color: "hsl(220, 75%, 22%)" }}
          >
            <Users className="h-3 w-3" />
            {project.badge}
          </div>
        )}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="p-3 rounded-xl" style={{ backgroundColor: "hsl(220, 60%, 95%)", color: "hsl(220, 75%, 22%)" }}>
            <project.icon className="h-6 w-6" />
          </div>
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
                style={{ backgroundColor: "hsl(220, 75%, 22%)", color: "#ffffff" }}
                title="Live Demo"
                data-testid={`link-project-live-${index}`}
              >
                Live Demo
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors hover:bg-[hsl(220,30%,92%)]"
              title="GitHub Repository"
              data-testid={`link-project-github-${index}`}
            >
              <Github className="h-5 w-5" style={{ color: "hsl(220, 40%, 30%)" }} />
            </a>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2" style={{ color: "hsl(220, 60%, 17%)" }} data-testid={`text-project-title-${index}`}>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1.5"
            >
              {project.title}
              <ExternalLink className="h-4 w-4 opacity-70" />
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: "hsl(220, 20%, 46%)" }}>
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 pt-2">
        {project.tech.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-3 py-1 text-xs font-mono font-medium rounded-full"
            style={{ backgroundColor: "hsl(220, 60%, 95%)", color: "hsl(220, 75%, 22%)" }}
            data-testid={`badge-tech-${index}-${techIndex}`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const headingAnim = useScrollAnimation<HTMLDivElement>({ direction: "up", threshold: 0.2 });
  const footerAnim = useScrollAnimation<HTMLDivElement>({ direction: "up", threshold: 0.2 });

  return (
    <section
      id="projects"
      className="py-20 md:py-28 px-4 sm:px-8"
      style={{ backgroundColor: "#dde6f5" }}
      data-testid="section-projects"
    >
      <div className="content-wrap">
        <div ref={headingAnim.ref} style={headingAnim.style} className="text-center mb-16">
          <h2 className="section-heading" data-testid="text-projects-title">Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        <div ref={footerAnim.ref} style={footerAnim.style} className="text-center mt-12">
          <a
            href="https://github.com/devpandey347"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-md"
            style={{ borderColor: "hsl(220, 75%, 22%)", color: "hsl(220, 75%, 22%)" }}
            data-testid="button-more-projects"
          >
            View More on GitHub
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

