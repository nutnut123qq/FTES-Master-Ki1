import Image from "next/image";

import { MaterialIcon } from "./MaterialIcon";

const heroImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBfXj5kNvXLcNIYWI59RscEzomA10in7RIFFohHfuR7bGZrv9PchOZGE7sVzBRCz3eNZRZhDsy5ELvqnXenCBkXqOHLUzM_KnXU3y1nl-pyNEgZ-QgV9Df0LXhPSDvdnj22HEfane99NGr0y5sX0hx40Tl-CXbzKT26Ib4wKuTUnTuih1YHol6esBaMOlgv3kdWdCyuT4AWwQgA5tkcngt1SX-9ZAtJqBawgE7JhNF-nlKQCHCSvPFW5JJucJ1vi6noh3-RAoxOaLjc";

export function LandingHero() {
  return (
    <section className="relative overflow-hidden px-8 pt-16 pb-24" id="intro">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="z-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-st-primary-fixed px-4 py-2 text-sm font-bold text-st-on-primary-fixed">
            <MaterialIcon name="auto_awesome" className="!text-sm" filled />
            Mùa học mới 2026
          </div>
          <h1 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-6 text-5xl leading-tight font-black text-st-on-background lg:text-7xl">
            Khóa học miễn phí Master Kì 1 cho <span className="text-st-primary">PRF192</span> và{" "}
            <span className="text-st-secondary">MAE101</span>
          </h1>
          <p className="mb-10 max-w-xl text-xl leading-relaxed text-st-on-surface-variant">
            Dành cho sinh viên muốn học đúng trọng tâm và có lộ trình rõ ràng để bứt phá điểm số ngay
            từ học kỳ đầu tiên.
          </p>
          <div className="mb-12 flex flex-wrap gap-4">
            {[
              { icon: "check_circle", label: "Miễn phí" },
              { icon: "group", label: "Có mentor" },
              { icon: "map", label: "Có lộ trình" },
              { icon: "hub", label: "Kết nối FTES" }
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center gap-2 rounded-xl border border-st-outline-variant/10 bg-st-surface-container-lowest px-4 py-2 shadow-sm"
              >
                <MaterialIcon name={row.icon} className="!text-xl text-st-primary" />
                <span className="font-medium text-st-on-background">{row.label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#register"
              className="stitch-action-gradient rounded-full px-10 py-4 text-center text-lg font-bold text-white shadow-xl shadow-st-primary/30 transition-transform hover:scale-105"
            >
              Đăng ký học miễn phí
            </a>
            <a
              href="#curriculum"
              className="rounded-full bg-st-surface-container-high px-10 py-4 text-center text-lg font-bold text-st-primary transition-colors hover:bg-st-surface-container-highest"
            >
              Xem nội dung khóa học
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-st-primary/10 to-st-tertiary/10 blur-3xl" />
          <Image
            src={heroImg}
            alt="Student studying with modern tech"
            width={900}
            height={680}
            className="w-full rounded-lg transition-transform duration-500 hover:scale-[1.02]"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
