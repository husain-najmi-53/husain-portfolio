import { stack, topSkills } from "../data/content";
import Reveal from "./Reveal";

export default function Stack() {
  return (
    <section id="stack" className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20">
      <Reveal>
        <p className="text-sm font-medium text-teal mb-3 tracking-wide">Stack</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-3">
          Tools I reach for
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-ink-soft mb-10 max-w-lg">
          Top skills right now:{" "}
          {topSkills.map((s, i) => (
            <span key={s} className="font-medium text-ink">
              {s}
              {i !== topSkills.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
        {stack.map((row, i) => (
          <Reveal key={row.category} delay={0.05 * i}>
            <div>
              <p className="text-sm font-medium text-ink-soft mb-3">{row.category}</p>
              <div className="flex flex-wrap gap-2">
                {row.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-full bg-mint/25 text-deep font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
