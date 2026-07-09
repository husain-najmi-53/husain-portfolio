import { profile } from "../data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20">
      <Reveal>
        <p className="text-sm font-medium text-teal mb-3 tracking-wide">About</p>
      </Reveal>
      <div className="grid md:grid-cols-[2fr_1fr] gap-10">
        <Reveal delay={0.1}>
          <p className="text-xl md:text-2xl leading-relaxed text-ink font-display font-medium">
            {profile.about}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="bg-white rounded-2xl p-6 space-y-4 shadow-sm">
            <div>
              <p className="text-xs text-ink-soft tracking-wide mb-1">Currently</p>
              <p className="font-medium">{profile.role}</p>
            </div>
            <div>
              <p className="text-xs text-ink-soft tracking-wide mb-1">Based in</p>
              <p className="font-medium">{profile.location}</p>
            </div>
            <div>
              <p className="text-xs text-ink-soft tracking-wide mb-1">Status</p>
              <p className="font-medium text-teal">Open to opportunities</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
