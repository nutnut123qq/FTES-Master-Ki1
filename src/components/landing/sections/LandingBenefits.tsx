import { MaterialIcon } from "./MaterialIcon";

const prf192Topics = {
  theory: [
    "Dự tính 8 buổi",
    "Xuất nhập",
    "Kiểu dữ liệu",
    "Câu lệnh rẽ nhánh",
    "Vòng lặp",
    "Hàm",
    "Mảng 1 - 2 chiều",
    "Con trỏ",
    "OOP cơ bản",
  ],
  pe: ["Luyện tập đề làm theo từng buổi"],
};

const mae101Topics = {
  math3: [
    "Hàm và đồ thị",
    "Nguyên hàm - tích phân",
    "Ứng dụng",
    "Bài tập ôn luyện",
    "Giới hạn - đạo hàm",
  ],
  matrix: [
    "Hệ phương trình tuyến tính",
    "Các phép toán cơ bản ma trận",
    "Định thức",
    "Vector",
    "Giá trị riêng - vector riêng",
    "Chéo hóa",
    "Không gian con",
  ],
  fe: [
    "Chữa chi tiết 3 đề gần nhất",
    "Tặng video chữa đề từ trước",
    "Tặng kịp bảng công thức hay dùng",
    "Trick casio duy nhất tại Funnycodde",
    "Chữa chi tiết nâng cao aim 9+",
  ],
};

function TopicTag({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "pe" | "fe" }) {
  const variantClasses = {
    default: "bg-st-primary-container text-st-on-primary-container",
    pe: "bg-st-tertiary-container text-st-on-tertiary-container",
    fe: "bg-st-tertiary-container text-st-on-tertiary-container",
  };

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}

function CourseCard({
  code,
  name,
  icon,
  gradient,
  children,
}: {
  code: string;
  name: string;
  icon: string;
  gradient: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[2rem] border border-st-outline-variant/15 bg-st-surface-container-lowest p-8 shadow-sm">
      <div className="mb-6 flex items-center gap-4">
        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-md ${gradient}`}>
          <MaterialIcon name={icon} className="!text-2xl" />
        </div>
        <div>
          <span className="inline-block rounded-lg bg-st-surface-container-high px-2.5 py-0.5 text-xs font-bold tracking-wider text-st-on-surface-variant uppercase">
            {code}
          </span>
          <h3 className="font-[family-name:var(--font-heading),ui-sans-serif] mt-1 text-2xl font-bold text-st-on-background">
            {name}
          </h3>
        </div>
      </div>
      {children}
    </div>
  );
}

function SectionBlock({
  title,
  titleColor,
  children,
}: {
  title: string;
  titleColor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5 last:mb-0">
      <h4 className={`mb-3 text-sm font-bold tracking-wide uppercase ${titleColor}`}>{title}</h4>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

export function LandingBenefits() {
  return (
    <section className="bg-st-surface-container-low px-8 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-4 text-4xl font-black text-st-on-background">
            Nội dung khóa học
          </h2>
          <p className="text-lg text-st-on-surface-variant">
            Chương trình được thiết kế bám sát đề cương môn PRF192 &amp; MAE101 tại FPT University.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* PRF192 Card */}
          <CourseCard
            code="PRF192"
            name="Ngôn ngữ lập trình C"
            icon="code"
            gradient="bg-orange-500"
          >
            <SectionBlock title="Lý thuyết" titleColor="text-orange-500">
              {prf192Topics.theory.map((topic) => (
                <TopicTag key={topic}>{topic}</TopicTag>
              ))}
            </SectionBlock>
            <SectionBlock title="Ôn tập PE" titleColor="text-red-500">
              {prf192Topics.pe.map((topic) => (
                <TopicTag key={topic} variant="pe">
                  {topic}
                </TopicTag>
              ))}
            </SectionBlock>
          </CourseCard>

          {/* MAE101 Card */}
          <CourseCard
            code="MAE101"
            name="Toán cao cấp cho Kỹ sư"
            icon="functions"
            gradient="bg-violet-500"
          >
            <SectionBlock title="Ôn tập kiến thức Toán cấp 3" titleColor="text-violet-500">
              {mae101Topics.math3.map((topic) => (
                <TopicTag key={topic}>{topic}</TopicTag>
              ))}
            </SectionBlock>
            <SectionBlock title="Matrix - Vector" titleColor="text-cyan-600">
              {mae101Topics.matrix.map((topic) => (
                <TopicTag key={topic}>{topic}</TopicTag>
              ))}
            </SectionBlock>
            <SectionBlock title="Ôn tập FE" titleColor="text-indigo-500">
              {mae101Topics.fe.map((topic) => (
                <TopicTag key={topic} variant="fe">
                  {topic}
                </TopicTag>
              ))}
            </SectionBlock>
          </CourseCard>
        </div>
      </div>
    </section>
  );
}
