import { MaterialIcon } from "./MaterialIcon";

export function LandingCurriculum() {
  return (
    <section className="bg-st-surface px-8 py-24" id="curriculum">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-4 text-4xl font-black text-st-on-background">
            Nội dung đào tạo chi tiết
          </h2>
          <p className="text-lg text-st-on-surface-variant">
            Hai môn học nền tảng quan trọng nhất của học kỳ đầu tiên.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-st-outline-variant/15 bg-st-surface-container-lowest shadow-sm">
            <div className="flex items-center justify-between bg-st-primary px-8 py-6 text-white">
              <h3 className="font-[family-name:var(--font-heading),ui-sans-serif] text-2xl font-bold">
                PRF192: Lập trình C
              </h3>
              <MaterialIcon name="code" className="!text-3xl text-white" />
            </div>
            <div className="space-y-6 p-8">
              {[
                {
                  n: "1",
                  t: "Tư duy lập trình",
                  d: "Phá vỡ rào cản ngôn ngữ, tập trung vào cách giải quyết vấn đề."
                },
                {
                  n: "2",
                  t: "Cấu trúc cơ bản",
                  d: "Làm chủ vòng lặp, mảng, chuỗi và con trỏ một cách trực quan."
                },
                {
                  n: "3",
                  t: "Dạng bài phổ biến",
                  d: "Giải quyết các Lab và Workshop thường gặp trong chương trình."
                }
              ].map((row) => (
                <div key={row.n} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-st-primary-fixed text-sm font-bold text-st-primary">
                    {row.n}
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-bold text-st-on-background">{row.t}</h4>
                    <p className="text-st-on-surface-variant">{row.d}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-st-error-container text-st-on-error-container">
                  <MaterialIcon name="warning" className="!text-sm" filled />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-bold text-st-on-background">Lỗi thường gặp</h4>
                  <p className="text-st-on-surface-variant">
                    Tránh các lỗi logic và cú pháp khiến bài làm mất điểm oan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-st-outline-variant/15 bg-st-surface-container-lowest shadow-sm">
            <div className="flex items-center justify-between bg-st-secondary px-8 py-6 text-white">
              <h3 className="font-[family-name:var(--font-heading),ui-sans-serif] text-2xl font-bold">
                MAE101: Toán cho CNTT
              </h3>
              <MaterialIcon name="functions" className="!text-3xl text-white" />
            </div>
            <div className="space-y-6 p-8">
              {[
                {
                  n: "1",
                  t: "Nền tảng toán học",
                  d: "Ôn tập các kiến thức về Ma trận, Hệ phương trình, Giải tích."
                },
                {
                  n: "2",
                  t: "Dạng trọng tâm",
                  d: "Phân loại các dạng toán chính xác xuất hiện trong đề thi."
                },
                {
                  n: "3",
                  t: "Tư duy giải nhanh",
                  d: "Mẹo sử dụng máy tính bỏ túi và quy tắc giải nhanh trắc nghiệm."
                }
              ].map((row) => (
                <div key={row.n} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-st-secondary-fixed text-sm font-bold text-st-secondary">
                    {row.n}
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-bold text-st-on-background">{row.t}</h4>
                    <p className="text-st-on-surface-variant">{row.d}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-st-error-container text-st-on-error-container">
                  <MaterialIcon name="warning" className="!text-sm" filled />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-bold text-st-on-background">Lỗi thường gặp</h4>
                  <p className="text-st-on-surface-variant">
                    Khắc phục sai sót trong tính toán và nhận diện nhầm dạng bài.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
