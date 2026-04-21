import { RequestAccessForm } from '@/components/RequestAccessForm';

export default function RequestAccessPage() {
  return (
    <section className="py-20">
      <div className="container-shell">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-brand">
              Reviewed onboarding for operational teams
            </div>

            <h1 className="section-title mt-8">Request trial access for your organization</h1>
            <p className="section-copy max-w-xl">
              Submit your request and we will review your operational context, provision your organization,
              and guide your team into onboarding.
            </p>

            <div className="mt-8 rounded-2xl border border-line bg-soft p-6">
              <h2 className="text-lg font-semibold">What happens next</h2>
              <ol className="mt-4 space-y-3 text-sm text-muted">
                <li>1. Submit your request.</li>
                <li>2. We review your organization and operating needs.</li>
                <li>3. We provision your environment and onboarding path.</li>
                <li>4. Your team receives activation details and next steps.</li>
              </ol>
            </div>

            <div className="mt-6 rounded-2xl border border-line bg-white p-6 text-sm text-muted shadow-sm">
              Operaith is designed for senior centers, adult day health programs, and other organizations
              that need a calmer, more reliable way to run daily transportation operations.
            </div>
          </div>

          <div className="card">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight text-ink">Tell us about your organization</h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                We use this information to align trial access, setup, and onboarding with your real operating
                model.
              </p>
            </div>
            <RequestAccessForm />
          </div>
        </div>
      </div>
    </section>
  );
}
