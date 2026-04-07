import { MaterialIcon } from "./MaterialIcon";

const scheduleItems = [
  {
    icon: "video_library",
    title: "Hình thức:",
    text: "Học Online qua Google Meet / Zoom kết hợp LMS."
  },
  {
    icon: "timer",
    title: "Thời lượng:",
    text: "8 buổi chuyên sâu / mỗi môn."
  },
  {
    icon: "construction",
    title: "Công cụ:",
    text: "Sử dụng hệ thống AI của FTES để luyện tập."
  },
  {
    icon: "groups_2",
    title: "Cộng đồng:",
    text: "Nhóm Zalo/Discord hỗ trợ giải đáp 24/7."
  }
];

export function LandingSchedule() {
  return (
    <section className="bg-st-surface px-8 py-24" id="schedule">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 md:flex-row">
        <div className="flex-1">
          <h2 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-8 text-4xl font-black text-st-on-background">
            Thông tin chi tiết khóa học
          </h2>
          <ul className="space-y-6">
            {scheduleItems.map((row) => (
              <li key={row.title} className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-st-surface-container-high">
                  <MaterialIcon name={row.icon} className="!text-xl text-st-primary" />
                </div>
                <div>
                  <strong className="block text-lg text-st-on-background">{row.title}</strong>
                  <span className="text-st-on-surface-variant">{row.text}</span>
                </div>
              </li>
            ))}
          </ul>
          <a
            href="#register"
            className="stitch-action-gradient mt-10 inline-block rounded-full px-8 py-4 font-bold text-white shadow-lg"
          >
            Đăng ký ngay để nhận lịch
          </a>
        </div>
        <div className="w-full flex-1">
          <div className="rounded-[2rem] border border-st-outline-variant/15 bg-st-surface-container-lowest p-8 shadow-sm">
            <div className="mb-8 flex items-center justify-between">
              <h4 className="text-xl font-bold text-st-on-background">Lịch khai giảng dự kiến</h4>
              <span className="rounded-full bg-st-secondary-container px-3 py-1 text-xs font-bold text-st-on-secondary-container uppercase">
                Coming Soon
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-xl bg-st-surface-container-low p-4">
                <span className="text-st-on-background">Khai giảng PRF192</span>
                <span className="font-bold text-st-primary">Thứ 2, Tuần sau</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-st-surface-container-low p-4">
                <span className="text-st-on-background">Khai giảng MAE101</span>
                <span className="font-bold text-st-secondary">Thứ 3, Tuần sau</span>
              </div>
              <p className="pt-4 text-center text-sm text-st-on-surface-variant italic">
                *Lịch chi tiết sẽ được gửi qua Email sau khi đăng ký thành công.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
