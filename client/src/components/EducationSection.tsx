import { GraduationCap, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const education = [
  {
    degree: "Bachelor of Technology in Computer Science Engineering",
    institution: "Lovely Professional University",
    period: "Currently Pursuing",
    description:
      "Focusing on software development, data structures, algorithms, and building practical applications with Python and JavaScript.",
    animDir: "left" as const,
  },
  {
    degree: "Senior Secondary (12th)",
    institution: "RMS Academy",
    period: "2025",
    description:
      "Completed senior secondary education with 70% marks. Built a strong foundation in science and mathematics.",
    animDir: "right" as const,
  },
];

function EduCard({ item, index }: { item: typeof education[0]; index: number }) {
  const anim = useScrollAnimation<HTMLDivElement>({ direction: item.animDir, threshold: 0.12 });

  return (
    <div ref={anim.ref} style={anim.style}>
      <div
        className="bg-white rounded-2xl p-6 shadow-sm skill-card"
        data-testid={`card-education-${index}`}
      >
        <div className="flex items-center gap-2 mb-3" style={{ color: "hsl(220, 75%, 22%)" }}>
          <GraduationCap className="h-5 w-5" />
          <span className="font-mono text-sm font-medium">{item.institution}</span>
        </div>
        <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: "hsl(220, 60%, 17%)" }}>
          {item.degree}
        </h3>
        <div className="flex items-center gap-2 text-sm mb-3" style={{ color: "hsl(220, 20%, 46%)" }}>
          <Calendar className="h-4 w-4" />
          <span>{item.period}</span>
        </div>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "hsl(220, 20%, 46%)" }}>
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function EducationSection() {
  const headingAnim = useScrollAnimation<HTMLDivElement>({ direction: "up", threshold: 0.2 });

  return (
    <section
      id="education"
      className="py-20 md:py-28 px-4 sm:px-8"
      style={{ backgroundColor: "#dde6f5" }}
      data-testid="section-education"
    >
      <div className="content-wrap">
        <div ref={headingAnim.ref} style={headingAnim.style} className="text-center mb-16">
          <h2 className="section-heading" data-testid="text-education-title">Education</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5"
            style={{ backgroundColor: "hsl(220, 20%, 80%)" }}
          />
          {education.map((item, index) => (
            <div
              key={index}
              className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 gap-8 mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-2.5 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4"
                style={{ backgroundColor: "hsl(220, 75%, 22%)", borderColor: "#dde6f5" }}
              />
              <div className={index % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12"}>
                <EduCard item={item} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
