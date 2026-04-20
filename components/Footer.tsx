import Link from 'next/link';

const primaryLinks = [
  { href: '/product', label: 'Product' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/demo', label: 'Demo Path' },
  { href: '/faq', label: 'FAQ' },
  { href: '/request-access', label: 'Request Trial Access' },
];

const legalLinks = [
  { href: '/terms', label: 'Terms' },
  { href: '/privacy', label: 'Privacy' },
];

export function Footer() {
  return (
    <footer className="mt-12 border-t border-line bg-[#031B3A] text-slate-200">
      <div className="container-shell grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <div className="text-xl font-semibold tracking-tight">
            Operaith<span className="text-brand">.</span>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
            Compliance-oriented operations and dispatch software for organizations that need dependable daily
            execution, clearer visibility, and structured operational records.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 sm:text-right">
          <div className="space-y-3 text-sm text-slate-300">
            {primaryLinks.map((link) => (
              <div key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          <div className="space-y-3 text-sm text-slate-300">
            {legalLinks.map((link) => (
              <div key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </div>
            ))}
            <div className="pt-2 text-xs uppercase tracking-[0.18em] text-slate-400">All rights reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
