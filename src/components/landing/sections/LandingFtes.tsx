import Image from "next/image";

const ftesUiImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuApgzKztOA2jiE-a8k3N8ViGFM8sM-dnlf_pCAbh1MoTxv1es6VbmDXlmtSStbKTmKzbIWdfEg9CEww3BzKwlLrgHnBVyBPcSbOnOBT6-iZ4HnUpUGd8YSo7pSwgA_VrVIn6yyAxlMvReuxes-nKsiR6j2NGsMu3b0i8ScagiP8z6n8-fwNMtYPmF0EPwI95F_6I2euGvJa81GxrOxg2IlECTZ8S4OvBJP24NP956UDkdHVpbC_tLyLF0wo_nBt3qSH7AlxPo6JoS_f";

export function LandingFtes() {
  return (
    <section className="overflow-hidden px-8 py-24" id="ftes">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 rounded-xl bg-st-primary p-12 text-white md:flex-row">
        <div className="pointer-events-none absolute top-0 right-0 h-full w-full opacity-10">
          <div className="absolute top-0 right-0 -mt-64 -mr-64 h-[500px] w-[500px] rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative z-10 flex-1">
          <h2 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-6 text-4xl font-black">
            Về FTES Master
          </h2>
          <p className="mb-10 text-xl leading-relaxed text-white/80">
            FTES là nền tảng hỗ trợ học tập hàng đầu. Chúng tôi xây dựng một hệ sinh thái học tập kết hợp
            cùng công nghệ AI để cá nhân hóa lộ trình cho từng sinh viên, giúp việc học trở nên thông minh và
            hiệu quả hơn.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://ftes.vn"
              className="rounded-full bg-white px-8 py-3 font-bold text-st-primary transition-colors hover:bg-st-surface-container-highest"
            >
              Khám phá FTES
            </a>
            <a
              href="#register"
              className="rounded-full border-2 border-white/30 px-8 py-3 font-bold text-white transition-colors hover:bg-white/10"
            >
              Đăng ký miễn phí
            </a>
          </div>
        </div>
        <div className="relative z-10 flex w-full flex-1 justify-center">
          <div className="w-full max-w-sm rounded-[2rem] border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <Image
              src={ftesUiImg}
              alt="FTES AI Interface"
              width={400}
              height={520}
              className="rounded-lg shadow-2xl"
              sizes="(min-width: 768px) 400px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
