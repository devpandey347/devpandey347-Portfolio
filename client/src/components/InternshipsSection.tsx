import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Internship {
  company: string;
  role: string;
  period: string;
  location: string;
  status: "current" | "completed";
  issuedBy?: string;
  description: string;
  skills: string[];
  animDir: "left" | "right";
  accentColor: string;
  logo: string;
}

const internships: Internship[] = [
  {
    company: "YuvaIntern",
    role: "Virtual Data Science with Python Trainee",
    period: "Jul 30, 2026 – Sep 10, 2026",
    location: "Remote",
    status: "current",
    issuedBy: "National Skill Development Corporation (NSDC)",
    description:
      "Hands-on data science internship working with real-world datasets under experienced mentors. Focused on cleaning, manipulating, and analysing data, plus creating compelling visual stories using Python-based visualization tools. Delivering project-based assignments and interactive virtual sessions.",
    skills: ["Python", "Data Analysis", "Data Visualization", "Pandas", "Matplotlib"],
    animDir: "left",
    accentColor: "hsl(220, 75%, 22%)",
    logo: "YI",
  },
  {
    company: "Deloitte",
    role: "Technology Job Simulation",
    period: "June 2026",
    location: "Virtual (Forage)",
    status: "completed",
    issuedBy: "Forage",
    description:
      "Completed Deloitte's Technology Job Simulation on Forage, tackling practical tasks in Coding and Development under the guidance of Deloitte professionals. Gained real-world exposure to how technology consulting teams approach software problems.",
    skills: ["Python Programming", "Problem Solving", "Debugging", "Code Review"],
    animDir: "right",
    accentColor: "hsl(198, 90%, 35%)",
    logo: "D.",
  },
];

function InternCard({ item, index }: { item: Internship; index: number }) {
  const anim = useScrollAnimation<HTMLDivElement>({ direction: item.animDir, threshold: 0.12 });

  return (
    <div ref={anim.ref} style={anim.style}>
      <div
        className="bg-white rounded-2xl p-6 shadow-sm skill-card relative overflow-hidden"
        data-testid={`card-internship-${index}`}
      >
        {/* Accent bar */}
        <div
          className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
          style={{ backgroundColor: item.accentColor }}
        />

        {/* Status badge + Logo row */}
        <div className="flex items-start justify-between mb-4 pl-2">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg select-none shrink-0"
            style={{ backgroundColor: item.accentColor }}
          >
            {item.logo}
          </div>

          {item.status === "current" ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 border border-green-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Current
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              ✓ Completed
            </span>
          )}
        </div>

        <div className="pl-2">
          {/* Company */}
          <div className="flex items-center gap-2 mb-1" style={{ color: item.accentColor }}>
            <Briefcase className="h-4 w-4 shrink-0" />
            <span className="font-mono text-sm font-semibold">{item.company}</span>
            {item.issuedBy && (
              <span className="text-xs text-gray-400 font-normal">· via {item.issuedBy}</span>
            )}
          </div>

          {/* Role */}
          <h3
            className="text-lg md:text-xl font-bold mb-3"
            style={{ color: "hsl(220, 60%, 17%)" }}
          >
            {item.role}
          </h3>

          {/* Period & Location */}
          <div className="flex flex-wrap gap-4 text-sm mb-4" style={{ color: "hsl(220, 20%, 46%)" }}>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 shrink-0" />
              <span>{item.period}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span>{item.location}</span>
            </div>
          </div>

          {/* Description */}
          <p
            className="text-sm md:text-base leading-relaxed mb-4"
            style={{ color: "hsl(220, 20%, 46%)" }}
          >
            {item.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: `${item.accentColor}15`,
                  color: item.accentColor,
                  border: `1px solid ${item.accentColor}30`,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InternshipsSection() {
  const headingAnim = useScrollAnimation<HTMLDivElement>({ direction: "up", threshold: 0.2 });

  return (
    <section
      id="internships"
      className="py-20 md:py-28 px-4 sm:px-8"
      style={{ backgroundColor: "#dde6f5" }}
      data-testid="section-internships"
    >
      <div className="content-wrap">
        <div ref={headingAnim.ref} style={headingAnim.style} className="text-center mb-16">
          <h2 className="section-heading" data-testid="text-internships-title">
            Internships
          </h2>
          <p className="mt-3 text-base md:text-lg" style={{ color: "hsl(220, 20%, 46%)" }}>
            Real-world experience and industry exposure
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5"
            style={{ backgroundColor: "hsl(220, 20%, 80%)" }}
          />
          {internships.map((item, index) => (
            <div
              key={index}
              className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 gap-8 mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-2.5 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4"
                style={{ backgroundColor: item.accentColor, borderColor: "#dde6f5" }}
              />
              <div className={index % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12"}>
                <InternCard item={item} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
