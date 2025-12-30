import { MotionFade } from "@/components/MotionFade";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="section-padding">
      <MotionFade>
        <div className="mx-auto max-w-4xl space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Contact
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-100">
              Tell us what outcomes you are accountable for
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              We will respond with a focused diagnostic plan and the right delivery
              pathway.
            </p>
          </div>
          <div className="card p-8">
            <ContactForm />
          </div>
        </div>
      </MotionFade>
    </div>
  );
}
