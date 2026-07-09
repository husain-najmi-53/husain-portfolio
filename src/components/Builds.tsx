import { builds, type Build } from "../data/content";
import Reveal from "./Reveal";
import { withBase } from "../lib/paths";

const statusStyle: Record<Build["status"], string> = {
  "IN PRODUCTION": "bg-teal/10 text-teal",
  PUBLISHED: "bg-ink/5 text-ink-soft",
  ARCHIVED: "bg-ink/5 text-ink-soft/70",
};

function BuildCard({ build, index }: { build: Build; index: number }) {
  return (
    <Reveal delay={0.05 * index} className={build.flagship ? "md:col-span-2" : ""}>
      <div className="lift bg-white rounded-2xl shadow-sm p-7 md:p-9 h-full flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <p className="text-xs text-ink-soft mb-1">{build.timeline}</p>
            <h3 className="font-display text-2xl font-semibold">{build.name}</h3>
            <p className="text-sm text-teal mt-1">{build.role}</p>
          </div>
          <span
            className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${statusStyle[build.status]}`}
          >
            {build.status}
          </span>
        </div>

        <p className="text-ink-soft leading-relaxed mb-6 flex-1">{build.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {build.stack.map((s) => (
            <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-ink/5 text-ink-soft">
              {s}
            </span>
          ))}
        </div>

        {build.links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {build.links.map((link) => (
              <a
                key={link.href}
                href={link.href.startsWith("http") ? link.href : withBase(link.href)}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                download={link.label.toLowerCase().includes("download") || undefined}
                className="text-sm font-medium px-5 py-2.5 rounded-full bg-ink text-white hover:bg-deep transition-colors"
              >
                {link.label} →
              </a>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  );
}

export default function Builds() {
  return (
    <section id="builds" className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20">
      <Reveal>
        <p className="text-sm font-medium text-teal mb-3 tracking-wide">Builds</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-10">
          Things I've shipped
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {builds.map((b, i) => (
          <BuildCard key={b.id} build={b} index={i} />
        ))}
      </div>
    </section>
  );
}
