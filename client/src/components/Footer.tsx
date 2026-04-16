import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="py-10 px-6"
      style={{ borderTop: "1px solid hsl(220, 20%, 88%)" }}
      data-testid="footer"
    >
      <div className="content-wrap">
        <div className="flex flex-col items-center gap-6">
          {/* Made with love */}
          <div
            className="flex items-center gap-2 text-sm"
            style={{ color: "hsl(220, 20%, 46%)" }}
          >
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>by Dev Pandey</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:shadow-md"
            style={{
              backgroundColor: "hsl(220, 75%, 22%)",
              color: "white",
            }}
            data-testid="button-back-to-top"
          >
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </button>

          {/* Copyright */}
          <p
            className="text-xs"
            style={{ color: "hsl(220, 15%, 60%)" }}
          >
            &copy; {new Date().getFullYear()} Dev Pandey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
