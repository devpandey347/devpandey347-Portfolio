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
      className="py-20 md:py-32 px-6"
      data-testid="section-contact"
    >
      <div className="content-wrap">
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm mb-2">Let's connect</p>
          <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-contact-title">
            Get In Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-border/50" data-testid="card-contact-form">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Have a question or want to collaborate? Drop me a message!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
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
                <div className="space-y-2">
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
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="What would you like to say?"
                    rows={5}
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
                  className="w-full"
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

          <div className="space-y-8">
            <Card className="border-border/50" data-testid="card-email">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-md bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-mono">{contactEmail}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyEmail}
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

            <Card className="border-border/50" data-testid="card-social">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Link className="h-5 w-5 text-primary" />
                  Connect with me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`link-social-${link.name.toLowerCase()}`}
                    >
                      <Button variant="outline" className="w-full gap-2 justify-start">
                        <link.icon className="h-4 w-4" />
                        <span className="truncate">{link.name}</span>
                      </Button>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-primary/5" data-testid="card-availability">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-sm">
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
