import Link from "next/link";
import Image from "next/image";

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
            className="flex items-center"
            aria-label="FTES Master"
          >
            <Image
              src="/images/Ftes_logo.jpg"
              alt="FTES Master"
              width={208}
              height={44}
              className="h-11 w-auto"
              priority
            />
          </Link>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Điều hướng">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={
                  item.active
                    ? "border-b-2 border-st-primary py-1 font-bold text-st-primary"
                    : "py-1 text-st-on-surface-variant transition-colors hover:text-st-secondary"
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
            className="hidden font-medium text-st-on-surface-variant transition-colors hover:text-st-secondary sm:block"
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
