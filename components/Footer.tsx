import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-line bg-soft">
      <div className="container-shell flex flex-col gap-5 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-semibold text-ink">Operaith</div>
          <p className="mt-1">Intelligent operations and dispatch platform for organizations.</p>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <Link href="/product">Product</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/demo">Demo</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/request-access">Request Trial Access</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
