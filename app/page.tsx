import { MotionFade } from "@/components/MotionFade";
import { Button } from "@/components/Button";
import {
  credibilityCards,
  systems,
  engagementSteps,
  examples,
  principles
} from "@/lib/content";

export default function HomePage() {
  return (
    <div>
      <section className="section-padding">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <MotionFade>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Public sector systems partner
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-50 md:text-5xl">
                Public outcomes don’t fail because of intent.
                <br />
                They fail because systems don’t scale.
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                Government missions today sit on fragmented data, manual processes,
                and brittle IT. We partner with departments and PSUs to design and
                deploy robust data, AI, and digital systems that reduce backlog,
                improve compliance, and support better decisions—at scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact">Book a Discovery Call</Button>
                <Button href="/Build-India-Systems-Capability-Deck.pdf" variant="secondary">
                  Download Capability Deck
                </Button>
              </div>
            </div>
          </MotionFade>
          <MotionFade delay={0.1}>
            <div className="space-y-4 rounded-3xl border border-white/10 bg-ink-800/70 p-8">
              <h2 className="text-xl font-semibold">Built for the Public Sector</h2>
              <p className="text-sm text-slate-400">
                We work inside procurement realities, compliance needs, and legacy
                constraints while keeping delivery disciplined.
              </p>
              <div className="space-y-4">
                {credibilityCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-white/5 bg-ink-900/40 p-4"
                  >
                    <p className="text-sm font-semibold text-slate-100">
                      {card.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </MotionFade>
        </div>
      </section>

      <section className="section-padding border-t border-white/5">
        <MotionFade>
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  Systems governments actually buy
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-100">
                  What we build
                </h2>
              </div>
              <p className="max-w-md text-sm text-slate-400">
                Modular systems designed for auditability, continuity, and scale.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {systems.map((system) => (
                <div key={system.title} className="card p-6">
                  <system.icon className="h-6 w-6 text-accent-500" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-100">
                    {system.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    {system.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </MotionFade>
      </section>

      <section className="section-padding border-t border-white/5">
        <MotionFade>
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                How we engage
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-100">
                A procurement-friendly pathway
              </h2>
              <p className="mt-4 text-sm text-slate-400">
                We align with procurement timelines and delivery governance while
                keeping pilots measurable and scalable.
              </p>
              <div className="mt-6 space-y-4">
                {engagementSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-white/10 bg-ink-800/70 p-5"
                  >
                    <p className="text-xs uppercase text-slate-500">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-2 text-base font-semibold text-slate-100">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Proof (illustrative)
              </p>
              {examples.map((example) => (
                <div key={example.title} className="card p-6">
                  <h3 className="text-lg font-semibold text-slate-100">
                    {example.title}
                  </h3>
                  <dl className="mt-4 space-y-3 text-sm text-slate-400">
                    <div>
                      <dt className="font-semibold text-slate-200">Problem</dt>
                      <dd>{example.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-200">Approach</dt>
                      <dd>{example.approach}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-200">Impact</dt>
                      <dd>{example.impact}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-200">Deployment</dt>
                      <dd>{example.deployment}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </MotionFade>
      </section>

      <section className="section-padding border-t border-white/5">
        <MotionFade>
          <div className="mx-auto max-w-6xl">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Why work with us
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-100">
              Principles, not slogans
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {principles.map((principle) => (
                <div key={principle} className="card p-5 text-sm text-slate-300">
                  {principle}
                </div>
              ))}
            </div>
          </div>
        </MotionFade>
      </section>

      <section className="section-padding border-t border-white/5">
        <MotionFade>
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-ink-800/80 p-10 text-center">
            <h2 className="text-3xl font-semibold text-slate-50">
              If you are responsible for outcomes—not just projects—we should talk.
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button href="/contact">Book Discovery Call</Button>
              <Button href="/partners" variant="secondary">
                Partner With Us
              </Button>
            </div>
          </div>
        </MotionFade>
      </section>
    </div>
  );
}
