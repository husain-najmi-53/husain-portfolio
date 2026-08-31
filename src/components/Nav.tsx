import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { withBase } from "../lib/paths";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#builds", label: "Builds" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            closeMenu();
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className="font-display font-semibold text-lg tracking-tight"
        >
          Husain<span className="text-teal">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-soft">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Resume */}
        <a
          href={withBase("/resume/Husain_Najmi_Resume.pdf")}
          download
          className="hidden md:inline-flex text-sm font-medium px-4 py-2 rounded-full bg-teal text-white hover:bg-deep transition-colors"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-ink/5 transition-colors"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`md:hidden overflow-hidden border-t border-ink/10 transition-all duration-300 ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="py-3 text-base font-medium text-ink-soft hover:text-ink transition-colors border-b border-ink/5 last:border-b-0"
              >
                {link.label}
              </a>
            ))}

            <a
              href={withBase("/resume/Husain_Najmi_Resume.pdf")}
              download
              onClick={closeMenu}
              className="mt-4 inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-teal text-white text-sm font-medium hover:bg-deep transition-colors"
            >
              Download Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
