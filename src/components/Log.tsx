import { log, type LogEntry } from "../data/content";
import Reveal from "./Reveal";

function ExperienceCard({ entry, index }: { entry: LogEntry; index: number }) {
  const isWork = entry.type === "work";

  return (
    <Reveal delay={0.06 * index} className="relative">
      <div className="relative pl-11 sm:pl-14 pb-8 md:pb-10 last:pb-2 group">
        {/* Node Icon on Timeline */}
        <div
          className={`absolute left-0 top-1.5 w-7 h-7 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
            entry.current
              ? "bg-teal text-white shadow-md shadow-teal/30 ring-4 ring-mint/30"
              : isWork
              ? "bg-white text-teal border border-teal/20 shadow-sm"
              : "bg-white text-deep border border-mint/40 shadow-sm"
          }`}
          aria-hidden="true"
        >
          {isWork ? (
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          ) : (
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          )}
        </div>

        {/* Structured Content Card */}
        <div className="lift bg-white rounded-2xl p-5 sm:p-6 md:p-7 border border-ink/5 shadow-sm hover:shadow-md hover:border-teal/20 transition-all">
          {/* Header area */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2.5 sm:gap-4 mb-3">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                    entry.current
                      ? "bg-teal/15 text-teal"
                      : isWork
                      ? "bg-mint/20 text-deep"
                      : "bg-ink/5 text-ink-soft"
                  }`}
                >
                  {entry.badge}
                </span>
                {entry.highlight && (
                  <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-mint/25 text-deep border border-mint/40">
                    {entry.highlight}
                  </span>
                )}
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-ink tracking-tight">
                {entry.title}
              </h3>
              <p className="text-sm font-medium text-teal mt-0.5">{entry.org}</p>
            </div>

            {/* Date Pill */}
            <div className="self-start">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                  entry.current
                    ? "bg-teal/10 text-teal border border-teal/20 font-semibold"
                    : "bg-ink/5 text-ink-soft"
                }`}
              >
                {entry.current && (
                  <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                )}
                {entry.date}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-4">
            {entry.detail}
          </p>

          {/* Key Skill / Topic Tags */}
          {entry.skills && entry.skills.length > 0 && (
            <div className="pt-3 border-t border-ink/5 flex flex-wrap gap-1.5 sm:gap-2">
              {entry.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 rounded-lg bg-paper/80 text-ink-soft font-medium border border-ink/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function Log() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20"
    >
      <Reveal>
        <p className="text-sm font-medium text-teal mb-3 tracking-wide">
          Experience & Education
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          Where I've worked & studied
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-ink-soft max-w-2xl mb-12 leading-relaxed">
          A timeline of my hands-on software development roles, project contributions, and academic background in computer applications.
        </p>
      </Reveal>

      {/* Timeline Wrapper with dynamic vertical line */}
      <div className="relative before:absolute before:top-3 before:bottom-3 before:left-3.5 sm:before:left-4.5 before:w-0.5 before:bg-gradient-to-b before:from-teal before:via-mint/40 before:to-transparent">
        {log.map((entry, i) => (
          <ExperienceCard key={entry.title + entry.date} entry={entry} index={i} />
        ))}
      </div>
    </section>
  );
}
