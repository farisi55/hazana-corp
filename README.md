# Hazana Corp Website

Company profile website untuk Hazana Corp, sebuah halal-centric integrated business group berbasis di Bogor, Jawa Barat. Website ini dibangun sebagai single-page application statis yang siap dideploy ke Cloudflare Workers Static Assets.

## Tech Stack

- Vite
- React 18
- TypeScript
- Tailwind CSS v3
- Framer Motion
- Lucide React
- Cloudflare Workers Static Assets / Wrangler

## Fitur Utama

- Responsive single-page company profile
- Sticky navbar dengan smooth-scroll navigation
- Hero section dengan animated wireframe globe
- Business unit cards untuk 6 unit bisnis Hazana Corp
- Featured product section untuk Catat Emas
- Services section dengan interactive mouse-tracking network diagram
- Contact section dengan form `mailto:` dan Google Maps embed
- Floating Customer Service Chat berbasis Puter AI
- Favicon, web manifest, SEO meta tags, dan Open Graph metadata

## Struktur Project

```text
hazana-corp/
|-- public/
|   |-- favicon.ico
|   |-- favicon.svg
|   |-- favicon-16x16.png
|   |-- favicon-32x32.png
|   |-- apple-touch-icon.png
|   `-- site.webmanifest
|-- src/
|   |-- assets/
|   |   |-- images/
|   |   `-- svg/
|   |-- components/
|   |   |-- layout/
|   |   |-- sections/
|   |   `-- ui/
|   |-- data/
|   |-- lib/
|   |-- App.tsx
|   |-- main.tsx
|   `-- index.css
|-- index.html
|-- package.json
|-- tailwind.config.ts
|-- vite.config.ts
|-- tsconfig.json
`-- wrangler.toml
```

## Persiapan

Pastikan Node.js sudah terinstall. Project ini sudah diuji dengan Node.js 20.

Install dependencies:

```bash
npm install
```

## Menjalankan Lokal

Development server:

```bash
npm run dev
```

Preview hasil production build:

```bash
npm run build
npm run preview
```

Secara default Vite akan menampilkan URL lokal seperti:

```text
http://localhost:5173
```

atau untuk preview:

```text
http://localhost:4173
```

## Scripts

```bash
npm run dev
```

Menjalankan Vite development server.

```bash
npm run build
```

Menjalankan TypeScript check dan membuat production build ke folder `dist`.

```bash
npm run preview
```

Menjalankan preview server dari hasil build.

```bash
npm run deploy
```

Build project lalu deploy static assets ke Cloudflare Workers via Wrangler.

## Asset Brand

Asset utama berada di:

```text
src/assets/images/
```

File yang digunakan website:

- `logo.png`
- `catat-emas.jpg`

Asset SVG dekoratif dan icon berada di:

```text
src/assets/svg/
```

Catatan: Hero section saat ini tidak memakai `hero-banner.jpg` sebagai background agar tidak terjadi double text. Hero memakai CSS gradient dan animated SVG globe.

## Animasi Interaktif

Hero globe:

- File: `src/components/ui/GlobeAnimation.tsx`
- Longitude line dianimasikan dengan CSS keyframes
- Elemen bergerak di-clip menggunakan SVG `clipPath`
- Mendukung `prefers-reduced-motion`

Services diagram:

- File: `src/components/ui/ServicesDiagram.tsx`
- Diagram mengikuti mouse dengan Framer Motion spring
- Hover node menampilkan tooltip nama layanan
- Disembunyikan pada mobile dengan `hidden lg:flex`

## Customer Service Chat with Puter AI

Website memiliki floating CS chat widget di pojok kanan bawah.

File utama:

```text
src/components/CSChatWidget.tsx
src/components/CSChatWidget.css
```

Script Puter SDK ditambahkan di `index.html`:

```html
<script src="https://js.puter.com/v2/" defer></script>
```

Behavior:

- Website tidak memanggil auth manual seperti `puter.auth.signIn()`.
- Notice menampilkan pesan:
  `Silahkan connect dengan Google Account Anda melalui popup Puter AI untuk melanjutkan chat dengan CS kami.`
- Input aktif selama Puter SDK tersedia.
- Saat user pertama kali mengirim chat, pesan langsung dikirim ke `puter.ai.chat()`.
- Jika Puter membutuhkan login, popup Puter AI akan muncul otomatis dari SDK.
- AI menggunakan persona Hazana CS Assistant dengan context layanan, business units, dan informasi perusahaan.
- Jika SDK/API gagal, widget menampilkan fallback error dan tidak membuat halaman crash.

Tidak ada API key yang di-hardcode. Integrasi berjalan client-side melalui Puter SDK.

## Deployment Cloudflare Workers Static Assets

Konfigurasi Wrangler tersedia di:

```text
wrangler.toml
```

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

Deploy manual via Wrangler:

```bash
npm run build
npx wrangler deploy
```

Untuk Cloudflare Workers deploy di dashboard:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Static assets directory dikonfigurasi di `wrangler.toml`

## Checklist Sebelum Deploy

- `npm run build` sukses tanpa error
- Semua asset image tampil normal
- Navbar dan smooth-scroll berfungsi
- Mobile menu berfungsi
- Hero globe tidak keluar dari batas lingkaran
- Services diagram tampil di desktop dan tersembunyi di mobile
- Tidak ada hardcoded localhost URL
- Favicon dan manifest tersedia di `public/`

## Informasi

Hazana Corp - Bogor, Jawa Barat  
Est. 2019
