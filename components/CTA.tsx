import Link from 'next/link';

export function CTA() {
  return (
    <section className="border-t border-line bg-soft py-20">
      <div className="container-shell text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Request trial access for your organization
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
          Replace manual coordination with a system built for dispatch, visibility, and auditable execution.
        </p>

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
