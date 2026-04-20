import Link from 'next/link';

export function Hero() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-shell grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="eyebrow">Calm Operational design for real-world transport operations</div>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-[#031B3A] sm:text-6xl">
            Operations and dispatch software for organizations that cannot afford daily chaos.
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-muted">
            Operaith brings planning, live execution, and auditable operational records into one system so teams can
            run transportation with more confidence and less manual firefighting.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/request-access"
              className="inline-flex items-center justify-center rounded-2xl bg-brand px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
            >
              Request Trial Access
            </Link>

            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-2xl border border-line bg-white px-6 py-3 text-base font-medium hover:bg-soft"
            >
              See the demo path
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted">
            <span>Organization-based pricing</span>
            <span>Reviewed onboarding</span>
            <span>Structured operational records</span>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-slate-50 to-white">
          <div className="rounded-[1.4rem] border border-line bg-white p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-muted">Today&apos;s Operations</p>
                <h3 className="mt-1 text-2xl font-semibold text-[#031B3A]">Dispatch under control</h3>
              </div>

              <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">Live</div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-soft p-4">
                <p className="text-sm text-muted">On-time progress</p>
                <p className="mt-2 text-3xl font-semibold text-[#031B3A]">94%</p>
              </div>

              <div className="rounded-2xl bg-soft p-4">
                <p className="text-sm text-muted">Active trips</p>
                <p className="mt-2 text-3xl font-semibold text-[#031B3A]">18</p>
              </div>

              <div className="rounded-2xl border border-line bg-white p-4 sm:col-span-2">
                <p className="text-sm text-muted">Operational signal</p>
                <p className="mt-2 text-base leading-7 text-ink">
                  Replace spreadsheets, phone trees, and manual follow-up with one operating view for planning,
                  execution, and review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
