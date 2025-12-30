"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/Button";
import { track } from "@/lib/analytics";

const interests = [
  "Discovery call",
  "Pilot program",
  "Implementation partnership",
  "Procurement support",
  "Other"
];

const initialState = {
  name: "",
  organisation: "",
  role: "",
  email: "",
  phone: "",
  interest: interests[0],
  message: "",
  isGovernment: false
};

export const ContactForm = () => {
  const [formState, setFormState] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    track("lead_submit", { interest: formState.interest });

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setFormState(initialState);
    } catch (error) {
      setStatus("error");
    }
  };

  const updateField = (field: keyof typeof formState, value: string | boolean) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm">
          <span>Name</span>
          <input
            className="w-full rounded-lg border border-white/10 bg-ink-800 px-4 py-2 text-sm text-slate-100"
            value={formState.name}
            onChange={(event) => updateField("name", event.target.value)}
            required
          />
        </label>
        <label className="space-y-2 text-sm">
          <span>Organisation</span>
          <input
            className="w-full rounded-lg border border-white/10 bg-ink-800 px-4 py-2 text-sm text-slate-100"
            value={formState.organisation}
            onChange={(event) => updateField("organisation", event.target.value)}
            required
          />
        </label>
        <label className="space-y-2 text-sm">
          <span>Role</span>
          <input
            className="w-full rounded-lg border border-white/10 bg-ink-800 px-4 py-2 text-sm text-slate-100"
            value={formState.role}
            onChange={(event) => updateField("role", event.target.value)}
          />
        </label>
        <label className="space-y-2 text-sm">
          <span>Email</span>
          <input
            type="email"
            className="w-full rounded-lg border border-white/10 bg-ink-800 px-4 py-2 text-sm text-slate-100"
            value={formState.email}
            onChange={(event) => updateField("email", event.target.value)}
            required
          />
        </label>
        <label className="space-y-2 text-sm">
          <span>Phone</span>
          <input
            className="w-full rounded-lg border border-white/10 bg-ink-800 px-4 py-2 text-sm text-slate-100"
            value={formState.phone}
            onChange={(event) => updateField("phone", event.target.value)}
          />
        </label>
        <label className="space-y-2 text-sm">
          <span>Interest</span>
          <select
            className="w-full rounded-lg border border-white/10 bg-ink-800 px-4 py-2 text-sm text-slate-100"
            value={formState.interest}
            onChange={(event) => updateField("interest", event.target.value)}
          >
            {interests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="space-y-2 text-sm">
        <span>Message</span>
        <textarea
          className="min-h-[140px] w-full rounded-lg border border-white/10 bg-ink-800 px-4 py-2 text-sm text-slate-100"
          value={formState.message}
          onChange={(event) => updateField("message", event.target.value)}
        />
      </label>
      <label className="flex items-center gap-3 text-sm">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-white/20 bg-ink-800"
          checked={formState.isGovernment}
          onChange={(event) => updateField("isGovernment", event.target.checked)}
        />
        Exploring a government / PSU engagement
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit">Submit</Button>
        {status === "loading" && (
          <p className="text-sm text-slate-400">Submitting...</p>
        )}
        {status === "success" && (
          <p className="text-sm text-accent-500">
            Thank you. We will get back to you shortly.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400">
            Something went wrong. Please retry.
          </p>
        )}
      </div>
    </form>
  );
};
