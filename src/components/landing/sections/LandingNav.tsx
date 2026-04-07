import Link from "next/link";

const nav = [
  { href: "#intro", label: "Giới thiệu", active: true },
  { href: "#curriculum", label: "Nội dung" },
  { href: "#schedule", label: "Lịch học" },
  { href: "#faq", label: "FAQ" },
  { href: "#ftes", label: "FTES" }
];

export function LandingNav() {
  return (
    <header className="stitch-glass-header fixed top-0 z-50 w-full border-b border-st-outline-variant/10 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <div className="flex items-center gap-12">
          <Link
            href="#"
            className="font-[family-name:var(--font-heading),ui-sans-serif] bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-2xl font-black tracking-tight text-transparent"
          >
            FTES Master
          </Link>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Điều hướng">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={
                  item.active
                    ? "border-b-2 border-blue-700 py-1 font-bold text-blue-700"
                    : "py-1 text-slate-600 transition-colors hover:text-blue-600"
                }
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#ftes"
            className="hidden font-medium text-slate-600 transition-colors hover:text-blue-600 sm:block"
          >
            Về ftes.vn
          </a>
          <a
            href="#register"
            className="stitch-action-gradient rounded-full px-6 py-2.5 font-bold text-white shadow-lg shadow-st-primary/20 transition-transform duration-200 hover:scale-105"
          >
            Đăng ký miễn phí
          </a>
        </div>
      </div>
    </header>
  );
}
