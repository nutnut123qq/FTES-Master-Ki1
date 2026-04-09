import Image from "next/image";
import Link from "next/link";

export function LandingFooter() {
  return (
    <footer className="mt-20 w-full bg-st-surface-container-low py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 sm:px-8 lg:grid-cols-12 lg:gap-8">
        <div className="rounded-2xl bg-white p-6 text-st-on-background lg:col-span-5 lg:p-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
            <Link
              href="#"
              className="inline-flex h-20 w-full max-w-56 items-center justify-start px-1 sm:w-auto sm:justify-center"
            >
              <Image
                src="/images/Ftes_logo.jpg"
                alt="FTES logo"
                width={224}
                height={84}
                className="h-[4.5rem] w-auto object-contain"
              />
            </Link>
            <p className="text-xl leading-tight font-medium text-st-on-background sm:text-[1.75rem]">
              Khơi mở tiềm năng
              <br />
              Dẫn đầu công nghệ
            </p>
          </div>
          <div className="mt-6 flex items-center gap-5 text-st-primary/90">
            <Link
              href="https://www.facebook.com/ftes.edu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:text-st-primary"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
                <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.79-3.89 1.1 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.76l-.44 2.89h-2.32v6.99A10 10 0 0 0 22 12Z" />
              </svg>
            </Link>
            <Link
              href="https://www.tiktok.com/@funnycode_vn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:text-st-primary"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
                <path d="M19.6 8.48a6.8 6.8 0 0 1-3.98-1.28v5.9a5.1 5.1 0 1 1-4.4-5.06v2.5a2.6 2.6 0 1 0 1.9 2.5V2h2.5a4.3 4.3 0 0 0 3.98 3.98v2.5Z" />
              </svg>
            </Link>
            <Link
              href="https://www.youtube.com/@funnycode"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:text-st-primary"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
                <path d="M23 12s0-3.26-.42-4.83a2.98 2.98 0 0 0-2.1-2.1C18.9 4.65 12 4.65 12 4.65s-6.9 0-8.48.42a2.98 2.98 0 0 0-2.1 2.1C1 8.74 1 12 1 12s0 3.26.42 4.83a2.98 2.98 0 0 0 2.1 2.1c1.58.42 8.48.42 8.48.42s6.9 0 8.48-.42a2.98 2.98 0 0 0 2.1-2.1C23 15.26 23 12 23 12Zm-13.78 3.45v-6.9L15.2 12l-5.98 3.45Z" />
              </svg>
            </Link>
          </div>
          <p className="mt-5 text-base leading-relaxed text-st-on-surface-variant">
            © 2026 FTES - Nền tảng học lập trình uy tín tại Việt Nam
          </p>
        </div>
        <div className="rounded-2xl bg-white p-6 lg:col-span-7 lg:p-8">
          <div className="space-y-4 text-sm leading-relaxed text-st-on-surface-variant sm:text-base">
            <p className="text-base font-bold text-st-on-background sm:text-lg">
              CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ GIÁO DỤC FTES
            </p>
            <p>Mã số doanh nghiệp: 5901235207</p>
            <p>Ngày thành lập: 26/08/2025</p>
            <p>Giáo dục và Công nghệ – phát triển sản phẩm hỗ trợ học tập</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
