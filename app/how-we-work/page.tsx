import { MotionFade } from "@/components/MotionFade";
import { complianceChecklist, deliverables, engagementModels } from "@/lib/content";

export default function HowWeWorkPage() {
  return (
    <div className="section-padding">
      <MotionFade>
        <div className="mx-auto max-w-5xl space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              How we work
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-100">
              Structured engagements with clear deliverables
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              We align to procurement cycles while keeping discovery, delivery, and
              support predictable for government partners.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {engagementModels.map((model) => (
              <div key={model.title} className="card p-6">
                <h2 className="text-xl font-semibold text-slate-100">
                  {model.title}
                </h2>
                <p className="mt-2 text-sm text-slate-400">{model.description}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-slate-100">
                Security & compliance checklist
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                {complianceChecklist.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-slate-100">Deliverables</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                {deliverables.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </MotionFade>
    </div>
  );
}
