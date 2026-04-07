import { MaterialIcon } from "./MaterialIcon";

const cards = [
  {
    icon: "rocket_launch",
    bg: "bg-st-primary-fixed text-st-primary",
    title: "Sinh viên mới bắt đầu",
    body: "Muốn có bước đệm vững chắc ngay từ những ngày đầu nhập học."
  },
  {
    icon: "heart_broken",
    bg: "bg-st-tertiary-fixed text-st-tertiary",
    title: "Sinh viên mất gốc",
    body: "Cần hệ thống lại kiến thức cơ bản một cách đơn giản nhất."
  },
  {
    icon: "ads_click",
    bg: "bg-st-secondary-fixed text-st-secondary",
    title: "Cần lộ trình rõ",
    body: "Cảm thấy hoang mang trước lượng kiến thức lớn từ nhà trường."
  }
];

export function LandingAudience() {
  return (
    <section className="bg-st-surface-container-low px-8 py-24">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-st-outline-variant/15 bg-st-surface-container-lowest p-12 text-center shadow-sm">
        <h2 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-8 text-3xl font-black text-st-on-background">
          Khóa học này dành cho ai?
        </h2>
        <div className="mb-10 grid grid-cols-1 gap-8 text-left md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="space-y-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${c.bg}`}
              >
                <MaterialIcon name={c.icon} className="!text-2xl" />
              </div>
              <h4 className="text-lg font-bold text-st-on-background">{c.title}</h4>
              <p className="text-st-on-surface-variant">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="inline-block rounded-full bg-st-surface-container px-8 py-4">
          <p className="font-bold text-st-primary">
            Nếu bạn thuộc 1 trong 3 nhóm → bạn chắc chắn nên đăng ký ngay!
          </p>
        </div>
      </div>
    </section>
  );
}
