interface ButtonProps {
  variant?: "primary" | "ghost";
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  target,
  rel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200";
  const primary =
    "bg-gradient-to-r from-accent-blue to-accent-teal text-white hover:opacity-90 hover:scale-[1.02]";
  const ghost =
    "border border-accent-blue text-accent-blue hover:bg-accent-blue/10 hover:scale-[1.02]";

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${base} ${variant === "primary" ? primary : ghost} ${className}`}
    >
      {children}
    </a>
  );
}
