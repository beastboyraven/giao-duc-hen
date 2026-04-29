# Giáo Dục Hen - Bệnh viện Nhi Đồng 1

Website tuyên truyền giáo dục hen cho phụ huynh.
Nội dung từ `content.json` - không thu thập dữ liệu, không đăng nhập, không API.

## Tech stack

- React 18 + Vite 5
- Tailwind CSS 3
- React Router DOM 6
- Lucide React (icons)

## Cấu trúc thư mục

```
SourceWeb/
├── public/
│   └── assets/              # logo, family-hero, shield-medical, inhaler-cute
├── src/
│   ├── components/          # Header, Footer, MobileMenu, Cards, ...
│   ├── pages/               # Home + 5 trang nội dung
│   ├── data/content.json    # Nguồn nội dung (sao chép từ root)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── vercel.json
```

## Chạy local

```bash
cd SourceWeb
npm install
npm run dev
```

Mặc định mở http://localhost:5173

## Build sản phẩm

```bash
npm run build
npm run preview
```

Output ở thư mục `dist/`.

## Deploy lên Vercel

### Cách 1: Qua Vercel Dashboard (khuyến nghị)

1. Push thư mục `SourceWeb/` lên GitHub (hoặc push cả repo, sau đó cấu hình Root Directory).
2. Truy cập https://vercel.com/new -> Import repo.
3. Cấu hình:
   - Framework Preset: **Vite**
   - Root Directory: `SourceWeb` (nếu repo có nhiều thư mục)
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Bấm Deploy. Sau ~1 phút sẽ có URL công khai dạng `https://giao-duc-hen.vercel.app`.

### Cách 2: Vercel CLI

```bash
npm i -g vercel
cd SourceWeb
vercel
vercel --prod
```

`vercel.json` đã cấu hình sẵn rewrite về `index.html` để React Router hoạt động đúng.

## Tạo mã QR cho poster

Sau khi có URL Vercel, vào https://www.qr-code-generator.com hoặc dùng `qrserver`:

```
https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=https://your-app.vercel.app
```

Lưu PNG, dán lên poster A4 phát cho phụ huynh.

## Tuỳ chỉnh nội dung

Sửa `src/data/content.json` rồi `npm run build` lại. Không cần đụng vào code component.

## Ghi chú về assets

- 4 ảnh đã có sẵn trong `public/assets/`: `logo.png`, `family-hero.png`, `shield-medical.png`, `inhaler-cute.png`.
- Các icon còn lại dùng `lucide-react` để giữ giao diện gọn nhẹ và đồng nhất.
- Nếu sau này tách được thêm asset từ `AllAssetInOne.png`, chỉ cần đặt vào `public/assets/` đúng tên file là dùng được.
