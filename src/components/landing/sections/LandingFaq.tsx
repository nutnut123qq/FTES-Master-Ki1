"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const items = [
  {
    q: "Khóa học có thực sự miễn phí không?",
    a: "Có, khóa học Master Kì 1 hoàn toàn miễn phí 100% về học phí. Đây là hoạt động cộng đồng của FTES nhằm hỗ trợ các bạn sinh viên mới."
  },
  {
    q: "Học chung 2 môn hay tách riêng?",
    a: "Lịch học sẽ được sắp xếp xen kẽ giữa PRF192 và MAE101 để các bạn có thể tham gia đầy đủ cả 2 môn mà không bị trùng lịch."
  },
  {
    q: "Nếu nghỉ buổi học có record không?",
    a: "Mọi buổi học đều được ghi lại và đăng tải lên hệ thống LMS của FTES để các bạn có thể xem lại bất cứ lúc nào."
  },
  {
    q: "Mất gốc hoàn toàn có theo được không?",
    a: "Chắc chắn là có. Nội dung được thiết kế từ con số 0, đặc biệt dành cho những người chưa biết gì về lập trình hay toán chuyên ngành."
  }
];

export function LandingFaq() {
  return (
    <section className="bg-st-surface-container-low px-8 py-24" id="faq">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-4 text-4xl font-black text-st-on-background">
            Câu hỏi thường gặp
          </h2>
        </div>
        <Accordion defaultValue={["faq-0"]} className="w-full space-y-4">
          {items.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`faq-${i}`}
              className="rounded-[2rem] border border-st-outline-variant/15 bg-st-surface-container-lowest px-6 py-2 shadow-sm border-b-0"
            >
              <AccordionTrigger className="font-[family-name:var(--font-heading),ui-sans-serif] text-left text-lg font-bold text-st-on-background hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-st-on-surface-variant">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
