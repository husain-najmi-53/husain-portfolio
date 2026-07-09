import { profile } from "../data/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-deep text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <Reveal>
          <p className="text-sm font-medium text-mint mb-3 tracking-wide">Contact</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-xl leading-tight mb-8">
            Let's build something worth shipping.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-white/75 max-w-lg leading-relaxed mb-10">
            I'm actively looking for full-stack and software development
            opportunities. If there's a role, project, or idea in mind, I'd love
            to hear about it.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="text-sm font-medium px-6 py-3 rounded-full bg-mint text-deep hover:bg-white transition-colors"
            >
              Email me →
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium px-6 py-3 rounded-full border border-white/30 hover:border-white/70 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium px-6 py-3 rounded-full border border-white/30 hover:border-white/70 transition-colors"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
