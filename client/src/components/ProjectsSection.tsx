import { Github, ExternalLink, MessageSquare, BookOpen, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Material Repository",
    description:
      "A study material sharing website for students to access notes and resources. Built using my prompting skills with GitHub Copilot and Antigravity. Currently serving 200+ regular users who rely on it for their academic needs.",
    tech: ["HTML", "CSS", "JavaScript", "GitHub Copilot", "Antigravity"],
    icon: BookOpen,
    github: "https://github.com/devpandey347",
    badge: "200+ Users",
    animDir: "left" as const,
  },
  {
    title: "NLTK Chatbot",
    description:
      "A conversational chatbot created using Python and NLTK. Uses tokenization and pattern matching to respond to user queries intelligently.",
    tech: ["Python", "NLTK"],
    icon: MessageSquare,
    github: "https://github.com/devpandey347",
    animDir: "right" as const,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const anim = useScrollAnimation<HTMLDivElement>({ direction: project.animDir, threshold: 0.12 });

  return (
    <div
      ref={anim.ref}
      style={anim.style}
      className="bg-white rounded-2xl p-8 shadow-sm skill-card relative"
      data-testid={`card-project-${index}`}
    >
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
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg transition-colors hover:bg-[hsl(220,30%,92%)]"
          data-testid={`link-project-github-${index}`}
        >
          <Github className="h-5 w-5" style={{ color: "hsl(220, 40%, 30%)" }} />
        </a>
      </div>
      <h3 className="text-xl font-bold mb-2" style={{ color: "hsl(220, 60%, 17%)" }} data-testid={`text-project-title-${index}`}>
        {project.title}
      </h3>
      <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: "hsl(220, 20%, 46%)" }}>
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
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
