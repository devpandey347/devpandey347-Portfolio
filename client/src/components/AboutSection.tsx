import { Code2, Lightbulb, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  { icon: Code2, title: "Builder", description: "Creating functional projects that solve real problems" },
  { icon: Lightbulb, title: "Learner", description: "Constantly exploring new technologies and frameworks" },
  { icon: Target, title: "Focused", description: "Committed to writing clean, efficient code" },
];

export default function AboutSection() {
  const headingAnim = useScrollAnimation<HTMLDivElement>({ direction: "up", threshold: 0.2 });
  const textAnim = useScrollAnimation<HTMLDivElement>({ direction: "left", threshold: 0.15 });
  const cardsAnim = useScrollAnimation<HTMLDivElement>({ direction: "right", threshold: 0.15 });

  return (
    <section
      id="about"
      className="py-20 md:py-28 px-4 sm:px-8"
      style={{ backgroundColor: "#dde6f5" }}
      data-testid="section-about"
    >
      <div className="content-wrap">
        <div ref={headingAnim.ref} style={headingAnim.style} className="text-center mb-16">
          <h2 className="section-heading" data-testid="text-about-title">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio — slides from left */}
          <div ref={textAnim.ref} style={textAnim.style} className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: "hsl(220, 20%, 40%)" }} data-testid="text-bio">
              A motivated CSE student who enjoys building simple, functional projects
              using Python and JavaScript. Comfortable working in VS Code, Replit,
              Jupyter Notebook, Git/GitHub, and Google Colab to prototype and iterate fast.
            </p>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: "hsl(220, 20%, 40%)" }}>
              Every project teaches me something new, and I'm constantly improving
              my skills, step by step. My journey in tech started with curiosity,
              and now it's fueled by a genuine passion for problem-solving.
            </p>
            <blockquote
              className="border-l-4 pl-6 py-2 italic"
              style={{ borderColor: "hsl(220, 75%, 22%)", color: "hsl(220, 50%, 30%)" }}
            >
              "Failure taught me. Passion fuels me. Code defines me."
            </blockquote>
          </div>

          {/* Highlight cards — slides from right */}
          <div ref={cardsAnim.ref} style={cardsAnim.style} className="grid gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm skill-card"
                data-testid={`card-highlight-${index}`}
              >
                <div
                  className="p-3 rounded-xl flex-shrink-0"
                  style={{ backgroundColor: "hsl(220, 60%, 95%)", color: "hsl(220, 75%, 22%)" }}
                >
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1" style={{ color: "hsl(220, 60%, 17%)" }}>{item.title}</h3>
                  <p style={{ color: "hsl(220, 20%, 46%)" }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
