import { profile } from "../data/content";
import Reveal from "./Reveal";

const bars = [
  { h: 24, color: "bg-mint" },
  { h: 40, color: "bg-mint" },
  { h: 34, color: "bg-teal" },
  { h: 58, color: "bg-teal" },
  { h: 50, color: "bg-teal" },
  { h: 74, color: "bg-deep" },
  { h: 64, color: "bg-deep" },
  { h: 90, color: "bg-deep" },
];

export default function Hero() {
  return (
    <section id="top" className="max-w-5xl mx-auto px-6 md:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="grid md:grid-cols-[1fr_auto] gap-10 items-end">
        <div>
          <Reveal>
            <p className="text-sm font-medium text-teal mb-4 tracking-wide">
              Full-Stack Developer
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display font-semibold text-5xl md:text-7xl leading-[1.02] tracking-tight">
              {profile.name}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-ink-soft max-w-xl leading-relaxed">
              {profile.tagline}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-4 mt-9">
              <a
                href="#builds"
                className="text-sm font-medium px-6 py-3 rounded-full bg-ink text-white hover:bg-deep transition-colors"
              >
                See my builds
              </a>
              <a
                href="#contact"
                className="text-sm font-medium px-6 py-3 rounded-full border border-ink/20 hover:border-ink/50 transition-colors"
              >
                Get in touch
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="hidden md:block">
          <div className="flex items-end gap-2 h-24">
            {bars.map((bar, i) => (
              <div
                key={i}
                className={`rise-bar w-3 rounded-t-sm ${bar.color}`}
                style={{ height: `${bar.h}px`, animationDelay: `${0.5 + i * 0.06}s` }}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
