import { MotionFade } from "@/components/MotionFade";
import { caseStudies } from "@/lib/content";

export default function CaseStudiesPage() {
  return (
    <div className="section-padding">
      <MotionFade>
        <div className="mx-auto max-w-5xl space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Case studies
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-100">
              Representative, anonymised examples
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Illustrative engagements that reflect our delivery approach and
              measurable impact. These are anonymised for confidentiality.
            </p>
          </div>

          <div className="grid gap-6">
            {caseStudies.map((study) => (
              <div key={study.title} className="card p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h2 className="text-2xl font-semibold text-slate-100">
                    {study.title}
                  </h2>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                    {study.label}
                  </span>
                </div>
                <p className="mt-4 text-sm text-slate-400">{study.overview}</p>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-200">
                      Approach
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-400">
                      {study.approach.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-200">
                      Impact
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-400">
                      {study.impact.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-6 text-sm text-slate-400">
                  Deployment model: {study.deployment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MotionFade>
    </div>
  );
}
