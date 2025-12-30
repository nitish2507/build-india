import Link from "next/link";
import { footerNotes, navLinks } from "@/lib/content";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
          <div>
            <h3 className="text-lg font-semibold">Build India Systems</h3>
            <p className="mt-3 max-w-md text-sm text-slate-400">
              We design and deploy data, AI, and digital systems that help public
              institutions deliver measurable outcomes with continuity and compliance.
            </p>
            <div className="mt-5 space-y-2 text-xs text-slate-500">
              {footerNotes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold text-slate-200">Navigate</p>
            <div className="grid grid-cols-2 gap-3 text-sm text-slate-400">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="link-underline">
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Build India Systems. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
