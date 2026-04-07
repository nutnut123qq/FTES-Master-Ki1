import Link from "next/link";

import { MaterialIcon } from "./MaterialIcon";

export function LandingFooter() {
  return (
    <footer className="mt-20 w-full bg-slate-50 py-12 dark:bg-slate-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-8 md:grid-cols-3">
        <div className="space-y-6">
          <Link href="#" className="text-xl font-bold text-slate-900 dark:text-white">
            FTES Master
          </Link>
          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            © 2024 FTES Master. The Fluid Intellect. Nâng tầm tri thức Việt qua công nghệ và sự tận tâm.
          </p>
          <div className="flex gap-4">
            <MaterialIcon name="social_leaderboard" className="!text-xl cursor-pointer text-slate-400 hover:text-st-primary" />
            <MaterialIcon name="language" className="!text-xl cursor-pointer text-slate-400 hover:text-st-primary" />
            <MaterialIcon name="alternate_email" className="!text-xl cursor-pointer text-slate-400 hover:text-st-primary" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:col-span-2">
          <div className="space-y-4">
            <h5 className="font-bold text-slate-900 dark:text-white">Liên kết</h5>
            <nav className="flex flex-col gap-3 text-sm">
              <a href="#" className="text-slate-500 transition-colors hover:text-blue-500 dark:text-slate-400">
                Điều khoản
              </a>
              <a href="#" className="text-slate-500 transition-colors hover:text-blue-500 dark:text-slate-400">
                Bảo mật
              </a>
              <a href="#" className="text-slate-500 transition-colors hover:text-blue-500 dark:text-slate-400">
                Liên hệ
              </a>
              <a href="#" className="text-slate-500 transition-colors hover:text-blue-500 dark:text-slate-400">
                Tuyển dụng
              </a>
            </nav>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold text-slate-900 dark:text-white">Địa chỉ</h5>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Khu Công nghệ cao Hòa Lạc,
              <br />
              Thạch Thất, Hà Nội, Việt Nam.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">Email: support@ftes.vn</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
