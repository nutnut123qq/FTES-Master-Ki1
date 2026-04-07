import Image from "next/image";

import { MaterialIcon } from "./MaterialIcon";

const ecosystemImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAChWuF4akQNfbUZuWW0dNSOHxZqY3pP6lwgSn_xziTVWXPvu0O9LGmYGHZrz5-FCncYOJ4Koa-959290ixnp7rK6QV_WlwV7xdIGbSv6Ltjd1uOguO05pYWNNmsJcE73KbVxVe_fEQlAPKqADX-F426nM2yHXSubirOgo1ypqFgNVD023Y_ccxW4HDBUBxoWfzyLknEgORwOHiiDbkUo3fBA4LQakg1auZKBfYmIP6tQ85RZMPvU6KBwi39zowxNSjri_IYKvP6qB2";

export function LandingBenefits() {
  return (
    <section className="bg-st-surface-container-low px-8 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-4 text-4xl font-black text-st-on-background">
            Tại sao nên chọn FTES Master?
          </h2>
          <p className="text-lg text-st-on-surface-variant">
            Chúng tôi tối ưu hóa cách bạn tiếp cận kiến thức nền tảng.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col justify-between rounded-[2rem] border border-st-outline-variant/15 bg-st-surface-container-lowest p-10 shadow-sm md:col-span-2">
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-st-primary-container text-st-on-primary-container">
                <MaterialIcon name="target" className="!text-3xl" />
              </div>
              <h3 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-4 text-2xl font-bold text-st-on-background">
                Học đúng trọng tâm
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-st-on-surface-variant">
                Loại bỏ những lý thuyết rườm rà, tập trung 100% vào các kiến thức then chốt sẽ xuất hiện
                trong các bài kiểm tra và ứng dụng thực tế. Giúp bạn tiết kiệm 50% thời gian học tập.
              </p>
            </div>
            <a
              href="#register"
              className="group flex items-center gap-2 font-bold text-st-primary"
            >
              Đăng ký để giữ chỗ{" "}
              <MaterialIcon
                name="arrow_forward"
                className="!text-xl transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-st-primary p-10 shadow-lg text-white">
            <div className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-transform duration-700 group-hover:scale-150" />
            <div className="relative z-10">
              <MaterialIcon name="route" className="!mb-6 !text-4xl text-white" />
              <h3 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-4 text-2xl font-bold">
                Lộ trình rõ ràng
              </h3>
              <p className="leading-relaxed text-white/80">
                Biết chính xác tuần này học gì, tuần sau cần hoàn thành mục tiêu nào.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-st-outline-variant/15 bg-st-surface-container-lowest p-10 shadow-sm">
            <MaterialIcon name="psychology" className="!mb-6 !text-4xl text-st-secondary" />
            <h3 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-4 text-2xl font-bold text-st-on-background">
              Định hướng hiệu quả
            </h3>
            <p className="leading-relaxed text-st-on-surface-variant">
              Kỹ năng tự học và tư duy giải quyết vấn đề từ các Mentor giàu kinh nghiệm.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 rounded-[2rem] bg-st-tertiary-container p-10 text-white shadow-lg md:col-span-2 md:flex-row">
            <div className="flex-1">
              <h3 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-4 text-2xl font-bold">
                Kết nối hệ sinh thái
              </h3>
              <p className="mb-6 leading-relaxed text-white/80">
                Tiếp cận cộng đồng FTES cùng hệ thống AI hỗ trợ học tập độc quyền cho sinh viên Việt
                Nam.
              </p>
              <Image
                src={ecosystemImg}
                alt="FTES Ecosystem"
                width={800}
                height={420}
                className="w-full rounded-lg border border-white/20"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="flex w-full items-center justify-center md:w-1/3">
              <MaterialIcon name="hub" className="!text-[100px] opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
