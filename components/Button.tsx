import Link from "next/link";
import { ReactNode } from "react";

const variants = {
  primary:
    "bg-accent-500 text-ink-900 hover:bg-accent-600 focus-visible:ring-accent-500",
  secondary:
    "border border-white/20 text-slate-100 hover:border-accent-500 hover:text-accent-500",
  ghost: "text-slate-200 hover:text-accent-500"
};

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export const Button = ({
  href,
  children,
  variant = "primary",
  onClick,
  type = "button"
}: ButtonProps) => {
  const className = `inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 ${variants[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};
