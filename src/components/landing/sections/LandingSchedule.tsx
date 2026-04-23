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
      <div className="mx-auto max-w-7xl text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-8 text-4xl font-black text-st-on-background">
            Thông tin chi tiết khóa học
          </h2>
          <ul className="space-y-6">
            {scheduleItems.map((row) => (
              <li key={row.title} className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-st-surface-container-high">
                  <MaterialIcon name={row.icon} className="!text-xl text-st-primary" />
                </div>
                <div className="text-left">
                  <strong className="block text-lg text-st-on-background">{row.title}</strong>
                  <span className="text-st-on-surface-variant">{row.text}</span>
                </div>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}
