import { MotionFade } from "@/components/MotionFade";
import { solutionsArchetypes } from "@/lib/content";

export default function SolutionsPage() {
  return (
    <div className="section-padding">
      <MotionFade>
        <div className="mx-auto max-w-6xl space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Solutions
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-100">
              Systems scoped for real procurement
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-300">
              We structure delivery around clear buyers, triggers, and measurable
              outcomes. Each archetype can be tailored to department realities while
              remaining auditable and supportable.
            </p>
          </div>

          <div className="grid gap-6">
            {solutionsArchetypes.map((solution) => (
              <div key={solution.title} className="card p-8">
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-100">
                      {solution.title}
                    </h2>
                    <p className="mt-2 text-sm text-slate-400">
                      Typical buyer: {solution.buyer}
                    </p>
                  </div>
                  <div className="text-sm text-slate-400">
                    Deployment models: {solution.deployment.join(", ")}
                  </div>
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-200">
                      Common triggers
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-400">
                      {solution.triggers.map((trigger) => (
                        <li key={trigger}>• {trigger}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-200">
                      What we deliver
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-400">
                      {solution.modules.map((module) => (
                        <li key={module}>• {module}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 border-t border-white/10 pt-4 text-sm text-slate-400">
                  Success metrics: {solution.metrics.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionFade>
    </div>
  );
}
