import Link from "next/link";
import { navLinks } from "@/lib/content";
import { Button } from "@/components/Button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-900/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          Build India Systems
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="link-underline">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button href="/contact" variant="secondary">
            Talk to us
          </Button>
        </div>
      </div>
    </header>
  );
};
