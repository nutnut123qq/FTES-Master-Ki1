import Image from "next/image";

import { MaterialIcon } from "./MaterialIcon";

const mentorImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD04p97adeDmOHlWDLEvbC-lJh9d8J53fwv8NU6kwt-kWtXNrPWzLCIK9s73jwDIrVVvXNkR8BLJN3zCeLpYaUKAaoLUXZrHJzw058eMVUrgq8J5haSXdvfg7pjKUVA6uqk6Z1-0TlvJC_7JPPAX4X8lFMlPW2prZr1Ux_-t15rPBk8Tnu8uboU4Q9nHdOxyhCVTLaP4rMuXMF3nbpteXNfk-TBcdz2Tr5z1eVBNIYuKTUDuX_GEYl3f4OyB-xFUJ7UGVA71X4Hbc0I";

const testimonials = [
  {
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtQe7tKKMBXsESw6SiWTlaQqDapiPIIulxFIS1ANwfNDgFl6C52lQZ92_oRfVCU_MVTZ-705GWW3CdFj3BWOkDVSgw9Ab82dJjzevpqelcsH56CBKO5a4oSthiVhkkAyM8UFEbu9qphnGuIbyoYgjP7uM6MBAox0jF39Ctl7pv8PB9-IALW4_g88YTJNkGeTxw2WUw2tyvGMNRSLsemhRzr50a8c-AOe6VlVFBPMnuE_m8_51g47pFqrHJ7pbDU--oOSCad2eefLlV",
    name: "Lê Văn Nam",
    role: "Sinh viên K18",
    quote: '"Em đã từng rất sợ môn C nhưng nhờ sự hướng dẫn của các anh bên FTES mà em đã đạt được 9.5 điểm Final."'
  },
  {
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFzocSxbQL3haWtuXmrDA4JvyfbFYZ35Qot9qxQWD8QZD1mg739oGnt1X2TzwmSmgnL4gbMFhBnObdFpdzNcqE2tRbnoiGDMc8RFZH4zOwJFKyvqqN6qQiG6CR35lL2bZTm7ZObLu7JmxviM8jNbT_GIyp_GhiK0yFy2tvCLQNoIUiKxWiooJALcVIt1tYH72DcIq8MRJ459Lj-Q2UY9VhYc5Unwoax_3zScHxR2TEEzQjOPxtpdz1SXsu7Z308zffCZskHHXh35MV",
    name: "Trần Thu Hà",
    role: "Sinh viên K19",
    quote:
      '"MAE101 không còn là nỗi ám ảnh. Cách giải bài tập trắc nghiệm của khóa học thực sự rất nhanh và hiệu quả."'
  }
];

function Stars() {
  return (
    <div className="ml-auto flex text-yellow-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <MaterialIcon key={i} name="star" className="!text-sm" filled />
      ))}
    </div>
  );
}

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
          <div className="rounded-[2rem] border border-st-outline-variant/15 bg-st-surface-container-lowest p-8 text-center shadow-sm lg:col-span-4">
            <Image
              src={mentorImg}
              alt="Mentor Profile"
              width={128}
              height={128}
              className="mx-auto mb-6 h-32 w-32 rounded-full border-4 border-st-primary/20 object-cover"
            />
            <h3 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-2 text-2xl font-bold text-st-on-background">
              Mentor Nguyễn Tuấn
            </h3>
            <p className="mb-4 font-bold text-st-primary">Tech Lead @ FTES</p>
            <p className="mb-6 leading-relaxed text-st-on-surface-variant">
              &quot;Mình đã giúp hơn 500 sinh viên vượt qua kỳ đầu tiên với điểm số xuất sắc nhờ phương pháp
              học tập trung vào tư duy thay vì học vẹt.&quot;
            </p>
            <div className="flex justify-center gap-2">
              <div className="rounded-full bg-st-primary/10 px-3 py-1 text-xs font-bold text-st-primary">
                4+ Năm Exp
              </div>
              <div className="rounded-full bg-st-tertiary/10 px-3 py-1 text-xs font-bold text-st-tertiary">
                Top Mentor
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-[2rem] border border-st-outline-variant/15 bg-st-surface-container-lowest p-8 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-4">
                  <Image
                    src={t.avatar}
                    alt="Student avatar"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-st-on-background">{t.name}</h4>
                    <p className="text-xs text-st-on-surface-variant">{t.role}</p>
                  </div>
                  <Stars />
                </div>
                <p className="italic text-st-on-surface-variant">{t.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
