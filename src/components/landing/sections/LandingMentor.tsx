import { MaterialIcon } from "./MaterialIcon";

const feedbacks = [
  {
    code: "PRF192",
    name: "Feedback PRF192",
    desc: "Xem nhận xét và kết quả học tập của học viên môn Ngôn ngữ lập trình C.",
    url: "https://drive.google.com/drive/folders/12z_a5_sT8TGf4oLylaMJTBFjA0Mq85Rv?fbclid=IwY2xjawOvUoJleHRuA2FlbQIxMABicmlkETFrSzA4bGd5eDBzQm90eUpTc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHnTDydsbLN4CO1NBCyV4c5prOGWQeHUrSCpbgdyOllQWTUn_gh7TrhQtjcYM_aem_B7AFu9m-JVKN1fRKCGZxVQ",
    icon: "folder_open" as const,
    color: "bg-orange-500",
    tag: "PRF192",
    tagColor: "bg-orange-500/10 text-orange-600",
  },
  {
    code: "MAE101",
    name: "Feedback MAE101",
    desc: "Xem nhận xét và kết quả học tập của học viên môn Toán cao cấp cho Kỹ sư.",
    url: "https://drive.google.com/drive/folders/1THJcUr4ONP09WaN2YM37nkoLfY72PuQZ?fbclid=IwY2xjawOvUoJleHRuA2FlbQIxMABicmlkETFrSzA4bGd5eDBzQm90eUpTc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHnTDydsbLN4CO1NBCyV4c5prOGWQeHUrSCpbgdyOllQWTUn_gh7TrhQtjcYM_aem_B7AFu9m-JVKN1fRKCGZxVQ",
    icon: "folder_open" as const,
    color: "bg-violet-500",
    tag: "MAE101",
    tagColor: "bg-violet-500/10 text-violet-600",
  },
];

export function LandingMentor() {
  return (
    <section className="overflow-hidden bg-st-surface-container-low px-8 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-4 text-4xl font-black text-st-on-background">
            Gặp gỡ Mentor & Học viên
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Mentor Phan Thanh Huy */}
          <div className="rounded-[2rem] border border-st-outline-variant/15 bg-st-surface-container-lowest p-8 text-center shadow-sm lg:col-span-4">
            <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full border-4 border-st-secondary/20 bg-st-secondary-container">
              <MaterialIcon name="person" className="!text-5xl text-st-on-secondary-container" />
            </div>
            <h3 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-2 text-2xl font-bold text-st-on-background">
              Phan Thanh Huy
            </h3>
            <p className="mb-4 font-bold text-st-secondary">Co-Founder FTES (AI - learning)</p>
            <ul className="mb-6 space-y-2 text-left text-sm leading-relaxed text-st-on-surface-variant">
              <li className="flex items-start gap-2">
                <MaterialIcon name="emoji_events" className="!mt-0.5 !text-base text-yellow-600 shrink-0" filled />
                <span>Giải Tư Sáng tạo khoa học kĩ thuật cấp Quốc Gia</span>
              </li>
              <li className="flex items-start gap-2">
                <MaterialIcon name="emoji_events" className="!mt-0.5 !text-base text-yellow-600 shrink-0" filled />
                <span>Giải Nhất cuộc thi Start-Up (SIU)</span>
              </li>
              <li className="flex items-start gap-2">
                <MaterialIcon name="emoji_events" className="!mt-0.5 !text-base text-yellow-600 shrink-0" filled />
                <span>Giải Khuyến Khích cuộc thi AIoT Developer InnoWorks 2022</span>
              </li>
              <li className="flex items-start gap-2">
                <MaterialIcon name="school" className="!mt-0.5 !text-base text-st-secondary shrink-0" filled />
                <span>Top 5 SVSX khối ngành Kỹ Thuật năm 2022 - 2023</span>
              </li>
              <li className="flex items-start gap-2">
                <MaterialIcon name="history_edu" className="!mt-0.5 !text-base text-st-secondary shrink-0" filled />
                <span>Hơn 2 năm kinh nghiệm dạy bồi dưỡng HSG chuyên tin cấp thành phố, tỉnh, quốc gia</span>
              </li>
            </ul>
            <div className="flex flex-wrap justify-center gap-2">
              <div className="rounded-full bg-st-secondary/10 px-3 py-1 text-xs font-bold text-st-secondary">
                Co-Founder
              </div>
              <div className="rounded-full bg-st-tertiary/10 px-3 py-1 text-xs font-bold text-st-tertiary">
                AI Lead
              </div>
            </div>
          </div>

          {/* Feedback Links */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
            {feedbacks.map((f) => (
              <a
                key={f.code}
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-[2rem] border border-st-outline-variant/15 bg-st-surface-container-lowest p-8 shadow-sm transition-colors hover:bg-st-surface-container-high"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-md ${f.color}`}>
                      <MaterialIcon name={f.icon} className="!text-2xl" />
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${f.tagColor}`}>
                      {f.tag}
                    </span>
                  </div>
                  <h4 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-2 text-xl font-bold text-st-on-background">
                    {f.name}
                  </h4>
                  <p className="text-sm leading-relaxed text-st-on-surface-variant">
                    {f.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 font-bold text-st-primary">
                  <span>Mở Google Drive</span>
                  <MaterialIcon
                    name="open_in_new"
                    className="!text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
