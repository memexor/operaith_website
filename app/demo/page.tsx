import Link from 'next/link';

const moments = [
  ['Morning', 'Import schedules and generate routes.'],
  ['Midday', 'Track trips and monitor driver execution.'],
  ['Afternoon', 'Complete trips and resolve any operational issues.'],
  ['End of day', 'Access structured, auditable records of the full operation.'],
];

export default function DemoPage() {
  return (
    <section className="py-20">
      <div className="container-shell">
        <h1 className="section-title">A day with Operaith</h1>
        <p className="section-copy">
          A simple demo flow built to show how organizations move from schedules to completed operations.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {moments.map(([title, description]) => (
            <article key={title} className="card">
              <div className="text-sm font-medium uppercase tracking-wide text-blue-600">{title}</div>
              <h2 className="mt-4 text-2xl font-semibold">{description}</h2>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-line bg-soft p-6 text-sm text-muted">
          <p>
            Trial access is reviewed and provisioned by our platform team so your organization starts with the right
            setup and onboarding path.
          </p>
        </div>

        <div className="mt-8">
          <Link
            href="/request-access"
            className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 text-base font-medium text-white hover:bg-blue-700"
          >
            Request Trial Access
          </Link>
        </div>
      </div>
    </section>
  );
}
