'use client';

import Link from 'next/link';
import { FormEvent, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

type FormState = {
  organizationName: string;
  contactName: string;
  jobTitle: string;
  workEmail: string;
  phoneNumber: string;
  notes: string;
  smsConsent: boolean;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  organizationName: '',
  contactName: '',
  jobTitle: '',
  workEmail: '',
  phoneNumber: '',
  notes: '',
  smsConsent: false,
};

function apiBaseUrl() {
  return process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, '') ?? '';
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function RequestAccessForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const canSubmit = useMemo(() => {
    return (
      form.organizationName.trim() &&
      form.contactName.trim() &&
      form.workEmail.trim() &&
      form.phoneNumber.trim() &&
      form.smsConsent &&
      !submitting
    );
  }, [form, submitting]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setSubmitError(null);
  }

  function validate(): boolean {
    const nextErrors: Errors = {};

    if (!form.organizationName.trim()) nextErrors.organizationName = 'Organization name is required.';
    if (!form.contactName.trim()) nextErrors.contactName = 'Contact name is required.';
    if (!form.workEmail.trim()) nextErrors.workEmail = 'Work email is required.';
    else if (!validateEmail(form.workEmail.trim())) nextErrors.workEmail = 'Enter a valid work email.';
    if (!form.phoneNumber.trim()) nextErrors.phoneNumber = 'Phone number is required.';
    if (!form.smsConsent)
      nextErrors.smsConsent = 'Please confirm SMS consent before submitting this request.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(`${apiBaseUrl()}/trial-requests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          organization_name: form.organizationName.trim(),
          contact_name: form.contactName.trim(),
          job_title: form.jobTitle.trim() || null,
          work_email: form.workEmail.trim(),
          phone_number: form.phoneNumber.trim(),
          notes: form.notes.trim() || null,
          source: 'website',
          locale: 'en',
        }),
      });

      if (!response.ok) {
        let message = 'Unable to submit your request right now. Please try again.';
        try {
          const data = await response.json();
          if (typeof data?.message === 'string') message = data.message;
          else if (typeof data?.detail === 'string') message = data.detail;
        } catch {
          // ignore parse errors
        }
        throw new Error(message);
      }

      router.push('/request-submitted');
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={onSubmit} noValidate>
      <div>
        <label htmlFor="orgName" className="mb-2 block text-sm font-medium">
          Organization Name
        </label>
        <input
          id="orgName"
          value={form.organizationName}
          onChange={(event) => update('organizationName', event.target.value)}
          placeholder="Your organization"
          className="w-full rounded-xl border border-line px-4 py-3 placeholder:text-slate-400 focus:border-blue-300"
        />
        {errors.organizationName ? <p className="mt-2 text-sm text-red-600">{errors.organizationName}</p> : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contactName" className="mb-2 block text-sm font-medium">
            Contact Name
          </label>
          <input
            id="contactName"
            value={form.contactName}
            onChange={(event) => update('contactName', event.target.value)}
            placeholder="Your full name"
            className="w-full rounded-xl border border-line px-4 py-3 placeholder:text-slate-400 focus:border-blue-300"
          />
          {errors.contactName ? <p className="mt-2 text-sm text-red-600">{errors.contactName}</p> : null}
        </div>

        <div>
          <label htmlFor="jobTitle" className="mb-2 block text-sm font-medium">
            Job Title
          </label>
          <input
            id="jobTitle"
            value={form.jobTitle}
            onChange={(event) => update('jobTitle', event.target.value)}
            placeholder="Director, Manager, Dispatcher…"
            className="w-full rounded-xl border border-line px-4 py-3 placeholder:text-slate-400 focus:border-blue-300"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Work Email
          </label>
          <input
            id="email"
            type="email"
            value={form.workEmail}
            onChange={(event) => update('workEmail', event.target.value)}
            placeholder="you@organization.org"
            className="w-full rounded-xl border border-line px-4 py-3 placeholder:text-slate-400 focus:border-blue-300"
          />
          {errors.workEmail ? <p className="mt-2 text-sm text-red-600">{errors.workEmail}</p> : null}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phoneNumber}
            onChange={(event) => update('phoneNumber', event.target.value)}
            placeholder="(555) 123-4567"
            className="w-full rounded-xl border border-line px-4 py-3 placeholder:text-slate-400 focus:border-blue-300"
          />
          {errors.phoneNumber ? <p className="mt-2 text-sm text-red-600">{errors.phoneNumber}</p> : null}
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-soft/70 p-4">
        <label className="flex items-start gap-3 text-sm leading-6 text-ink">
          <input
            type="checkbox"
            checked={form.smsConsent}
            onChange={(event) => update('smsConsent', event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-line text-brand focus:ring-brand"
          />
          <span>
            I agree to receive transactional SMS from Operaith for account verification, onboarding updates,
            ride reminders, ETA changes, and service alerts. Message frequency varies. Message and data
            rates may apply. Reply STOP to opt out and HELP for support. See{' '}
            <Link href="/terms" className="font-medium text-brand underline underline-offset-2">
              Terms
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="font-medium text-brand underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.smsConsent ? <p className="mt-2 text-sm text-red-600">{errors.smsConsent}</p> : null}
      </div>

      <div>
        <label htmlFor="notes" className="mb-2 block text-sm font-medium">
          Tell us about your operations (optional)
        </label>
        <textarea
          id="notes"
          value={form.notes}
          onChange={(event) => update('notes', event.target.value)}
          placeholder="Number of riders, centers, or current dispatch challenges"
          rows={4}
          className="w-full rounded-xl border border-line px-4 py-3 placeholder:text-slate-400 focus:border-blue-300"
        />
      </div>

      {submitError ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {submitError}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={!canSubmit}
        className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-6 py-3 text-base font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? 'Submitting…' : 'Submit Request'}
      </button>

      <p className="text-xs leading-6 text-muted">We typically respond within 1–2 business days.</p>
      <p className="text-xs leading-6 text-muted">
        SMS consent is not shared with third parties or affiliates for marketing purposes.
      </p>
    </form>
  );
}
