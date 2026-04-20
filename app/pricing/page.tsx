import Link from 'next/link';
import { PricingTable } from '@/components/PricingTable';

export default function PricingPage() {
  return (
    <section className="py-20">
      <div className="container-shell">
        <h1 className="section-title">Simple, organization-based pricing</h1>
        <p className="section-copy">Operaith is priced per organization, not per rider or trip.</p>
        <PricingTable />

        <div className="mt-10 rounded-2xl border border-line bg-soft p-6 text-sm text-muted">
          <p>
            One-time setup: <span className="font-medium text-ink">$1,000–$3,000</span>. Includes onboarding and data
            setup.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/request-access"
            className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 text-base font-medium text-white hover:bg-blue-700"
          >
            Request Trial Access
          </Link>

          <Link
            href="/demo"
            className="inline-flex items-center justify-center rounded-xl border border-line px-6 py-3 text-base font-medium hover:bg-soft"
          >
            See the demo path
          </Link>
        </div>
      </div>
    </section>
  );
}
