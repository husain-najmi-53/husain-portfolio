import { log } from "../data/content";
import Reveal from "./Reveal";

export default function Log() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20">
      <Reveal>
        <p className="text-sm font-medium text-teal mb-3 tracking-wide">Experience</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-10">
          Where I've worked & studied
        </h2>
      </Reveal>

      <div className="relative border-l-2 border-mint/40 ml-1.5">
        {log.map((entry, i) => (
          <Reveal key={entry.title} delay={0.06 * i}>
            <div className="relative pl-8 pb-10 last:pb-0">
              <span
                className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-paper ${
                  entry.current ? "bg-teal" : "bg-deep"
                }`}
              />
              <p className="text-xs text-teal font-medium mb-1">{entry.date}</p>
              <h3 className="font-display text-lg font-semibold">{entry.title}</h3>
              <p className="text-sm text-ink-soft mb-2">{entry.org}</p>
              <p className="text-ink-soft leading-relaxed max-w-2xl">{entry.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
