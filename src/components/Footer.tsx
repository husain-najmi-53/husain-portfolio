import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-deep text-white/60 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a
          href="#top"
          className="flex items-center gap-1 hover:text-white transition-colors"
        >
          Back to top
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path
              d="M12 19V5M5 12l7-7 7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
}
