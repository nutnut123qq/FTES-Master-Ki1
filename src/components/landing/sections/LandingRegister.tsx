export function LandingRegister() {
  return (
    <section className="bg-st-surface px-8 py-24" id="register">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-st-outline-variant/15 bg-st-surface-container-lowest p-12 shadow-2xl">
          <div className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-st-primary/10" />
          <div className="relative z-10 mb-10 text-center">
            <h2 className="font-[family-name:var(--font-heading),ui-sans-serif] mb-4 text-4xl font-black text-st-on-background">
              Đăng ký giữ chỗ ngay
            </h2>
            <p className="text-st-on-surface-variant">Số lượng có hạn để đảm bảo chất lượng giảng dạy.</p>
          </div>
          <form className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2" action="#" method="post">
            <div className="space-y-2">
              <label className="ml-1 block text-sm font-bold text-st-on-background" htmlFor="reg-name">
                Họ tên
              </label>
              <input
                id="reg-name"
                name="name"
                type="text"
                placeholder="Nguyễn Văn A"
                className="w-full rounded-xl border-0 bg-st-surface-container-low px-4 py-3 text-st-on-background transition-all placeholder:text-st-on-surface-variant/70 focus:ring-2 focus:ring-st-primary/20 focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="ml-1 block text-sm font-bold text-st-on-background" htmlFor="reg-phone">
                Số điện thoại
              </label>
              <input
                id="reg-phone"
                name="phone"
                type="tel"
                placeholder="0901 234 567"
                className="w-full rounded-xl border-0 bg-st-surface-container-low px-4 py-3 text-st-on-background transition-all placeholder:text-st-on-surface-variant/70 focus:ring-2 focus:ring-st-primary/20 focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="ml-1 block text-sm font-bold text-st-on-background" htmlFor="reg-email">
                Email
              </label>
              <input
                id="reg-email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
                className="w-full rounded-xl border-0 bg-st-surface-container-low px-4 py-3 text-st-on-background transition-all placeholder:text-st-on-surface-variant/70 focus:ring-2 focus:ring-st-primary/20 focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="ml-1 block text-sm font-bold text-st-on-background" htmlFor="reg-subject">
                Môn học đăng ký
              </label>
              <select
                id="reg-subject"
                name="subject"
                className="w-full rounded-xl border-0 bg-st-surface-container-low px-4 py-3 text-st-on-background transition-all focus:ring-2 focus:ring-st-primary/20 focus:outline-none"
              >
                <option>Cả hai môn</option>
                <option>PRF192 (C Programming)</option>
                <option>MAE101 (Mathematics)</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="ml-1 block text-sm font-bold text-st-on-background" htmlFor="reg-level">
                Trình độ hiện tại
              </label>
              <select
                id="reg-level"
                name="level"
                className="w-full rounded-xl border-0 bg-st-surface-container-low px-4 py-3 text-st-on-background transition-all focus:ring-2 focus:ring-st-primary/20 focus:outline-none"
              >
                <option>Mới bắt đầu</option>
                <option>Đã biết sơ qua</option>
                <option>Mất gốc cần học lại</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="ml-1 block text-sm font-bold text-st-on-background" htmlFor="reg-note">
                Ghi chú thêm
              </label>
              <input
                id="reg-note"
                name="note"
                type="text"
                placeholder="..."
                className="w-full rounded-xl border-0 bg-st-surface-container-low px-4 py-3 text-st-on-background transition-all placeholder:text-st-on-surface-variant/70 focus:ring-2 focus:ring-st-primary/20 focus:outline-none"
              />
            </div>
            <div className="md:col-span-2 pt-6">
              <button
                type="submit"
                className="stitch-action-gradient w-full rounded-xl py-4 text-lg font-bold text-white shadow-xl transition-transform hover:scale-[1.01]"
              >
                Đăng ký học miễn phí ngay
              </button>
              <p className="mt-4 text-center text-xs text-st-on-surface-variant">
                Cam kết không thu phí trong suốt khóa học Master Kì 1.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
