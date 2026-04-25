import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiLinux,
  SiReplit,
  SiNumpy,
  SiJupyter,
  SiC,
  SiPostgresql,
} from "react-icons/si";
import { FaApple, FaWindows } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Skills",
    color: "hsl(220, 75%, 22%)",
    icons: [
      { icon: SiHtml5, color: "#E34F26", name: "HTML" },
      { icon: SiCss, color: "#1572B6", name: "CSS" },
      { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
      { icon: SiPython, color: "#3776AB", name: "Python" },
      { icon: SiC, color: "#A8B9CC", name: "C" },
      { icon: SiNumpy, color: "#013243", name: "NumPy" },
      { icon: SiPostgresql, color: "#4169E1", name: "PostgreSQL" },
    ],
    bullets: [
      "Building responsive websites with HTML, CSS & JavaScript",
      "Writing automation scripts and data programs with Python & C",
      "Numerical computing  with NumPy",
      "Database management and querying with PostgreSQL",
    ],
    animDir: "left" as const,
  },
  {
    title: "Developer Tools",
    color: "hsl(190, 60%, 40%)",
    icons: [
      { icon: SiGit, color: "#F05032", name: "Git" },
      { icon: SiGithub, color: "#181717", name: "GitHub" },
      { icon: SiReplit, color: "#F26207", name: "Replit" },
      { icon: VscCode, color: "#007ACC", name: "VS Code" },
      { icon: SiJupyter, color: "#F37626", name: "Jupyter" }
    ],
    bullets: [
      "Version control with Git and GitHub for collaboration",
      "Rapid prototyping on Replit and coding in VS Code",
      "Data science workflows in Jupyter Notebook on Google Cloud",
    ],
    animDir: "right" as const,
  },
  {
    title: "Operating Systems",
    color: "hsl(210, 65%, 40%)",
    icons: [
      { icon: FaWindows, color: "#0078D6", name: "Windows 11" },
      { icon: FaApple, color: "#111111", name: "macOS" },
      { icon: SiLinux, color: "#FCC624", name: "Linux" },
    ],
    bullets: [
      "Comfortable working in Windows 11 environment",
      "Familiar with macOS workflow and tooling",
      "Experience with Linux command line and tools",
      "Cross-platform development and testing",
    ],
    animDir: "left" as const,
  },
];

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const anim = useScrollAnimation<HTMLDivElement>({ direction: category.animDir, threshold: 0.12 });

  return (
    <div
      ref={anim.ref}
      style={anim.style}
      className="skill-card bg-white rounded-2xl p-8 md:p-10 shadow-sm"
      data-testid={`card-skill-category-${index}`}
    >
      <h3 className="text-xl md:text-2xl font-bold text-center mb-6" style={{ color: category.color }}>
        {category.title}
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
        {category.icons.map((tech, iconIndex) => (
          <div key={iconIndex} className="group flex flex-col items-center gap-1" title={tech.name}>
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110">
              <tech.icon className="w-8 h-8 md:w-10 md:h-10" style={{ color: tech.color }} />
            </div>
            <span className="text-xs font-medium" style={{ color: "hsl(220, 20%, 46%)" }}>{tech.name}</span>
          </div>
        ))}
      </div>
      <div className="space-y-3 max-w-xl mx-auto">
        {category.bullets.map((bullet, bulletIndex) => (
          <p
            key={bulletIndex}
            className="text-sm md:text-base leading-relaxed lightning-bullet"
            style={{ color: "hsl(220, 20%, 40%)" }}
            data-testid={`badge-skill-${index}-${bulletIndex}`}
          >
            {bullet}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const headingAnim = useScrollAnimation<HTMLDivElement>({ direction: "up", threshold: 0.2 });

  return (
    <section
      id="skills"
      className="py-20 md:py-28 px-4 sm:px-8"
      style={{ backgroundColor: "#dde6f5" }}
      data-testid="section-skills"
    >
      <div className="content-wrap">
        <div ref={headingAnim.ref} style={headingAnim.style} className="text-center mb-16">
          <h2 className="section-heading" data-testid="text-skills-title">What I Do?</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
