# FTES

Frontend **Next.js** cho FTES: landing **Master Kì 1** (bám design Stitch), scaffold sẵn GraphQL, Redux, HeroUI và Stitch MCP.

## Yêu cầu

- Node.js **20+** (khuyến nghị)

## Cài đặt và chạy

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) — route `/` là landing FTES Master Kì 1 (PRF192 / MAE101).

```bash
npm run build    # build production
npm run start    # chạy sau build
npm run lint     # ESLint (flat config, Next 16 không còn `next lint`)
```

## Công nghệ

| Thành phần | Ghi chú |
|------------|---------|
| Next.js **16** | App Router, React **19** |
| Tailwind **v4** | `@tailwindcss/postcss` |
| shadcn | preset **base-nova** (Base UI) |
| Font | **Inter** + **Be Vietnam Pro**; icon landing: **Material Symbols Outlined** (link trong `layout`) |
| State / data | Redux Toolkit, Apollo Client, SWR (theo module) |

Landing được tách section tại `src/components/landing/sections/`, màu token Stitch (`st-*`) trong `src/app/globals.css`.

## Biến môi trường

Tạo `.env.local` (không commit; đã có trong `.gitignore`):

| Biến | Mô tả |
|------|--------|
| `NEXT_PUBLIC_API_URL` | Base URL API (nếu dùng) |
| `NEXT_PUBLIC_GRAPHQL_URL` | Endpoint GraphQL |

Stitch CLI (export):

| Biến | Mô tả |
|------|--------|
| `STITCH_API_KEY` | Hoặc cấu hình trong `.cursor/mcp.json` (file này **không** push — xem `.gitignore`) |
| `STITCH_PROJECT_ID` | ID project Stitch khi chạy `npm run stitch:export` |

## Stitch (Cursor MCP + export)

1. Copy `.cursor/mcp.json.example` → `.cursor/mcp.json`
2. Điền `STITCH_API_KEY`, lưu file
3. Reload MCP / khởi động lại Cursor
4. `npm run stitch:doctor` để kiểm tra

Xuất HTML site từ Stitch:

```bash
set STITCH_PROJECT_ID=<id>   # Windows CMD
npm run stitch:export
```

Output: `stitch-export/` (thư mục **đang ignore trong git** — tạo lại máy local khi cần). Trên một số terminal Windows, CLI có thể cần TTY; khi lỗi, dùng MCP trong Cursor hoặc shell tương tác đầy đủ.

## Cấu trúc thư mục (rút gọn)

```
src/
  app/                 # App Router, layout, globals.css
  components/
    landing/           # Landing Stitch-style
    ui/                # shadcn
    providers/         # HeroUI, theme, SWR, Redux, …
  hooks/ modules/ redux/
```

## Git

- **Không** commit `.cursor/mcp.json` (chứa API key).
- Commit `package-lock.json` để đồng bộ dependency.

## License

ISC
