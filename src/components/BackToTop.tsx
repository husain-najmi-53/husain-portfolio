import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible, { passive: true });
    toggleVisible();
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 p-3 rounded-full bg-deep text-white shadow-lg shadow-deep/20 hover:bg-teal hover:shadow-xl hover:shadow-teal/25 border border-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal cursor-pointer transition-all duration-300 group ${
        visible
          ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
          : "opacity-0 scale-75 pointer-events-none translate-y-4"
      }`}
    >
      <svg
        className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}
