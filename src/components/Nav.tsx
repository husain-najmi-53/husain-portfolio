import { withBase } from "../lib/paths";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#builds", label: "Builds" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 bg-paper/90 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-5xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-lg tracking-tight">
          Husain<span className="text-teal">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-soft">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={withBase("/resume/Husain_Najmi_Resume.pdf")}
          download
          className="text-sm font-medium px-4 py-2 rounded-full bg-teal text-white hover:bg-deep transition-colors"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
