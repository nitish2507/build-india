import { MotionFade } from "@/components/MotionFade";
import { partnerModels, partnerReasons } from "@/lib/content";
import { Button } from "@/components/Button";

export default function PartnersPage() {
  return (
    <div className="section-padding">
      <MotionFade>
        <div className="mx-auto max-w-5xl space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Partners
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-100">
              Delivery depth for system integrators
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              We help SI partners accelerate discovery, de-risk delivery, and bring
              reusable accelerators without compromising compliance or data
              sovereignty.
            </p>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-semibold text-slate-100">Why partner</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {partnerReasons.map((reason) => (
                <li key={reason}>• {reason}</li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {partnerModels.map((model) => (
              <div key={model.title} className="card p-6">
                <h3 className="text-lg font-semibold text-slate-100">
                  {model.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{model.description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 bg-ink-800/80 p-8 text-center">
            <h2 className="text-2xl font-semibold text-slate-100">
              Ready to explore a partnership?
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              We can align on scope, delivery timelines, and co-bid structures in a
              single working session.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/contact">Partner form</Button>
            </div>
          </div>
        </div>
      </MotionFade>
    </div>
  );
}
