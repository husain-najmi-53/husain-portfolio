import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-deep text-white/60 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.email}</span>
      </div>
    </footer>
  );
}
