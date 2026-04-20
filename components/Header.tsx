import Link from 'next/link';

const navItems = [
  { href: '/product', label: 'Product' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/demo', label: 'Demo Path' },
  { href: '/faq', label: 'FAQ' },
];

function BrandMark() {
  return (
    <span className="inline-flex items-center gap-2 text-[1.15rem] font-semibold tracking-tight text-ink">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#031B3A] text-white shadow-sm">
        <span className="text-lg leading-none">O</span>
      </span>
      <span>
        Operaith
        <span className="ml-1 text-brand">.</span>
      </span>
    </span>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-white/90 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between gap-6 py-4">
        <Link href="/" aria-label="Operaith home">
          <BrandMark />
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Language selector"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-lg text-muted"
          >
            🌐
          </button>

          <Link
            href="/request-access"
            className="inline-flex items-center justify-center rounded-2xl bg-brand px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
          >
            Request Trial Access
          </Link>
        </div>
      </div>
    </header>
  );
}
