import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm font-bold text-text-primary">
          <span className="bg-gradient-to-r from-accent-blue to-accent-teal bg-clip-text text-transparent">
            ML
          </span>{" "}
          Ventures
        </div>
        <div className="flex gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-text-secondary">
          © {new Date().getFullYear()} ML Ventures. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
