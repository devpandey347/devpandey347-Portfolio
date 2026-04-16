import { Award, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Certification = {
    title: string;
    issuer: string;
    date: string;
    image: string;
    credentialUrl?: string;
};

const certifications: Certification[] = [
    {
        title: "Building the Web",
        issuer: "LinkedIn Learning",
        date: "2026",
        image: "certifications/WebDevCertificate.png",
        credentialUrl:
            "https://www.linkedin.com/learning/certificates/a0a87af6299c39b7a85b9d0b36c4d30d981c89ad26769c831240ef9676cebcbd",
    },
    {
        title: "Career Essentials in GitHub",
        issuer: "LinkedIn Learning",
        date: "2026",
        image: "certifications/GithubCertificate.jpg",
        credentialUrl:
            "https://www.linkedin.com/learning/certificates/fa83eba9f40611dc8e423b5a49a459bca30a6a5f6cf592eae3f0041b829282f8?trk=share_certificate",
    },
    {
        title: "Hack Node India 2025 Hackathon",
        issuer: "BlockseBlock and OpenxAI",
        date: "2025",
        image: "certifications/HackathonCertificate.jpg",
    },
];

export default function CertificationsSection() {
    const headingAnim = useScrollAnimation<HTMLDivElement>({ direction: "up", threshold: 0.2 });
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <section
            id="certifications"
            className="py-20 md:py-28 px-4 sm:px-8"
            style={{ backgroundColor: "#dde6f5" }}
            data-testid="section-certifications"
        >
            <div className="content-wrap">
                <div ref={headingAnim.ref} style={headingAnim.style} className="text-center mb-16">
                    <h2 className="section-heading" data-testid="text-certifications-title">Certifications</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <article
                            key={cert.title}
                            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm skill-card"
                            data-testid={`card-certification-${index}`}
                        >
                            <img
                                src={`${baseUrl}${cert.image}`}
                                alt={`${cert.title} certificate`}
                                className="w-full h-44 md:h-52 object-cover rounded-xl mb-5 border"
                                style={{ borderColor: "hsl(220, 20%, 88%)" }}
                                loading="lazy"
                            />

                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold" style={{ color: "hsl(220, 60%, 17%)" }}>
                                        {cert.title}
                                    </h3>
                                    <p className="text-sm md:text-base mt-1" style={{ color: "hsl(220, 20%, 46%)" }}>
                                        {cert.issuer} | {cert.date}
                                    </p>
                                </div>

                                <div
                                    className="p-2 rounded-lg"
                                    style={{ backgroundColor: "hsl(220, 60%, 95%)", color: "hsl(220, 75%, 22%)" }}
                                >
                                    <Award className="h-5 w-5" />
                                </div>
                            </div>

                            {cert.credentialUrl ? (
                                <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium"
                                    style={{ color: "hsl(220, 75%, 22%)" }}
                                    data-testid={`link-certification-verify-${index}`}
                                >
                                    Verify Certificate
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                            ) : (
                                <p className="text-sm font-medium mt-4" style={{ color: "hsl(220, 20%, 46%)" }}>
                                    Certificate image added
                                </p>
                            )}
                        </article>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://www.linkedin.com/in/devpandey347"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-md"
                        style={{ borderColor: "hsl(220, 75%, 22%)", color: "hsl(220, 75%, 22%)" }}
                        data-testid="link-more-certifications-linkedin"
                    >
                        View more certifications on my LinkedIn account
                        <ExternalLink className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
