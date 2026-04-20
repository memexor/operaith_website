import Link from 'next/link';

export default function RequestSubmittedPage() {
  return (
    <section className="py-24">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-line bg-white p-10 text-center shadow-card">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-2xl text-emerald-700">
            ✓
          </div>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-[#031B3A]">Your request has been received</h1>

          <p className="mt-4 text-lg leading-8 text-muted">
            Our platform team will review your request and contact you with onboarding and activation details.
          </p>

          <div className="mt-8 rounded-3xl border border-line bg-soft p-6 text-left text-sm leading-7 text-muted">
            <p className="font-medium text-ink">What happens next</p>
            <ul className="mt-3 space-y-2">
              <li>• We review your request and operating context.</li>
              <li>• We prepare the right onboarding path for your organization.</li>
              <li>• We reach out with access instructions and next steps.</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-2xl border border-line bg-white px-6 py-3 text-base font-medium hover:bg-soft"
            >
              Return home
            </Link>

            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-2xl bg-brand px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
            >
              See the demo path
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
