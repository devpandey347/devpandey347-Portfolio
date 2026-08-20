import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Github, Linkedin, Send, Copy, CheckCheck, Link } from "lucide-react";
import { SiX, SiInstagram, SiGeeksforgeeks, SiReddit } from "react-icons/si";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/devpandey347",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/devpandey347",
    icon: Github,
  },
  {
    name: "X",
    href: "https://x.com/devpandey347",
    icon: SiX,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/devpandey347",
    icon: SiInstagram,
  },
  {
    name: "GeeksforGeeks",
    href: "https://www.geeksforgeeks.org/profile/devpandey347",
    icon: SiGeeksforgeeks,
  },
  {
    name: "Reddit",
    href: "https://reddit.com/user/devpandey347",
    icon: SiReddit,
  },
];

export default function ContactSection() {
  const contactEmail = "devpandey202102@gmail.com";
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const headingAnim = useScrollAnimation<HTMLDivElement>({ direction: "up", threshold: 0.15 });
  const contentAnim = useScrollAnimation<HTMLDivElement>({ direction: "up", threshold: 0.1 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    // Fallback enables deployments that do not inject env vars at build time.
    const fallbackConfig = {
      serviceId: "service_98lpzsh",
      templateId: "template_tkhabdl",
      publicKey: "Ol8qGqImv7qLbYGaj",
    };

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || fallbackConfig.serviceId;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || fallbackConfig.templateId;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || fallbackConfig.publicKey;

    const missingKeys = [
      !serviceId && "VITE_EMAILJS_SERVICE_ID",
      !templateId && "VITE_EMAILJS_TEMPLATE_ID",
      !publicKey && "VITE_EMAILJS_PUBLIC_KEY",
    ].filter(Boolean);

    if (missingKeys.length > 0) {
      toast({
        title: "Email service not configured",
        description: `Missing: ${missingKeys.join(", ")}. Add them in client/.env.local and restart the dev server.`,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          to_email: contactEmail,
          message: formData.message,
        },
        {
          publicKey,
        },
      );

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS send failed", error);
      toast({
        title: "Something went wrong",
        description: `Unable to send your message. You can email me at ${contactEmail}.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    toast({
      title: "Email copied!",
      description: "Email address copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 sm:px-8"
      style={{ backgroundColor: "#dde6f5" }}
      data-testid="section-contact"
    >
      <div className="content-wrap">
        <div ref={headingAnim.ref} style={headingAnim.style} className="text-center mb-10">
          <p className="font-mono text-primary text-sm mb-2">Let's connect</p>
          <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-contact-title">
            Get In Touch
          </h2>
        </div>

        <div ref={contentAnim.ref} style={contentAnim.style} className="grid lg:grid-cols-2 gap-8 items-start">
          <Card className="border-border/50 bg-white shadow-sm" data-testid="card-contact-form">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl md:text-2xl">Send a Message</CardTitle>
              <CardDescription>
                Have a question or want to collaborate? Drop me a message!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    data-testid="input-email"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="What would you like to say?"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    data-testid="input-message"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full mt-2"
                  disabled={isSubmitting}
                  data-testid="button-send-message"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-border/50 bg-white shadow-sm" data-testid="card-email">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-0.5">Email</p>
                    <p className="font-mono text-sm sm:text-base truncate">{contactEmail}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyEmail}
                    className="flex-shrink-0"
                    data-testid="button-copy-email"
                  >
                    {copied ? (
                      <CheckCheck className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-white shadow-sm" data-testid="card-social">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Link className="h-5 w-5 text-primary" />
                  Connect with me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full min-w-0"
                      data-testid={`link-social-${link.name.toLowerCase()}`}
                    >
                      <Button variant="outline" className="w-full gap-2 justify-start px-3 py-2 text-xs sm:text-sm overflow-hidden">
                        <link.icon className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">{link.name}</span>
                      </Button>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-primary/5 shadow-sm" data-testid="card-availability">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-foreground/90 font-medium">
                    Currently open to new opportunities and collaborations
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
